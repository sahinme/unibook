import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn
} from "typeorm";
import { Users } from "./Users";
import { Posts } from "./Posts";

export interface LikeDTO {
  like_type: boolean;
  user_id?: number;
  post_id?: number;
  _id?: number;
}

@Entity()
export class Likes implements LikeDTO {
  @Column({ name: "like_type", type: "boolean" })
  public like_type: boolean;

  @ManyToOne(type => Users)
  @JoinColumn({ name: "userId" })
  user: Users;

  @ManyToOne(type => Posts)
  @JoinColumn({ name: "postId" })
  post: Posts;

  @PrimaryGeneratedColumn({ name: "_id", type: "smallint" })
  public _id: number;
}
