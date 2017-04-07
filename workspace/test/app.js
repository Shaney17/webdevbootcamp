var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
   res.render("home.ejs"); 
});

app.post("/login", function(req, res){
   var ID = req.body.ID;
   var password = req.body.password;
   
   res.render("check.ejs", {ID:ID, password:password});
   res.redirect("/");
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server is running....."); 
});