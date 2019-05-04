import { RegistrableController } from "./RegisterableController";
import * as express from "express";
import { injectable } from "inversify";

@injectable()
export class SocketIOController implements RegistrableController {
  public register(app: express.Application): void {
    app
      .route("/socket")
      .get(
        async (
          req: express.Request,
          res: express.Response,
          next: express.NextFunction
        ) => {}
      );
  }
}
