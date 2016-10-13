var express = require('express');
var bodyParser = require('body-parser')
var nodemailer = require('nodemailer');
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index', { title: 'Hung Cao' });
});
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'daong.js@gmail.com',
        pass: ''
    }
});
app.post('/mail', function(request, response){
    transporter.sendMail({
        from: request.body.email,
        to: 'daong.js@gmail.com',
        subject: request.body.wordcount,
        text: request.body.message
    });
    transporter.sendMail({
   from: "My Name <me@example.com>", // sender address
   to: "Your Name <daong.js@gmail.com>", // comma separated list of receivers
   subject: "Hello ✔", // Subject line
   text: "Hello world ✔" // plaintext body
}, function(error, response){
   if(error){
       console.log(error);
   }else{
       console.log("Message sent: " + response.message);
   }
});
    response.status(200).send("Thank you for spending your time with me. Your message was sent");
});
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});