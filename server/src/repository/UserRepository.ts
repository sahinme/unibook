import { injectable } from "inversify";
import { logger } from "../util/Logger";
import {
  createConnection,
  Connection,
  Repository,
  ConnectionOptions
} from "typeorm";
import { UserDTO, Users } from "../entity/Users";
import { BaseRepository } from "./BaseRepository";

@injectable()
export class UserRepositoryImplDb implements BaseRepository<UserDTO> {
  private userRepository: Repository<Users>;

  constructor() {
    this.connect()
      .then(async connection => {
        this.userRepository = connection.getRepository(Users);
      })
      .catch(err => logger.error("Cannot connect to database", err));
  }

  public async findAll(): Promise<Array<UserDTO>> {
    return await this.userRepository.find();
  }

  public async create(userDTO: UserDTO): Promise<UserDTO> {
    return await this.userRepository.save(userDTO);
  }

  public async update(userDTO: UserDTO): Promise<UserDTO> {
    return await this.userRepository.save(userDTO);
  }

  public async find(id: number): Promise<UserDTO> {
    return await this.userRepository.findOne(id);
  }

  public async delete(id: number): Promise<any> {
    return await this.userRepository.delete(id);
  }

  public async login(username: string): Promise<UserDTO> {
    return await this.userRepository.findOneOrFail({ where: { username } });
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
