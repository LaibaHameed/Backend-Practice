const express = require('express');
const Router = express.Router();

const {ProductData} = require('../Controller/pdController')

Router.post('/ProductData', ProductData)

//exports
module.exports = Router