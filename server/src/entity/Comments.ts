import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn
} from "typeorm";
import { Users } from "./Users";
import { Posts } from "./Posts";

export interface CommentDTO {
  comment: string;
  createdDate: Date;
  post_id?: number;
  user_id?: number;
  _id?: number;
}

@Entity()
export class Comments implements CommentDTO {
  @Column({ name: "comment", type: "text" })
  public comment: string;

  @ManyToOne(type => Posts)
  @JoinColumn({ name: "postId" })
  post: Posts;

  @Column({ name: "createdDate", type: "date", default: "now" })
  public createdDate: Date;

  @ManyToOne(type => Users)
  @JoinColumn({ name: "userId" })
  user: Users;

  @PrimaryGeneratedColumn({ name: "_id", type: "smallint" })
  public _id: number;
}
