import { Post } from "../../model/Post";
import { inject, injectable } from "inversify";
import TYPES from "../../types";
import { PostRepositoryImplDb } from "../../repository/PostRepository";
import { PostDTO } from "./dto/postDto";

export interface PostService {
  getPosts(): Promise<Array<PostDTO>>;
  createPost(post: PostDTO): Promise<PostDTO>;
  updatePost(post: PostDTO): Promise<PostDTO>;
  getPost(id: number): Promise<PostDTO>;
  deletePost(id: number): Promise<any>;
}

@injectable()
export class PostServiceImpl implements PostService {
  @inject(TYPES.PostRepository)
  private postRepository: PostRepositoryImplDb;

  public async getPosts(): Promise<Array<PostDTO>> {
    const posts: Array<PostDTO> = await this.postRepository.findAll();
    return posts;
  }

  public async createPost(post: PostDTO): Promise<PostDTO> {
    const createdDto: PostDTO = await this.postRepository.create(post);
    return createdDto;
  }

  public async updatePost(post: PostDTO): Promise<PostDTO> {
    const updatedPost = await this.postRepository.update(post);
    return updatedPost;
  }

  public async getPost(id: number): Promise<PostDTO> {
    const post = await this.postRepository.find(id);
    return post;
  }

  public async deletePost(id: number): Promise<any> {
    return await this.postRepository.delete(id);
  }
}
