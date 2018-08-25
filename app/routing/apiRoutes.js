var friendsArray = require("../data/friends.js");


module.exports = function(app){

    app.get("/api/friends", function (req, res) {
        res.sendFile(path.join(__dirname, "../api/friends.html"));
    });

    app.post("/api/friends", function(req, res){
        console.log(req.body);

        var newFriend = {
            name: req.body.name,
            photo: req.body.photo,
            scores: req.body.scores.map(function(score){
                return parseInt(score);
            })
        }

        // loop through friendsArray 
                // inner loop (inner for loop) of each friends score relative to the new friends score for each question
                // determine absolute value difference of each score

        
        

                // consolidate each array of scores to a single score or value (look into array.reduce)
                // figure out what index in our friends array belongs to the lowest single value score
    })

}
