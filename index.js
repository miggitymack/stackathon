const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let port = process.env.PORT || 1337;

app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests

app.post('/hello', function(req, res, next) {
  let userName = req.body.user_name;
  let botPayload = {
    text: 'Welcome ' + userName + ', to my alexa test'
  }

  if (userName !== 'gifbot') {
    res.status(200).json(botPayload)
  } else {
    return res.status(200).end()
  }
});

app.listen(port, function() {
  console.log('listening on port' + port);
});
