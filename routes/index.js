var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('API connected');
});

router.post('/submit', function(req, res, next) {
    /*  CORS without installing cors package. 
        Resource: https://www.stackhawk.com/blog/react-cors-guide-what-it-is-and-how-to-enable-it/  */
    // res.set('Access-Control-Allow-Origin', '*');

    res.send({
        msg: 'API connected. Yeay 🎉',
    });
});

module.exports = router;
