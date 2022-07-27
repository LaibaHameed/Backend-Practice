const express = require('express');
const Router = express.Router();


//? calling my controllers
const {
    ProductData,
    GetProductData,
    UpdateMyProductData,
    DeleteProductData
} = require('../Controller/ProductManagementController');

Router.post('/ProductData', ProductData);
Router.get('/GetProductData', GetProductData);
Router.post('/UpdateMyProductData', UpdateMyProductData);
Router.delete('/DeleteProductData', DeleteProductData);

module.exports = Router;