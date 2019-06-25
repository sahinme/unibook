export class Post {
  constructor(
    public title: string,
    public description: string,
    public createdDate: Date,
    public likes?: number,
    public shareCount?: number,
    public hashtags?: string[],
    public _id?: number
  ) {}
}
