import { inject, injectable } from "inversify";
import TYPES from "../types";
import { Like } from "../model/Like";
import { LikeRepositoryImlDb } from "../repository/LikeRepository";
import { LikeDTO } from "../entity/Likes";

export interface LikeService {
  getLikes(): Promise<Array<Like>>;
  createLike(like: Like): Promise<Like>;
  updateLike(like: Like): Promise<Like>;
  getLike(id: number): Promise<Like>;
  deleteLike(id: number): Promise<any>;
}

@injectable()
export class LikeServiceImplDb implements LikeService {
  @inject(TYPES.LikeRepository)
  private likeRepository: LikeRepositoryImlDb;

  public async getLikes(): Promise<Array<Like>> {
    const likes: Array<Like> = await this.likeRepository.findAll().then(like =>
      like.map((dto: LikeDTO) => {
        return this.toLikeDTO(dto);
      })
    );
    return likes;
  }

  public async createLike(like: Like): Promise<Like> {
    const likeDto: LikeDTO = this.toLike(like);
    const createdDto: LikeDTO = await this.likeRepository.create(likeDto);
    return await this.toLikeDTO(createdDto);
  }

  public async updateLike(like: Like): Promise<Like> {
    const likeDto: LikeDTO = this.toLike(like);
    const updatedLike = await this.likeRepository.update(likeDto);
    return await this.toLikeDTO(updatedLike);
  }

  public async getLike(id: number): Promise<Like> {
    const like = await this.likeRepository.find(id).then(like => {
      return this.toLikeDTO(like);
    });
    return like;
  }

  public async deleteLike(id: number): Promise<any> {
    return await this.likeRepository.delete(id).then(data => {
      return this.toLikeDTO(data);
    });
  }

  private toLike(like: Like): LikeDTO {
    return {
      like_type: like.getLikeType,
      user_id: like.getUserId,
      post_id: like.getPostId,
      _id: like.getId
    };
  }

  private toLikeDTO(likeDTO: LikeDTO): Like {
    return new Like(
      likeDTO.like_type,
      likeDTO.post_id,
      likeDTO.user_id,
      likeDTO._id
    );
  }
}
