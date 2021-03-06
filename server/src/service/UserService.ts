import { injectable, inject } from "inversify";
import TYPES from "../types";
import "reflect-metadata";
import { User } from "../model/User";
import { UserRepositoryImplDb } from "../repository/UserRepository";
import { UserDTO } from "./userService/dto/userDto";

export interface UserService {
  getUsers(): Promise<Array<User>>;
  createUser(user: User): Promise<User>;
  updateUser(user: User): Promise<User>;
  getUser(id: number): Promise<User>;
  deleteUser(id: number): Promise<any>;
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
          return this.toUserDTO(dto);
        })
      );

    return addressesDb;
  }

  public async createUser(user: User): Promise<User> {
    const userDTO: UserDTO = this.toUser(user);

    const createdDTO: UserDTO = await this.userRepositoryDb.create(userDTO);

    return await this.toUserDTO(createdDTO);
  }

  public async updateUser(user: User): Promise<User> {
    const userDTO: UserDTO = this.toUser(user);

    const updated: UserDTO = await this.userRepositoryDb.update(userDTO);

    return await this.toUserDTO(updated);
  }

  public async getUser(id: number): Promise<User> {
    let user = await this.userRepositoryDb.find(id).then(a => {
      return this.toUserDTO(a);
    });

    return user;
  }

  public async deleteUser(id: number): Promise<any> {
    return await this.userRepositoryDb.delete(id).then(a => {
      return this.toUserDTO(a);
    });
  }

  private toUser(user: User): UserDTO {
    return {
      name: user.name,
      surname: user.surname,
      _id: user._id,
      username: user.username,
      password: user.password,
      email: user.email,
      major: user.major,
      isGraduated: user.isGraduated,
      male: user.male,
      phoneNumber: user.phoneNumber,
      birthDate: user.birthDate,
      registerDate: user.registerDate,
      last_login: user.last_login
    };
  }

  private toUserDTO(userDTO: UserDTO): User {
    return new User(
      userDTO.name,
      userDTO.surname,
      userDTO.username,
      userDTO.password,
      userDTO.email,
      userDTO.major,
      userDTO.isGraduated,
      userDTO.male,
      userDTO.phoneNumber,
      userDTO.birthDate,
      userDTO._id,
      userDTO.registerDate,
      userDTO.last_login
    );
  }
}
