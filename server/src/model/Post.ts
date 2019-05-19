export class Post {
  constructor(
    private title: string,
    private description: string,
    private createdDate: Date,
    private userId: number,
    private likes?: number,
    private shareCount?: number,
    private _id?: number
  ) {}
  get getTitle(): string {
    return this.title;
  }
  set setTitle(title: string) {
    this.title = title;
  }
  get getDescription(): string {
    return this.description;
  }
  set setDescription(description: string) {
    this.description = description;
  }
  get getCreatedDate(): Date {
    return this.createdDate;
  }
  set setCreatedDate(createdDate: Date) {
    this.createdDate = createdDate;
  }
  get getUserId(): number {
    return this.userId;
  }
  set setUserId(userId: number) {
    this.userId = userId;
  }
  get getLikes(): number {
    return this.likes;
  }
  set setLikes(likes: number) {
    this.likes = likes;
  }
  get getShareCount(): number {
    return this.shareCount;
  }
  set setShareCount(shareCount: number) {
    this.shareCount = shareCount;
  }
  get getId(): number {
    return this._id;
  }
  set setId(_id: number) {
    this._id = _id;
  }
}
