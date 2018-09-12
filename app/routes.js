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


router.get('/home', function(req, res){
    res.sendFile(path.join(__dirname, '../index.html'));
});

router.post('/email',urlencodedParser, function(req, res){
    // using SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs

        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey("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");
        const msg = {
            to: 'geral@jest.pt',
            from: req.body.Email,
            subject: 'Contacto jest.pt',
            text: req.body.Message,
        };
        sgMail.send(msg);
       //res.sendFile(path.join(__dirname, '../index.html'));
       //res.send('root');
       res.redirect('home');

    
});

//route for our homepage
router.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../index.html'));
});

