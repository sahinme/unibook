export class PostDTO {
  title: string;
  description: string;
  created_date: Date;
  likes?: number;
  share_count?: number;
  hashtags?: string[];
  _id?: number;
}
