import { injectable, inject } from "inversify";
import TYPES from "../types";
import "reflect-metadata";
import { UserRepositoryImplDb } from "../repository/UserRepository";
import { Users } from "../entity/Users";
import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import config from "../config/config";

@injectable()
export class AuthorizationServiceImpl {
  @inject(TYPES.UserRepository)
  private userRepositoryDb: UserRepositoryImplDb;

  login = async (req: Request, res: Response) => {
    let { username, password } = req.body;
    if (!(username && password)) {
      return res.status(400).send("lütfen girin");
    }

    let user: Users;
    try {
      user = this.userRepositoryDb.login(username);
    } catch (error) {
      res.status(401).send();
    }

    if (!user.checkIfUnencryptedPasswordIsValid(password)) {
      res.status(401).send();
      return;
    }

    const token = jwt.sign(
      { userId: user._id, username: user.username },
      config.jwtSecret,
      { expiresIn: "1h" }
    );

    res.send(token);
  };
}
