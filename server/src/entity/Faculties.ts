import {
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Entity,
  OneToMany
} from "typeorm";
import { Colleges } from "./Colleges";
import { Majors } from "./Majors";
import { Users } from "./Users";

@Entity()
export class Faculties {
  @PrimaryGeneratedColumn({ name: "_id", type: "smallint" })
  public _id: number;

  @Column({ name: "name" })
  public name: string;

  @Column({ name: "status" })
  public status: number;

  @ManyToOne(type => Colleges, colleges => colleges.faculties)
  @JoinColumn({ name: "collegeId" })
  college: Colleges;

  /*  @OneToMany(type => Users, users => users.faculty)
  users: Users[]; */

  @OneToMany(type => Majors, majors => majors.faculty)
  majors: Majors[];
}
