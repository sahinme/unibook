import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  ManyToMany,
  JoinTable,
  ManyToOne,
  JoinColumn
} from "typeorm";
import { Hashtags } from "./Hashtags";
import { Users } from "./Users";

export interface PostDTO {
  title: string;
  description: string;
  created_date: Date;
  likes?: number;
  comments?: string[];
  share_count?: number;
  _id?: number;
}

@Entity("posts")
@Unique(["_id"])
export class Posts implements PostDTO {
  @PrimaryGeneratedColumn({ name: "_id", type: "smallint" })
  public _id: number;

  @Column({ name: "title", type: "smallint" })
  public title: string;

  @Column({ name: "description", type: "text" })
  public description: string;

  @Column({ name: "created_date", type: "date", default: "now" })
  public created_date: Date;

  @ManyToOne(type => Users, user => user.posts)
  @JoinColumn({ name: "user_id" })
  user: Users;

  @Column({ name: "likes", type: "integer" })
  public likes: number;

  @Column({ name: "share_count", type: "integer" })
  public share_count: number;

  @ManyToMany(type => Hashtags, tag => tag.posts)
  @JoinTable()
  hashtags: Hashtags[];
}
