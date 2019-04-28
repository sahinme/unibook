import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm";

export interface PostDTO {
  title: string;
  description: string;
  createdDate: Date;
  userId: number;
  imageBase64?: string;
  likes?: number;
  comments?: string[];
  shareCount?: number;
  _id?: number;
}

@Entity()
@Unique(["_id"])
export class Posts implements PostDTO {
  @Column()
  public title: string;
  @Column()
  public description: string;
  @Column("date")
  public createdDate: Date;
  @Column()
  public userId: number;
  @Column()
  public likes: number;
  @Column("array")
  public comments: string[];
  @Column()
  public shareCount: number;
  @PrimaryGeneratedColumn()
  public _id: number;
}
