var friendList = require('../data/friends.js');
var path = require('path');

//==============================================
//ROUTING
//==============================================

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friendList);
    });

    app.post('/api/friends', function (req, res) {
        friendList.push(req.body);
    })
};































// var friends = require("../data/friends.js");


// module.exports = function (app) {

//     app.get("/api/friends", function(req, res) {
//         res.sendFile(path.join(__dirname, "../api/friends.html"));
//     });

//     app.post("/api/friends", function(req, res) {
//         console.log(req.body);
//     });

//     var newFriend = {
//         name: req.body.name,
//         photo: req.body.photo,
//         scores: req.body.scores.map(function (score) {
//             return parseInt(score);


//             // loop through friendsArray 

//             for (var i = 0; i < (friendsArray.length - 1); i++) {

//                 // consolidate each array of scores to a single score or value
//                 //array.reduce - totals numbers in the array
//                 // figure out what index in our friends array belongs to the lowest single value score
//                 for (var j = 0; j < 10; j++) {
//                     totalDifference += Math.abs(friendsArray[i].scores[j] - newFriend.scores[j]);
//                 }
//                 allDifferences.push(totalDifference);
//                 totalDifference = 0;
//             }

//             var bestMatch = friendsArray[allDifferences.indexOf(Math.min.apply(null, allDifferences))];

//             res.send(bestMatch);
//             console.log(bestMatch);
//         })
//     }
// }