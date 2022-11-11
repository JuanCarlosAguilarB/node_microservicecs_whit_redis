const express = require('express');

const response = require('../../../network/response.js');

const router = express.Router();

router.get('/', function (req, res) {
    // res.send('all funcionando');
    response.success(req, res, 'all funcionando', '200');
});


module.exports = router;