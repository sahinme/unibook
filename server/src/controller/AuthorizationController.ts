import * as express from "express";
import { injectable, inject } from "inversify";
import TYPES from "../types";
import { RegistrableController } from "./RegisterableController";
import { UserService } from "../service/UserService";
import { User } from "../model/User";
import { AuthorizationServiceImpl } from "../service/AuthorizationService";

@injectable()
export class AuthorizationController implements RegistrableController {
  private authService: AuthorizationServiceImpl;

  constructor(
    @inject(TYPES.AuthorizationService) authService: AuthorizationServiceImpl
  ) {
    this.authService = authService;
  }

  public register(app: express.Application): void {
    app
      .route("/login")
      .post(
        async (
          req: express.Request,
          res: express.Response,
          next: express.NextFunction
        ) => {
          await this.authService.login(req, res).catch(err => next(err));
        }
      );
  }
}
