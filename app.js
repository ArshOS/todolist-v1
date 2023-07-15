const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

var today = new Date();
var currentDay = today.getDay();
var day = "";

app.get('/', function(req, res){

    switch (currentDay) {
        case 0:
            day = "Sunday";
        break;
            
        case 1:
            day = "Monday";
        break;

        case 2:
            day = "Tuesday";
        break;
            
        case 3:
            day = "Wednesday";
        break;

        case 4:
            day = "Thursady";
        break;

        case 5:
            day = "Friday";
        break;
            
        case 6:
            day = "Saturday";
        break;
    
        default:
            console.log("Error: current day is " + currentDay);
        break;
    }

    res.render("list", {kindOfDay : day});

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
