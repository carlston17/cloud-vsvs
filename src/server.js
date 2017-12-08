var express = require('express')
var firebase = require("firebase");
var app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));

var config = {
  apiKey: "AIzaSyAMcqmIvLgrC4gfVO6p06buBYSgD680eB0",
  authDomain: "finalcloudcomp.firebaseapp.com",
  databaseURL: "https://finalcloudcomp.firebaseio.com",
  storageBucket: "",
};

firebase.initializeApp(config);


app.listen(3000, function () {
  console.log('App listening on port 3000!')
})

app.post("/individualApp",function (req, res) {
  	firebase.database.ref('/').set(req.body)
})


app.post("/partnerApp",function (req, res) {
   firebase.database.ref('/').set(req.body)
})