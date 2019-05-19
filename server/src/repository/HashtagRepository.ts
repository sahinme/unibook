import { BaseRepository } from "./BaseRepository";
import { Repository, getRepository } from "typeorm";
import { logger } from "../util/Logger";
import { injectable } from "inversify";
import { HashtagDTO, Hashtags } from "../entity/Hashtags";
import { DatabaseConnection } from "../database/DatabaseConnection";

@injectable()
export class HashtagRepositoryImlDb extends DatabaseConnection
  implements BaseRepository<HashtagDTO> {
  private hashtagRepository: Repository<HashtagDTO>;

  constructor() {
    super();
    this.connect()
      .then(async connection => {
        this.hashtagRepository = await getRepository(Hashtags);
      })
      .catch(err => logger.info("Couldnt connect to database", err));
  }

  public async findAll(): Promise<Array<HashtagDTO>> {
    return await this.hashtagRepository.find();
  }

  public async create(hashtagDTO: HashtagDTO): Promise<HashtagDTO> {
    return await this.hashtagRepository.save(hashtagDTO);
  }

  public async update(hashtagDTO: HashtagDTO): Promise<HashtagDTO> {
    return await this.hashtagRepository.save(hashtagDTO);
  }
  public async find(id: number): Promise<HashtagDTO> {
    return await this.hashtagRepository.findOne(id);
  }
  public async delete(id: number): Promise<any> {
    return await this.hashtagRepository.delete(id);
  }
}
