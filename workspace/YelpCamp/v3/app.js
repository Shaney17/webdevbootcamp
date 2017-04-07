var bodyParser  = require("body-parser");
var express     = require("express");
var app         = express();
var mongoose    = require("mongoose");
var campgrounds = require("./models/campground.js");
var Comments    = require("./models/comment.js");
var seedDB      = require("./seeds");


mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/yelp_camp_v3");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
seedDB();

// var campground = [
//       {name:"Ciputra", image:"https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},
//       {name:"Royal City", image:"https://farm9.staticflickr.com/8167/7121865553_e1c6a31f07.jpg"},
//       {name:"The Garden", image:"https://farm8.staticflickr.com/7258/7121861565_3f4957acb1.jpg"},
//       {name:"Big C", image:"https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg"},
//       {name:"Yen So Park", image:"https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg"},
//       {name:"Hoa Binh Park", image:"https://farm8.staticflickr.com/7268/7121859753_e7f787dc42.jpg"},
//       {name:"Dai Lai Lake", image:"https://farm3.staticflickr.com/2655/3738566424_180036be3f.jpg"}
//       ];

app.get("/", function(req, res){
   res.render("home"); 
});


app.get("/camps", function(req, res){
   campgrounds.find({}, function(err, campgrounds){
      if(err){
         console.log(err);
      } else {
         res.render("campgrounds/camps", {campground: campgrounds});
      }
   });
});

app.get("/camps/new", function(req, res){
   res.render("campgrounds/new");
});

app.get("/camps/:id", function(req, res) {
   campgrounds.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            //render show template with that campground
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

app.post("/camps", function(req, res){
   var newName = req.body.name;
   var image = req.body.image;
   var desc = req.body.description;
   var newCamp = {name: newName, image: image, description: desc};
   campgrounds.create(newCamp, function(err, campground){
      if(err){
         console.log(err);
      } else {
         res.redirect("/camps");
      }
   });
});

app.get("/camps/:id/comments/new", function(req, res) {
   campgrounds.findById(req.params.id, function(err, foundCampground){
      if(err){
         res.redirect("/camps" + req.params.id);
      } else {
         res.render("comments/newComment", {campground: foundCampground});
      }
   });
});

app.post("/camps/:id/comments", function(req, res){
   campgrounds.findById(req.params.id, function(err, foundCampground) {
      if(err) {
         console.log(err);
         res.redirect("/camps/" + req.params.id);
      } else{
         Comments.create(req.body.comment, function(err, createdComment){
            if(err){
               console.log(err);
               res.redirect("/camps/" + req.params.id);
            } else{
               foundCampground.comments.push(createdComment);
               foundCampground.save();
               res.redirect("/camps/" + req.params.id);
            }
         });
      }
   });
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server is running..."); 
});