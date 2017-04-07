var express = require("express");
var app = express();

//home page
app.get("/", function(req, res){
   res.send("Hello World!!"); 
});

//domain cat
app.get("/cat", function(req, res){
   res.send("Hi my cat!!"); 
});

app.get("/r/:subredditName", function(req, res) {
   res.send("Welcome to the " + req.params.subredditName.toUpperCase() + " subreddit!!"); 
});

//start server
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server is running"); 
});