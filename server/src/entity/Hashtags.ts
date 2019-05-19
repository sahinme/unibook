import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

export interface HashtagDTO {
  hashtag: string;
  post_id?: number;
  _id?: number;
}

@Entity()
export class Hashtags implements HashtagDTO {
  @Column()
  public hashtag: string;
  @Column()
  public post_id: number;
  @PrimaryGeneratedColumn()
  public _id: number;
}
