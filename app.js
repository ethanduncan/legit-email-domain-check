var express = require('express');
var app = express();
const legit = require("legit");
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.get('/healthcheck', function (req, res) {
  
});

app.post('/validate', function(req,res){
   var email = req.body.email;
    legit(email)
  .then(result => {
    result.isValid ? console.log("Valid!") : console.log("Invalid!");
    console.log(JSON.stringify(result));
    res.status(200).send({result:"Good Domain"});
    return;
  })
  .catch(function (err) {
    console.log(err);
    res.status(400).send({error: "Bad Domain"});
    return;
  })
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});