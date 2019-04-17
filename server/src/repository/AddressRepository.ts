import { injectable } from "inversify";
import { AddressDTO, Addresses } from "../entity/Addresses";
import { logger } from "../util/Logger";
import {
  createConnection,
  Connection,
  Repository,
  ConnectionOptions
} from "typeorm";
import { BaseRepository } from "./BaseRepository";

@injectable()
export class AddressRepositoryImplDb implements BaseRepository<AddressDTO> {
  private addressRepository: Repository<Addresses>;

  constructor() {
    this.connect()
      .then(async connection => {
        this.addressRepository = connection.getRepository(Addresses);
      })
      .catch(err => logger.error("Cannot connect to database", err));
  }

  public async findAll(): Promise<Array<AddressDTO>> {
    return await this.addressRepository.find();
  }

  public async create(addressDTO: AddressDTO): Promise<AddressDTO> {
    return await this.addressRepository.save(addressDTO);
  }

  public async update(addressDTO: AddressDTO): Promise<AddressDTO> {
    return await this.addressRepository.save(addressDTO);
  }

  public async find(id: number): Promise<AddressDTO> {
    return await this.addressRepository.findOne(id);
  }

  public async delete(id: number): Promise<any> {
    return await this.addressRepository.delete(id);
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
