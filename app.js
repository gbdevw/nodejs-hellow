const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/Routes');
const port = 3000;

// Setup apps
const app = express();

// Parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Include routes
app.use("/api/v1", routes);

// Start the app
app.listen(port, () => console.log(`App listening on port ${port}!`));