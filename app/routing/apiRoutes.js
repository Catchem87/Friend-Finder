var path = require("path");

var friendsList = require(path.join(__dirname, "../data/friends"));

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsList);
    });

    app.post("/api/friends", function(req, res) {
        friendsList.push(req.body);
    });
}