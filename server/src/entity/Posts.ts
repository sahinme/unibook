import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  ManyToOne,
  JoinColumn,
  OneToMany
} from "typeorm";
import { Users } from "./Users";
import { PostDTO } from "../service/postService/dto/postDto";
import { Comments } from "./Comments";

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

  @Column({ name: "createdDate", type: "date", default: "now" })
  public created_date: Date;

  @Column({ name: "likes", type: "integer" })
  public likes: number;

  @Column({ name: "shareCount", type: "integer" })
  public share_count: number;

  @ManyToOne(type => Users, user => user.posts)
  @JoinColumn({ name: "userId" })
  user: Users;

  @OneToMany(type => Comments, comments => comments.post)
  comments: Comments[];
}
