var bodyParser = require("body-parser"),
methodOverride = require("method-override"),
expressSanitizer = require("express-sanitizer"),
mongoose       = require("mongoose"),
express        = require("express"),
app            = express();

mongoose.connect("mongodb://localhost/blog_app");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(express.static("public"));
app.use(methodOverride("_method"));

var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("blog", blogSchema);

// Blog.create({
//   title: "Test Blog",
//   image: "http://blog.apastyle.org/.a/6a01157041f4e3970b01b7c82eb758970b-320wi",
//   body: "This is the test blog"
// });

app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
       if(err){
           console.log(err);
       } else {
           res.render("index", {blogs: blogs});
       }
    });
});

app.get("/blogs/new", function(req, res){
   res.render("new"); 
});

app.post("/blogs", function(req, res){
    req.body.blog.body = req.sanitize(req.body.blog.body);
    console.log(req.body);
    var newBlog = req.body.blog;
    Blog.create(newBlog, function(err, createdBlog){
        if(err) {
            res.render("new");
        } else {
            res.redirect("/blogs");
        }
    });
});

app.get("/blogs/:id", function(req, res) {
   Blog.findById(req.params.id, function(err, foundBlog){
       if(err) {
           res.redirect("/blogs");
       } else {
           res.render("show", {blog: foundBlog});
       }
   }) ;
});

app.get("/blogs/:id/edit", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog){
       if(err) {
           res.redirect("/blogs" + req.params.id);
       } else {
           res.render("edit", {blog: foundBlog});
       }
   }) ;
});

app.put("/blogs/:id", function(req, res){
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
      if(err) {
        res.redirect("/blogs");
      } else {
        res.redirect("/blogs/" + req.params.id);
      }
  }); 
});

app.delete("/blogs/:id", function(req, res){
   Blog.findByIdAndRemove(req.params.id, function(err){
      if(err){
          console.log(err);
          res.redirect("/blogs");
      } else {
          res.redirect("/blogs");
      }
   });
});


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server is running....."); 
});