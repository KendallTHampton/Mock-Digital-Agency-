const express = require("express")
const app = express();
const bodyParser = require("body-parser")
const request = require("request")

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));


// Prep

app.get("/", function(request, response) {

  response.sendFile(__dirname + "/index.html");


});


app.get("/Submit.html", function(request, response) {

  response.sendFile(__dirname + "/Submit.html");
});






// POST REQUEST












app.listen(process.env.PORT || 3000, function(req, res) {
  console.log("server is running")

});
