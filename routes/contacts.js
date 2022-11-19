var express = require('express');
var router = express.Router();
const Contact = require("../models/contact")
router.get('/', async (req, res, next) => {
    const contactList = await Contact.find({});
    //res.json("contact route works");
    res.render('form', contactList);
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