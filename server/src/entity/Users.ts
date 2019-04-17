import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

export interface UserDTO {
  _id?: number;
  name: string;
  surname: string;
}

@Entity()
export class Users implements UserDTO {
  @PrimaryGeneratedColumn()
  public _id: number;

  @Column()
  public name: string;
  @Column()
  public surname: string;
}
