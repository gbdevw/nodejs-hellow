const express = require('express');
const uuid = require('uuid-random');
const router = express.Router();

const Person = require('../models/Person');
const Greeting = require('../models/Greeting');

// Generate UUID for the app
app_uuid = uuid();

/**
 * @swagger
 *  /hello:
 *    post:
 *      summary: Ask to say hello to you
 *      description: Ask to say hello to you
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: person
 *          description: The person to say hello to
 *          in: body
 *          required: true
 *          schema:
 *            $ref: '#/definitions/Person'
 *      responses:
 *        200:
 *          description: A greeting message
 *          schema:
 *            $ref: '#/definitions/Greeting'
 */
router.post('/hello', (req, res) => {
    var person = new Person(req.body.firstName, req.body.lastName);
    var greeting = new Greeting(person.firstName, person.lastName, app_uuid)
    res.json(greeting) 
});

// Catch 404 and forward to error handler
router.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Error Handler
router.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      error: {
        message: err.message
      }
    });
});

module.exports = router;