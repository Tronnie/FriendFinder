// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Set up Express with Data Parsing
var app = express();
var PORT = process.env.PORT || 3001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


// Test CLI
console.log ("YOU ARE CONNECTED!! YAY!");
// console.log(friends[0].name);
// console.log(friends[0].photo);


//Front-end routes
// app.get("/",function(req,res){
// 	res.sendFile(path.join(__dirname,'home.html'));
//
// });
//
// app.get("/survey",function(req,res){
// 	res.sendFile(path.join(__dirname,'survey.html'));
//
// });
//
// //Back-end routes
// app.get('/api/friends', function(req,res) {
// 	res.json(friends);
// });
//
// app.post('/api/friends', function(req,res) {
//   var newfriend = req.body;
//   newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();
//
//   console.log(newfriend);
//
//   characters.push(newfriend);
//
//   res.json(newfriend);
// });


// Port Listen
app.listen(PORT,function(){
	console.log('Listening on PORT', PORT);
})
