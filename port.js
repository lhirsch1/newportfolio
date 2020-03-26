const axios = require("axios");



axios
    .get('http://api.openweathermap.org/data/2.5/weather?q=minneapolis&appid=3b769af740b91883e455afbf50886509')
    .then(function(res){
        console.log(res)}
    );

