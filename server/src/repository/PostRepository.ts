import { BaseRepository } from "./BaseRepository";
import { PostDTO, Posts } from "../entity/Posts";
import {
  Repository,
  Connection,
  createConnection,
  ConnectionOptions,
  getRepository
} from "typeorm";
import { logger } from "../util/Logger";

export class PostRepositoryImplDb implements BaseRepository<PostDTO> {
  private postRepository: Repository<Posts>;

  constructor() {
    this.connect()
      .then(async connection => {
        this.postRepository = await getRepository(Posts);
      })
      .catch(err => logger.info("Couldnt connec to database", err));
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

  private connect(): Promise<Connection> {
    return createConnection(<ConnectionOptions>{
      type: "mssql",
      host: "DESKTOP-UGAPJQC\\SQLEXPRESS",
      username: "user1",
      password: "salopa44",
      port: 1433,
      database: "kütüphane",
      extra: {
        trustedConnection: true
      },
      options: {
        useUTC: true,
        trustedConnection: true
      },
      entities: ["src/entity/**/*.ts"]
    });
  }
}
