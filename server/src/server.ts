import express from "express";
import * as bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import TYPES from "./types";
import container from "./inversify.config";
import { logger } from "./util/Logger";
import { RegistrableController } from "./controller/RegisterableController";
import "reflect-metadata";

const app: express.Application = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

// grabs the Controller from IoC container and registers all the endpoints
const controllers: RegistrableController[] = container.getAll<
  RegistrableController
>(TYPES.Controller);
controllers.forEach(controller => controller.register(app));

// setup express middleware logging and error handling
app.use(function(
  err: Error,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  logger.error(err.stack);
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

app.listen(3000, function() {
  logger.info("Example app listening on port 3000!");
});
