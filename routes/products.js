var express = require('express');
var router = express.Router();
const products = require('../products.json');

router.get('/', (req, res, next) => {
    try{
        if(!products){
            throw new Error('Prduct is not found!.')
        }
        res.status(200).json(products);
    }
    catch(err){
        res.status(500).send(err.message);
    }
});
router.get('/:id', (req, res, next) => {
    try{
        //Object.keys(id);
        const {id} = req.params;
        const selectedProduct = products[id];
        if(!selectedProduct){
            throw new Error('Product not found!.');
        }
        res.status(200).json(selectedProduct);
    }
    catch(err){
        res.status(500).send(err.message);
    }
    //class UnauthorizedError extends Error{
    //    statusCode = 401;
    //    message ...
    //}
});

router.get('/:id/:qt', (req, res, next) => {
    try{
        //Object.keys(id);
        const {id,qt} = req.params;
        const selectedProduct = products[id];
        if(!selectedProduct){
            throw new Error('Product not found!.');
        }
        let modifiedProduct = {
            id :id,
            qt : parseInt(qt),
            unit_price : parseInt(selectedProduct.price),
            total_price : parseInt(selectedProduct.price)* qt
        };
        res.status(200).json(modifiedProduct);
    }
    catch(err){
        res.status(500).send(err.message);
    }
});

module.exports = router;