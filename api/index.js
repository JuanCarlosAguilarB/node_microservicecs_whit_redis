const express = require('express');

// configuracuion
const config = require('../config/index.js')
const app = express();

// routes
const user = require('./components/user/network.js');

//router
app.use('/api/user', user)

//listing
app.listen(config.api.port, ()=>{
    console.log('Api lisnting in port ', config.api.port)
})