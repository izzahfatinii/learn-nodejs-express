var express = require('express');
var router = express.Router();
var connection = require('../database').databaseConnection;

router.get('/', function(req, res, next) {
    var sql = 'SELECT * FROM users';

    connection.query(sql, (err, rows) => {
        if(err) res.status(500).send(err);
        res.send(rows);
    });
});

router.get('/:id', function(req, res, next) {
    var sql = 'SELECT * FROM users WHERE id = ?';

    connection.query(sql, [req.params.id], (err, rows) => {
        if(err) res.status(500).send(err);

        if(rows.length > 0) {
            res.status(200).send(rows);
        }
        else {
            res.status(404).send({
                error: 'No user found.',
            });
        }
    });
});

module.exports = router;
