import * as bcrypt from "bcryptjs";
import { Majors } from "../entity/Majors";

export class User {
  constructor(
    public name: string,
    public surname: string,
    public username: string,
    public password: string,
    public email: string,
    public major: Majors,
    public isGraduated: boolean,
    public male?: string,
    public phoneNumber?: string,
    public birthDate?: Date,
    public _id?: number,
    public registerDate?: Date,
    public last_login?: Date
  ) {}
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }
}
