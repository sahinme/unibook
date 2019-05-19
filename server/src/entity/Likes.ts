import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

export interface LikeDTO {
  like_type: boolean;
  user_id?: number;
  post_id?: number;
  _id?: number;
}

@Entity()
export class Likes implements LikeDTO {
  @Column()
  public like_type: boolean;
  @Column()
  public user_id: number;
  @Column()
  public post_id: number;
  @PrimaryGeneratedColumn()
  public _id: number;
}
