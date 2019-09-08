import express from "express";
import * as bodyParser from "body-parser";
import socketIO from "socket.io";
import * as http from "http";
import cors from "cors";
import helmet from "helmet";
import TYPES from "./types";
import container from "./inversify.config";
import { logger } from "./util/Logger";
import { RegistrableController } from "./controller/RegisterableController";
import "reflect-metadata";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";

const app: express.Application = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// grabs the Controller from IoC container and registers all the endpoints
const controllers: RegistrableController[] = container.getAll<
  RegistrableController
>(TYPES.Controller);
controllers.forEach(controller => controller.register(app));

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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

const server = http.createServer(app);

server.listen(5000, function() {
  logger.info("Example app listening on port 5000!");
});

const io = socketIO(server);

io.on("connection", socket => {
  logger.info("a user connected");

  socket.on("change color", color => {
    console.log("Color Changed to: ", color);
    io.sockets.emit("change color", color);
  });

  socket.on("post title", title => {
    console.log("Color Changed to: ", title);
    io.sockets.emit("post title", title);
  });
  socket.on("disconnect", () => {
    logger.info("a user disconnected");
  });
});
