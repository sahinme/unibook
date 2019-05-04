import { injectable, inject } from "inversify";
import TYPES from "../types";
import "reflect-metadata";
import { UserRepositoryImplDb } from "../repository/UserRepository";
import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import config from "../config/config";
import * as bcrypt from "bcryptjs";

@injectable()
export class AuthorizationServiceImpl {
  @inject(TYPES.UserRepository)
  private userRepositoryDb: UserRepositoryImplDb;

  login = async (req: Request, res: Response) => {
    let { username, password } = req.body;
    if (!(username && password)) {
      return res.status(400).send("Please enter username and password");
    }

    const user = await this.userRepositoryDb.findOneOrFail(username);
    if (user) {
      const isPasswordMatching = await bcrypt.compare(password, user.password);
      if (isPasswordMatching) {
        const token = jwt.sign(
          { userId: user._id, username: user.username },
          config.jwtSecret,
          { expiresIn: "1h" }
        );

        res.send(token);
      }
      res.json("İnvalid password");
    }
  };
}
