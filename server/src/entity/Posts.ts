import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm";

export interface PostDTO {
  title: string;
  description: string;
  created_date: Date;
  user_id: number;
  likes?: number;
  comments?: string[];
  share_count?: number;
  _id?: number;
}

@Entity()
@Unique(["_id"])
export class Posts implements PostDTO {
  @Column()
  public title: string;
  @Column()
  public description: string;
  @Column("date")
  public created_date: Date;
  @Column()
  public user_id: number;
  @Column()
  public likes: number;
  @Column()
  public share_count: number;
  @PrimaryGeneratedColumn()
  public _id: number;
}
