import express from 'express';

// React Components
import React from 'react';
import RDS from 'react-dom/server';
import Avataaars from 'avataaars';

const app = express();

app.get('/', (req, res) => {
  const appString = RDS.renderToString(<Avataaars {...req.query} />);

  res.writeHead(200, {
    'Content-Type': 'image/svg+xml',
  });
  res.end(appString);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
    });
  });
}

app.set("port", process.env.PORT || 3006);

var server = app.listen(app.get("port"), function() {
    console.log("Express server listening on port " + server.address().port);
});
