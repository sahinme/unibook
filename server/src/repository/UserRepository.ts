import { injectable } from "inversify";
import { logger } from "../util/Logger";
import { Repository } from "typeorm";
import { UserDTO, Users } from "../entity/Users";
import { BaseRepository } from "./BaseRepository";
import { DatabaseConnection } from "../database/DatabaseConnection";

@injectable()
export class UserRepositoryImplDb extends DatabaseConnection
  implements BaseRepository<UserDTO> {
  private userRepository: Repository<Users>;

  constructor() {
    super();
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

  public async findOneOrFail(username: string): Promise<UserDTO> {
    return await this.userRepository.findOneOrFail({ where: { username } });
  }
}
