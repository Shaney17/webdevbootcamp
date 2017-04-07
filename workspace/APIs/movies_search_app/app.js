var express = require("express");
var app = express();
var request = require("request");

app.get("/", function(req, res){
   res.render("home.ejs"); 
});

app.get("/search", function(req, res){
   var search = req.query.search;
   var url = "http://www.omdbapi.com/?s=" + search;
   
   request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render("result.ejs", {data: data});
   } 
      
   });
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server is running....."); 
});