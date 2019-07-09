import {
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Entity,
  OneToMany
} from "typeorm";
import { Cities } from "./Cities";
import { Faculties } from "./Faculties";
import { Majors } from "./Majors";
import { Users } from "./Users";

@Entity()
export class Colleges {
  @Column({ name: "name" })
  public name: string;

  @Column({ name: "status" })
  public status: number;

  @ManyToOne(type => Cities, cities => cities.colleges)
  @JoinColumn({ name: "cityId" })
  city: Cities;

  @OneToMany(type => Faculties, faculties => faculties.college)
  faculties: Faculties[];

  @OneToMany(type => Majors, majors => majors.college)
  majors: Majors[];

  /* @OneToMany(type => Users, users => users.college)
  users: Users[]; */

  @PrimaryGeneratedColumn({ name: "_id", type: "smallint" })
  public _id: number;
}
