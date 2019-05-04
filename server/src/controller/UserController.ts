import * as express from "express";
import { injectable, inject } from "inversify";
import TYPES from "../types";
import { RegistrableController } from "./RegisterableController";
import { UserService } from "../service/UserService";
import { User } from "../model/User";
import { checkJwt } from "../middlewares/checkJwt";

@injectable()
export class UserController implements RegistrableController {
  private userService: UserService;

  constructor(@inject(TYPES.UserService) userService: UserService) {
    this.userService = userService;
  }

  public register(app: express.Application): void {
    app
      .route("/user")
      .get(
        async (
          req: express.Request,
          res: express.Response,
          next: express.NextFunction
        ) => {
          const users = await this.userService
            .getUsers()
            .catch(err => next(err));
          res.json(users);
        }
      )
      .post(
        async (
          req: express.Request,
          res: express.Response,
          next: express.NextFunction
        ) => {
          const user = new User(
            req.body.name,
            req.body.surname,
            req.body.username,
            req.body.password,
            req.body.email,
            req.body.major,
            req.body.college,
            req.body.faculty,
            req.body.isGraduated,
            req.body.followers,
            req.body.male,
            req.body.phoneNumber,
            req.body.birthDate
          );
          user.hashPassword();
          const createdUser = await this.userService
            .createUser(user)
            .catch(err => next(err));
          res.json(createdUser);
        }
      );

    app
      .route("/user/:id")
      .get(
        checkJwt,
        async (
          req: express.Request,
          res: express.Response,
          next: express.NextFunction
        ) => {
          const users = await this.userService
            .getUser(<number>req.params.id)
            .catch(err => next(err));
          res.json(users);
          if (!users) {
            res.json("user not found");
          }
        }
      )
      .put(
        async (
          req: express.Request,
          res: express.Response,
          next: express.NextFunction
        ) => {
          const user = new User(
            req.body._id,
            req.body.name,
            req.body.surname,
            req.body.username,
            req.body.password,
            req.body.email,
            req.body.major,
            req.body.college,
            req.body.faculty,
            req.body.isGraduated,
            req.body.followers,
            req.body.male,
            req.body.phoneNumber,
            req.body.birthDate
          );

          const updatedUser = await this.userService
            .updateUser(user)
            .catch(err => next(err));
          res.json(updatedUser);
        }
      )
      .delete(
        async (
          req: express.Request,
          res: express.Response,
          next: express.NextFunction
        ) => {
          await this.userService
            .deleteUser(<number>req.params.id)
            .catch(err => next(err));
          res.json({ msg: "Deleted succesfully" });
        }
      );
  }
}
