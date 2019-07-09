import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany
} from "typeorm";
import { Colleges } from "./Colleges";
import { Faculties } from "./Faculties";
import { Users } from "./Users";

@Entity()
export class Majors {
  @PrimaryGeneratedColumn()
  public _id: number;

  @Column({ name: "name" })
  public name: string;

  @Column({ name: "status" })
  public status: number;

  @ManyToOne(type => Colleges, colleges => colleges.majors)
  @JoinColumn({ name: "collegeId" })
  college: Colleges;

  @ManyToOne(type => Faculties, faculties => faculties.majors)
  @JoinColumn({ name: "facultyId" })
  faculty: Faculties;

  @OneToMany(type => Users, users => users.major)
  users: Users[];
}
