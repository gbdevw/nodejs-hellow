const express = require('express');
const uuid = require('uuid-random');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const router = express.Router();

const Person = require('../models/Person');
const Greeting = require('../models/Greeting');

// Generate UUID for the app
app_uuid = uuid();

/**
 * @swagger
 * tags:
 *   name: Hello
 *   description: Hello operations
 */

/**
 * @swagger
 * path:
 *  /hello/:
 *    post:
 *      summary: Ask to say hello to you
 *      tags: [Hello]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Person'
 *      responses:
 *        "200":
 *          description: A greeting message
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Greeting'
 */
router.post('/hello', (req, res) => {
    var person = new Person(req.body.firstName, req.body.lastName);
    var greeting = new Greeting(person.firstName, person.lastName, app_uuid)
    res.json(greeting) 
});

// Swagger set up
const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Say Hello API",
      version: "1.0.0",
      description:
        "A simple Say Hello API",
      license: {
        name: "Apache-2.0",
        url: "https://choosealicense.com/licenses/apache-2.0/"
      },
      contact: {
        name: "Swagger",
        url: "https://swagger.io",
        email: "Info@SmartBear.com"
      }
    },
    servers: [
      {
        url: "http://localhost:3000/api/v1"
      }
    ]
  },
  apis: [
    "./models/person.js",
    "./models/greeting.js",
    "./routes/routes.js"
  ]
};

const specs = swaggerJsdoc(options);
router.use("/docs", swaggerUi.serve);
router.get(
  "/docs",
  swaggerUi.setup(specs, {
    explorer: true
  })
);

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