const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const path = require('path')
const fs = require('fs')
const router = require('./../routes/router')

app.use(bodyParser.urlencoded({ limit: '200mb', extended: true}));
app.use(bodyParser.json({limit: '200mb'}));
app.use("/storage",express.static(__dirname + '/storage'))

app.use('/api',router)

//error handler
app.use(function(err, req, res, next){
  console.log(err.message);    // example., Invalid name
  return res.status(500).send({message: err.message});
});

app.listen(port, (err) => {
    if (err) {
        console.log("EXIT ERROR")
        throw new Error
    }

    console.log(`Listen on port ${port}`)
})
