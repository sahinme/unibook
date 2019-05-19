import { inject, injectable } from "inversify";
import TYPES from "../types";
import { Hashtag } from "../model/Hashtag";
import { HashtagDTO } from "../entity/Hashtags";
import { HashtagRepositoryImlDb } from "../repository/HashtagRepository";

export interface HashtagService {
  getHashtags(): Promise<Array<Hashtag>>;
  createHashtag(hashtag: Hashtag): Promise<Hashtag>;
  updateHashtag(hashtag: Hashtag): Promise<Hashtag>;
  getHashtag(id: number): Promise<Hashtag>;
  deleteHashtag(id: number): Promise<any>;
}

@injectable()
export class HashtagServiceImplDb implements HashtagService {
  @inject(TYPES.HashtagRepository)
  private hashtagRepository: HashtagRepositoryImlDb;

  public async getHashtags(): Promise<Array<Hashtag>> {
    const hashtags: Array<
      Hashtag
    > = await this.hashtagRepository.findAll().then(hashtag =>
      hashtag.map((dto: HashtagDTO) => {
        return this.toHashtagDTO(dto);
      })
    );
    return hashtags;
  }

  public async createHashtag(hashtag: Hashtag): Promise<Hashtag> {
    const hashtagDto: HashtagDTO = this.toHashtag(hashtag);
    const createdDto: HashtagDTO = await this.hashtagRepository.create(
      hashtagDto
    );
    return await this.toHashtagDTO(createdDto);
  }

  public async updateHashtag(hashtag: Hashtag): Promise<Hashtag> {
    const hashtagDto: HashtagDTO = this.toHashtag(hashtag);
    const updatedHashtag = await this.hashtagRepository.update(hashtagDto);
    return await this.toHashtagDTO(updatedHashtag);
  }

  public async getHashtag(id: number): Promise<Hashtag> {
    const hashtag = await this.hashtagRepository.find(id).then(hashtag => {
      return this.toHashtagDTO(hashtag);
    });
    return hashtag;
  }

  public async deleteHashtag(id: number): Promise<any> {
    return await this.hashtagRepository.delete(id).then(data => {
      return this.toHashtagDTO(data);
    });
  }

  private toHashtag(hashtag: Hashtag): HashtagDTO {
    return {
      hashtag: hashtag.getHashtag,
      post_id: hashtag.getPostId,
      _id: hashtag.getId
    };
  }

  private toHashtagDTO(hashtagDTO: HashtagDTO): Hashtag {
    return new Hashtag(hashtagDTO.hashtag, hashtagDTO.post_id, hashtagDTO._id);
  }
}
