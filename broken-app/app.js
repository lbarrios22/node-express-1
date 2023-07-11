const express = require('express');
const app = express();
const route = require('./routes/routes');
const ExpressErrors = require('./expressErrors');

app.use(express.json());

app.use('/', route);


app.use((err, req, res, next) => {
  throw new ExpressErrors('Page Not Found', 404);
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: {
      message: message,
      status: status
    }
  });
});



module.exports = app;
