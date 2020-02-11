const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/Routes');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const port = process.env.PORT || 3000;
const host = process.env.WEBSITE_SITE_NAME || process.env.HOST || "localhost";
const base = "/api/v1";

// Setup apps
const app = express();

// Parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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
          url: "http://" + host + ":" + port + base
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
  app.use(base + "/docs", swaggerUi.serve);
  app.get(
    base + "/docs",
    swaggerUi.setup(specs, {
      explorer: true
    })
  );

// Include routes
app.use(base, routes);

// Start the app
app.listen(port, () => console.log(`App listening on host ${host} on port ${port}!`));