var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    //res.json("contact route works");
    res.render('form');
});

router.post('/', (req, res, next) => {
    const {FullName, Phone} = req.body;
    console.log(FullName, Phone);
    res.redirect('/contacts');
});


module.exports = router;