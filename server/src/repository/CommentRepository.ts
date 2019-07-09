import { BaseRepository } from "./BaseRepository";
import { Repository, getRepository } from "typeorm";
import { logger } from "../util/Logger";
import { injectable } from "inversify";
import { CommentDTO, Comments } from "../entity/Comments";
import { DatabaseConnection } from "../database/DatabaseConnection";

@injectable()
export class CommentRepositoryImlDb extends DatabaseConnection
  implements BaseRepository<CommentDTO> {
  private commentRepository: Repository<Comments>;

  constructor() {
    super();
    this.connect()
      .then(async connection => {
        this.commentRepository = await getRepository(Comments);
      })
      .catch(err => logger.info("Couldnt connect to database", err));
  }

  public async findAll(): Promise<Array<CommentDTO>> {
    return await this.commentRepository.find();
  }

  public async create(commentDTO: CommentDTO): Promise<CommentDTO> {
    return await this.commentRepository.save(commentDTO);
  }

  public async update(commentDTO: CommentDTO): Promise<CommentDTO> {
    return await this.commentRepository.save(commentDTO);
  }
  public async find(id: number): Promise<CommentDTO> {
    return await this.commentRepository.findOne(id);
  }
  public async delete(id: number): Promise<any> {
    return await this.commentRepository.delete(id);
  }
}
