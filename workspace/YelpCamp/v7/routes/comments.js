var express     = require("express");
var router      = express.Router({mergeParams:true});
var Campgrounds = require("../models/campground.js");
var Comment     = require("../models/comment.js");


//show add comment page
router.get("/new", isLoggedIn, function(req, res){
    // find campground by id
    Campgrounds.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        } else {
             res.render("comments/newComment", {campground: campground});
        }
    });
});

//post a new comment
router.post("/",isLoggedIn,function(req, res){
   //lookup campground using ID
   Campgrounds.findById(req.params.id, function(err, campground){
       if(err){
           console.log(err);
           res.redirect("/camps");
       } else {
        Comment.create(req.body.comment, function(err, comment){
           if(err){
               console.log(err);
           } else {
               //add id and username to new comment
               comment.author.id = req.user._id;
               comment.author.username = req.user.username;
               //save comment
               comment.save();
               campground.comments.push(comment);
               campground.save();
               res.redirect('/camps/' + campground._id);
           }
        });
       }
   });
});

//middeware check login
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;