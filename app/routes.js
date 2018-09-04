//require express
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// create for our router object
var router = express.Router();

//export our router
module.exports = router;

//route for our homepage
router.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../index.html'));
});



router.post('/email',urlencodedParser, function(req, res){
    console.log(req.body.Email);
    // using SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: 'grifo.lixo.1@gmail.com',
        from: req.body.Email,
        subject: 'teste',
        text: req.body.text,
    };
    sgMail.send(msg);
    res.sendFile(path.join(__dirname, '../index.html'));
});
