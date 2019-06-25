/* import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { Posts } from "./Posts";

export interface HashtagDTO {
  hashtag: string;
  post_id?: number;
  _id?: number;
}

@Entity()
export class Hashtags implements HashtagDTO {
  @PrimaryGeneratedColumn({ name: "_id", type: "smallint" })
  public _id: number;
  @Column({ name: "hashtag" })
  public hashtag: string;
  @ManyToMany(type => Posts, post => post.hashtags)
  posts: Posts[];
}
 */
