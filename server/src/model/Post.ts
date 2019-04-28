export class Post {
  constructor(
    private title: string,
    private description: string,
    private createdDate: Date,
    private userId: number,
    private imageBase64?: string,
    private likes?: number,
    private comments?: string[],
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
  get getImageBase64(): string {
    return this.imageBase64;
  }
  set setImageBase64(imageBase64: string) {
    this.imageBase64 = imageBase64;
  }
  get getLikes(): number {
    return this.likes;
  }
  set setLikes(likes: number) {
    this.likes = likes;
  }
  get getComments(): string[] {
    return this.comments;
  }
  set setComments(comments: string[]) {
    this.comments = comments;
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
