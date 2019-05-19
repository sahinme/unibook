export class Like {
  constructor(
    private like_type: boolean,
    private post_id?: number,
    private user_id?: number,
    private _id?: number
  ) {}
  get getLikeType(): boolean {
    return this.like_type;
  }
  set setLikeType(like_type: boolean) {
    this.like_type = like_type;
  }
  get getPostId(): number {
    return this.post_id;
  }
  set setPostId(postId: number) {
    this.post_id = postId;
  }
  get getUserId(): number {
    return this.user_id;
  }
  set setUserId(userId: number) {
    this.user_id = userId;
  }
  get getId(): number {
    return this._id;
  }
  set setId(_id: number) {
    this._id = _id;
  }
}
