import express from "express";

// create express application
const app: express.Application = express();
// let express support JSON bodies

// setup express middleware logging and error handling
app.use(function(
  err: Error,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  next(err);
});

app.use(function(
  err: Error,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  res.status(500).send("Internal Server Error");
});

app.listen(5000, function() {
  console.log("listening");
});
