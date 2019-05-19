import { BaseRepository } from "./BaseRepository";
import { Repository, getRepository } from "typeorm";
import { logger } from "../util/Logger";
import { injectable } from "inversify";
import { LikeDTO, Likes } from "../entity/Likes";
import { DatabaseConnection } from "../database/DatabaseConnection";

@injectable()
export class LikeRepositoryImlDb extends DatabaseConnection
  implements BaseRepository<LikeDTO> {
  private likeRepository: Repository<LikeDTO>;

  constructor() {
    super();
    this.connect()
      .then(async connection => {
        this.likeRepository = await getRepository(Likes);
      })
      .catch(err => logger.info("Couldnt connect to database", err));
  }

  public async findAll(): Promise<Array<LikeDTO>> {
    return await this.likeRepository.find();
  }

  public async create(likeDTO: LikeDTO): Promise<LikeDTO> {
    return await this.likeRepository.save(likeDTO);
  }

  public async update(likeDTO: LikeDTO): Promise<LikeDTO> {
    return await this.likeRepository.save(likeDTO);
  }
  public async find(id: number): Promise<LikeDTO> {
    return await this.likeRepository.findOne(id);
  }
  public async delete(id: number): Promise<any> {
    return await this.likeRepository.delete(id);
  }
}
