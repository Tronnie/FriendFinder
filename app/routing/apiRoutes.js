
//backend route
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
