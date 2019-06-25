import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  ManyToOne,
  JoinColumn
} from "typeorm";
import { Users } from "./Users";
import { PostDTO } from "../service/postService/dto/postDto";

@Entity("posts")
@Unique(["_id"])
export class Posts implements PostDTO {
  @PrimaryGeneratedColumn({ name: "_id" })
  public _id: number;

  @Column({ name: "title" })
  public title: string;

  @Column({ name: "description", type: "text" })
  public description: string;

  @Column("text", { array: true, nullable: true })
  public hashtags: string[];

  @Column({ name: "created_date", type: "date", default: "now" })
  public created_date: Date;

  @Column({ name: "likes", type: "integer" })
  public likes: number;

  @Column({ name: "share_count", type: "integer" })
  public share_count: number;

  @ManyToOne(type => Users, user => user.posts)
  @JoinColumn({ name: "user_id" })
  user: Users;
}
