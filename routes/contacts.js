var express = require('express');
var router = express.Router();
const Contact = require("../models/contact")
router.get('/', (req, res, next) => {
    //res.json("contact route works");
    res.render('form');
});

router.post('/', async (req, res, next) => {
    try{
        const {FullName, Phone} = req.body;
        console.log(FullName, Phone);
        const newContact = new Contact({
            FullName,
            Phone
        });
        const addUser = await newContact.save();
        console.log(addUser);
        res.redirect('/contacts');
    }
    catch(err){
        console.log(err)
        res.status(500).send(err);
    }

});


module.exports = router;