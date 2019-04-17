import { injectable } from "inversify";
import { logger } from "../util/Logger";
import {
  createConnection,
  Connection,
  Repository,
  ConnectionOptions
} from "typeorm";
import { UserDTO, Users } from "../entity/Users";

export interface UserRepository {
  findAll(): Promise<Array<UserDTO>>;
  create(userDTO: UserDTO): Promise<UserDTO>;
  update(userDTO: UserDTO): Promise<UserDTO>;
  find(id: string): Promise<UserDTO>;
}

@injectable()
export class UserRepositoryImplDb implements UserRepository {
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

  public async find(id: string): Promise<UserDTO> {
    return await this.userRepository.findOne(id);
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
