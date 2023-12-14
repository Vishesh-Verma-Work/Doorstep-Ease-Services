const express = require("express");
const app = express();
const path = require("path");
// const methodOverride = require('method-override')

// const { v4: uuidv4 } = require('uuid');

// app.use(methodOverride('_method'))
app.use(express.static('public'));
app.use(express.urlencoded ({extended : true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let port = 8080;

app.listen(port, ()=> {
    console.log(`Server is listening on port : ${port}`);
});

app.get("/home", (req,res)=>{
    res.render("index.ejs");
});

app.get("/about", (req,res)=>{
    res.render("about.ejs");
});

app.get("/contact", (req,res)=>{
    res.render("contact.ejs");
});

app.get("/services", (req,res)=>{
    res.render("services.ejs");
});

