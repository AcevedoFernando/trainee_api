require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const router = require('./routes/router')
const sequelize = require('./database/db');

app.use(bodyParser.urlencoded({ limit: '200mb', extended: true}));
app.use(bodyParser.json({limit: '200mb'}));

 // Headers Accepted by server
app.use(function (req, res, next) {
        console.log(process.env.APP_ENV)
        if (process.env.APP_ENV === 'production') {
            res.header("Origin, X-Requested-With, Content-Type, Accept");
        } else {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.header("Access-Control-Allow-Methods", "*");
        }

        next();
        
    });
    
app.use("/storage",express.static(__dirname + '/storage'))

app.use('/api/v1',router)

//error handler
app.use(function(err, req, res, next){
  console.log(err.message);    // example., Invalid name
  return res.status(500).send({message: err.message});
});

app.listen(port, (err) => {  
    sequelize.authenticate().then(() => {
        console.log("Se ha establecido la conexión");
    })

    console.log(`Listen on port ${port}`)
})
