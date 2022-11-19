var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.json("contact route works");
});


module.exports = router;