const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

var items = [];

app.get('/', function(req, res){

    var today = new Date();
    var options = {
        weekday : "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);

    res.render("list", {kindOfDay : day, newListItems : items});

});

app.post('/', function(req, res){
    var item = req.body.newItem;
    items.push(item);
    res.redirect('/');
});
app.get("/about", function(req, res){
    res.render("about");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
