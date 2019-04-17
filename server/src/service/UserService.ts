import { injectable, inject } from "inversify";
import TYPES from "../types";
import "reflect-metadata";
import * as _ from "lodash";
import { User } from "../model/User";
import {
  UserRepository,
  UserRepositoryImplDb
} from "../repository/UserRepository";
import { UserDTO } from "../entity/Users";

export interface UserService {
  getUsers(): Promise<Array<User>>;
  createUser(user: User): Promise<User>;
  updateUser(user: User): Promise<User>;
  getUser(id: string): Promise<User>;
}

@injectable()
export class UsersServiceImpl implements UserService {
  @inject(TYPES.UserRepository)
  private userRepositoryDb: UserRepositoryImplDb;

  public async getUsers(): Promise<Array<User>> {
    const addressesDb: Array<User> = await this.userRepositoryDb
      .findAll()
      .then(a2 =>
        a2.map((dto: UserDTO) => {
          return this.toUser(dto);
        })
      );

    return addressesDb;
  }

  public async createUser(user: User): Promise<User> {
    const userDTO: UserDTO = this.toUser(user);

    const createdDTO: UserDTO = await this.userRepositoryDb.create(userDTO);

    // duplicates the address in the DB

    return await this.toUserDTO(createdDTO);
  }

  public async updateUser(user: User): Promise<User> {
    const userDTO: UserDTO = this.toUser(user);

    const updated: UserDTO = await this.userRepositoryDb.update(userDTO);

    // update db address

    return await this.toUserDTO(updated);
  }

  public async getUser(id: string): Promise<User> {
    let address = await this.userRepositoryDb.find(id).then(a => {
      return this.toUserDTO(a);
    });

    return address;
  }

  private toUser(user: User): UserDTO {
    return {
      name: user.name,
      surname: user.surname,
      _id: user._id
    };
  }

  private toUserDTO(userDTO: UserDTO): User {
    return new User(userDTO.name, userDTO.surname, userDTO._id);
  }
}
