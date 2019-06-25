import { BaseRepository } from "./BaseRepository";
import { Posts } from "../entity/Posts";
import { Repository, getRepository } from "typeorm";
import { logger } from "../util/Logger";
import { injectable } from "inversify";
import { DatabaseConnection } from "../database/DatabaseConnection";
import { PostDTO } from "../service/postService/dto/postDto";

@injectable()
export class PostRepositoryImplDb extends DatabaseConnection
  implements BaseRepository<PostDTO> {
  private postRepository: Repository<Posts>;

  constructor() {
    super();
    this.connect()
      .then(async connection => {
        this.postRepository = await getRepository(Posts);
        await connection.synchronize();
      })
      .catch(err => logger.info("Couldnt connect to database", err));
  }

  public async findAll(): Promise<Array<PostDTO>> {
    return await this.postRepository.find();
  }

  public async create(postDTO: PostDTO): Promise<PostDTO> {
    return await this.postRepository.save(postDTO);
  }

  public async update(postDTO: PostDTO): Promise<PostDTO> {
    return await this.postRepository.save(postDTO);
  }

  public async find(id: number): Promise<PostDTO> {
    return await this.postRepository.findOne(id);
  }

  public async delete(id: number): Promise<any> {
    return await this.postRepository.delete(id);
  }
}
