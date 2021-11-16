// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/Movie.model");
// all your routes here

router 
    .route("/create")
    .get( async(req, res) => {
        try {
            const allCelebs = await Celebrity.find()
            res.render("movies/new-movie.hbs", {allCelebs})
        } catch(error) {
            console.log(error)
        }
    })
    .post( async (req,res) => {
        try{
            const{title, genre, plot, cast} = req.body
            const createdMovie = await Movie.create({ title, genre, plot, cast})
            console.log(createdMovie)
            res.redirect("/movies")
        } catch (error) {
            console.log(error)
        }
    })

router    
    .route("/")
    .get(async (req, res) => {
        try{
            const moviesfound = await Movie.find()
            .populate('cast')
            res.render("movies/movies", {moviesfound})
        }
        catch(error) {
            console.log(error)
        }
    })

 
router.get("/:id", async (req, res) => {
    try{
        const {id} = req.params
        const foundMovie = await Movie.findById(id).populate('cast')
        console.log(foundMovie)
        res.render("movies/movie-details", {movie: foundMovie})
    }
    catch(error) {
        console.log(error)
    }


})    

router.post("/:id/delete", (req, res) => {
    Movie.findByIdAndRemove (req.params.id)
      .then(() => res.redirect("/movies/"))
      .catch((error) => console.log(error));
  });

  

module.exports = router;
