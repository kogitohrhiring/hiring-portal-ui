// HTTP SERVER
const express = require('express');
var cors = require('cors');
const app = express();
var bodyParser = require('body-parser')
const config = require('./config');

const controller = require('./controllers');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(
    cors({
      origin: config.corsDomain, // Be sure to switch to your production domain
      optionsSuccessStatus: 200
    })
  );
  app.get('/jobs', controller.getJobs)
  app.get('/jobs/:id', controller.getjob)
function setPort(port = 4000) {
    app.set('port', parseInt(port, 10));
  }
  
  function listen() {
    const port = app.get('port') || config.port;
    app.listen(port, () => {
      console.log(
        `The server is running and listening at http://localhost:${port}`
      );
    });
  }

module.exports = {
    getApp: () => app,
    setPort,
    listen
  };