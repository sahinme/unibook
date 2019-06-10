import { Entity, Column, PrimaryGeneratedColumn, Unique } from "typeorm";
import * as bcrypt from "bcryptjs";

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
  @PrimaryGeneratedColumn()
  public _id: number;

  @Column()
  public name: string;
  @Column()
  public surname: string;
  @Column()
  public username: string;
  @Column()
  public password: string;
  @Column()
  public email: string;
  @Column()
  public major: string;
  @Column()
  public college: string;
  @Column()
  public faculty: string;
  @Column()
  public isGraduated: boolean;
  @Column()
  public male?: string;
  @Column()
  public phoneNumber?: string;
  @Column("date")
  public birthDate?: Date;
  @Column("date")
  public registerDate: Date;
  @Column("date")
  public last_login: Date;

  checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }
}
