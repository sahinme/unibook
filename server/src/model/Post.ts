import { Users } from "../entity/Users";

export class Post {
  constructor(
    public title: string,
    public description: string,
    public createdDate: Date,
    public user: Users,
    public likes?: number,
    public shareCount?: number,
    public hashtags?: string[],
    public _id?: number
  ) {}
}
