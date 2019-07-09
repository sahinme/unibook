import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Colleges } from "./Colleges";
import { Users } from "./Users";

@Entity()
export class Cities {
  @Column({ name: "name" })
  public name: string;

  @Column({ name: "status" })
  public status: number;

  @PrimaryGeneratedColumn({ name: "_id", type: "smallint" })
  public _id: number;

  @OneToMany(type => Colleges, college => college.city)
  colleges: Colleges[];

  /*  @OneToMany(type => Users, user => user.city)
  users: Users[]; */
}
