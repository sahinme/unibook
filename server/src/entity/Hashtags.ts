import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

export interface HashtagDTO {
  hashtag: string;
  postId?: number;
  _id?: number;
}

@Entity()
export class Hashtags implements HashtagDTO {
  @Column()
  public hashtag: string;
  @Column()
  public postId: number;
  @PrimaryGeneratedColumn()
  public _id: number;
}
