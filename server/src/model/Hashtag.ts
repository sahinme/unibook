export class Hashtag {
  constructor(
    private hashtag: string,
    private postId?: number,
    private _id?: number
  ) {}
  get getHashtag(): string {
    return this.hashtag;
  }
  set setHashtag(hashtag: string) {
    this.hashtag = hashtag;
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
}
