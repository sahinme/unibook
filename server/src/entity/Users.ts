import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  OneToMany
} from "typeorm";
import * as bcrypt from "bcryptjs";
import { Posts } from "./Posts";

export interface UserDTO {
  _id?: number;
  name: string;
  surname: string;
  username: string;
  password: string;
  email: string;
  major: string;
  college: string;
  faculty: string;
  isGraduated: boolean;
  male?: string;
  phoneNumber?: string;
  birthDate?: Date;
  registerDate: Date;
  last_login: Date;
}

@Entity()
@Unique(["username"])
export class Users implements UserDTO {
  @PrimaryGeneratedColumn({ name: "_id", type: "smallint" })
  public _id: number;

  @Column({ name: "name", length: 100 })
  public name: string;

  @Column({ name: "surname", length: 100 })
  public surname: string;

  @Column({ name: "username", length: 100 })
  public username: string;

  @Column({ name: "password", length: 100 })
  public password: string;

  @Column({ name: "email", length: 100 })
  public email: string;

  @Column({ name: "major" })
  public major: string;

  @Column({ name: "college" })
  public college: string;

  @Column({ name: "faculty" })
  public faculty: string;

  @Column({ name: "isGraduated", type: "boolean" })
  public isGraduated: boolean;

  @Column({ name: "male", type: "character", length: 1 })
  public male?: string;

  @Column({ name: "phoneNumber" })
  public phoneNumber?: string;

  @Column({ name: "birthDate", type: "date" })
  public birthDate?: Date;

  @Column({ name: "registerDate", type: "date", default: "now" })
  public registerDate: Date;

  @Column({ name: "last_login", type: "timestamp", nullable: true })
  public last_login: Date;

  @OneToMany(type => Posts, post => post.user)
  posts: Posts[];

  checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }
}
