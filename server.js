// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Set up Express with Data Parsing
var app = express();
var PORT = 3001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Data
var friends = [{
  routeName: "yoda",
  name: "Yoda",
  photo: "https://i.pinimg.com/736x/38/79/63/387963645565abd43556d6465c7044d5--star-wars-yoda-star-wars-halloween.jpg",
  scores: ["1","1","1"]
}, {
  routeName: "darthmaul",
  name: "Darth Maul",
  photo: "http://news.toyark.com/wp-content/uploads/sites/4/2016/06/Darth-Maul-Statue-by-Sideshow-009.jpg",
  scores: ["2","2","2"]
}, {
  routeName: "obiwankenobi",
  name: "Obi Wan Kenobi",
  photo: "https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864&width=768",
  scores: ["3","3","3"]
}];

//Cartman photos https://consequenceofsound.files.wordpress.com/2017/08/gkhjzfp.jpg?quality=80&w=807

// Test CLI
console.log ("hello");
console.log(friends[0].name);
console.log(friends[0].photo);


//Front-end routes
app.get("/",function(req,res){
	res.sendFile(path.join(__dirname,'home.html'));

});

app.get("/survey",function(req,res){
	res.sendFile(path.join(__dirname,'survey.html'));

});

//Back-end routes
app.get('/api/friends', function(req,res) {
	res.json(friends);
});

app.post('/api/friends', function(req,res) {
  var newfriend = req.body;
  newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();

  console.log(newfriend);

  characters.push(newfriend);

  res.json(newfriend);
});


// Port Listen
app.listen(PORT,function(){
	console.log('Listening on PORT', PORT);
})
