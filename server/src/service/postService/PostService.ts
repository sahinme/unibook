import { Post } from "../../model/Post";
import { inject, injectable } from "inversify";
import TYPES from "../../types";
import { PostRepositoryImplDb } from "../../repository/PostRepository";
import { PostDTO } from "./dto/postDto";

export interface PostService {
  getPosts(): Promise<Array<Post>>;
  createPost(post: Post): Promise<Post>;
  updatePost(post: Post): Promise<Post>;
  getPost(id: number): Promise<Post>;
  deletePost(id: number): Promise<any>;
}

@injectable()
export class PostServiceImpl implements PostService {
  @inject(TYPES.PostRepository)
  private postRepository: PostRepositoryImplDb;

  public async getPosts(): Promise<Array<Post>> {
    const posts: Array<Post> = await this.postRepository.findAll().then(post =>
      post.map((dto: PostDTO) => {
        return this.toPostDTO(dto);
      })
    );
    return posts;
  }

  public async createPost(post: Post): Promise<Post> {
    const postDto: PostDTO = this.toPost(post);
    const createdDto: PostDTO = await this.postRepository.create(postDto);
    return await this.toPostDTO(createdDto);
  }

  public async updatePost(post: Post): Promise<Post> {
    const postDto: PostDTO = this.toPost(post);
    const updatedPost = await this.postRepository.update(postDto);
    return await this.toPostDTO(updatedPost);
  }

  public async getPost(id: number): Promise<Post> {
    const post = await this.postRepository.find(id).then(data => {
      return this.toPostDTO(data);
    });
    return post;
  }

  public async deletePost(id: number): Promise<any> {
    return await this.postRepository.delete(id).then(data => {
      return this.toPostDTO(data);
    });
  }

  private toPost(post: Post): PostDTO {
    return {
      title: post.title,
      description: post.description,
      created_date: post.createdDate,
      likes: post.likes,
      share_count: post.shareCount,
      hashtags: post.hashtags,
      _id: post._id
    };
  }

  private toPostDTO(postDTO: PostDTO): Post {
    return new Post(
      postDTO.title,
      postDTO.description,
      postDTO.created_date,
      postDTO.likes,
      postDTO.share_count,
      postDTO.hashtags,
      postDTO._id
    );
  }
}
