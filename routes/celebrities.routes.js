const Celebrity = require("../models/Celebrity.model");

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

//require Model


// all your routes here
// celebrities/create
router.get ("/create", (req, res) => {
    res.render("celebrities/new-celebrity");

});
router.post("/create", async(req, res) => {
    try{
    const {name, occupation, catchPhrase} = req.body
const createdCeleb = await Celebrity.create({
    name, occupation, catchPhrase
})
console.log(createdCeleb)
   res.redirect("/celebrities/")
} catch (error){
    console.log(error)
    res.render("celebrities/new-celebrity")
}
})

// You already have "/celebrities" in the app.js, herefore you start with a simple "/". This is called the base path for your DB Entity (MongoDB Docuemnt)
/* router.get("/", (req, res) => {
    Celebrity.find()
    .then((celebritiesfound) => res.render("celebrities/celebrities", { celebritiesfound }));
  });
*/

router.get("/", async (req, res) => {
    try{
        const celebritiesfound = await Celebrity.find() 
        res.render("celebrities/celebrities", {celebritiesfound})
    }
    catch(error) {
        console.log(error)
    }
})



module.exports = router;
