import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  OneToMany,
  ManyToOne,
  JoinColumn
} from "typeorm";
import * as bcrypt from "bcryptjs";
import { Posts } from "./Posts";
import { Colleges } from "./Colleges";
import { Faculties } from "./Faculties";
import { Majors } from "./Majors";
import { Cities } from "./Cities";

@Entity()
@Unique(["username"])
export class Users {
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

  @ManyToOne(type => Majors, majors => majors.users)
  @JoinColumn({ name: "majorId" })
  major: Majors;

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
