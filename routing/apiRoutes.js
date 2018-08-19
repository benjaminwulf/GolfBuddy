// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var buddies = require("../data/buddies.js");

module.exports = function(app) {
    app.get("/api/buddies", function(req,res) {
        res.json(buddies);
    });

    app.post("/api/buddies", function(res,res) {
        var bestMatch = {
            name: "",
            photo: "",
            buddyDiff: Infinity
        };
        var userData = req.body;
        var userScores = userData.scores;
        
        // This var will calc the diff btw the userScores and the scores of each user in database
        var totalDiff;
        for(var i = 0; i < buddies.length; i++) {
            var currentBuddy = buddies[i];
            totalDiff = 0;
            console.log(currentBuddy.name);
            
            // This extra for loop is to iterate through each score of all the buddies
            for(var j = 0; i < currentBuddy.scores.length; i++) {
                var currentBuddyScore = currentBuddy.scores[j];
                var currentUserScore = userScores[j];

                totalDiff += Math.abs(parseInt(currentUserScore) - parseInt(currentBuddyScore));
            } 
            if (totalDiff <= bestMatch.buddyDiff) {
                bestMatch.name = currentBuddy.name;
                bestMatch.photo = currentBuddy.photo;
                bestMatch.buddyDiff = totalDiff;
            }
        }
        buddies.push(userData);
        res.json(bestMatch);
    });
};