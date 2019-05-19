export class Comment {
  constructor(
    private comment: string,
    private userId: number,
    private createdDate: Date,
    private postId?: number,
    private _id?: number
  ) {}
  get getComment(): string {
    return this.comment;
  }
  set setComment(comment: string) {
    this.comment = comment;
  }
  get getPostId(): number {
    return this.postId;
  }
  set setPostId(postId: number) {
    this.postId = postId;
  }
  get getId(): number {
    return this._id;
  }
  set setId(_id: number) {
    this._id = _id;
  }
  get getUserId(): number {
    return this.userId;
  }
  set setUserId(userId: number) {
    this.userId = userId;
  }
  get getCreatedDate(): Date {
    return this.createdDate;
  }
  set setCreatedDate(createdDate: Date) {
    this.createdDate = createdDate;
  }
}
