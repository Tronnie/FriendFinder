var friendsData = require ('../data/friend.js');

module.exports = function (app){

  app.get('/api/friends', function(req,res) {
  	res.json(friendsData);
  });

  app.post('/api/friends', function(req,res) {
    var newfriend = req.body;
    newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();

    console.log(newfriend);

    characters.push(newfriend);

    res.json(newfriend);
  });
}


//PSEUDOCODE: Compatibility logic

// var currentUser = newfriend.scores[];
//
// var user1 = friendsArray[0].scores[];
// var user2 = friendsArray[1].scores[];
// var user3 = friendsArray[2].scores[];
//
//
//  var comp1 = (currentUser - user1)
//  var comp2 = (currentUser - user2)
//  var comp3 = (currentUser - user3)
//
// if comp1 = [0,0,0,0,0]{
//   push.modal (user1)
// } else if {
//   comp2 = [0,0,0,0,0]{
//     push.modal (user2)
// }else{
//   comp3 = [0,0,0,0,0]{
//     push.modal (user3)
// }

//...something like that
