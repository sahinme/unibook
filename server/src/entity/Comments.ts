import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

export interface CommentDTO {
  comment: string;
  createdDate: Date;
  post_id?: number;
  user_id?: number;
  _id?: number;
}

@Entity()
export class Comments implements CommentDTO {
  @Column()
  public comment: string;
  @Column()
  public post_id: number;
  @Column("date")
  public createdDate: Date;
  @Column()
  public user_id: number;
  @PrimaryGeneratedColumn()
  public _id: number;
}
