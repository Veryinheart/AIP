const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var mongoose = require('mongoose');
var router = require('./models/router');
// parse the request body of the post request by body-parser express middleware
var bodyParser = require('body-parser');
var md5 = require('blueimp-md5');
var User = require('./models/user');
var check = require('./models/check');
var session = require('express-session');
var FileStore = require('session-file-store')(session);

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(express.static(__dirname +'client/public'));
// database configuration
// http://mlab.com, account:WBruce, password:obsidian0822.
var dbUrl = 'mongodb://aip:aip2018@ds241012.mlab.com:41012/aip';

app.use('http://localhost:8080',function (req,res,next) {
    res.header('Access-Control-Allow-Origin',req.headers.origin);
    res.header('Access-Control-Allow-Method','POST,HEAD,GET');
    res.header('Access-Control-Allow-Headers','X-Requested-With');
    res.header('Access-Control-Allow-Headers','Content-Type');
    res.header('Access-Control-Allow-Credentials',true);
    next();
})

app.use(session({
  name: 'identityKey',
  secret: 'aip3session',
  saveUninitialized: false,
  resave:false,
  cookie:{
    secure:false,
    maxAge:30*60*1000
  }
}))

mongoose.connect(dbUrl, {useNewUrlParser : true}, (err) => {

    console.log("mongo db connection", err);

});


app.use(router);
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));


