import { Container } from "inversify";
import TYPES from "./types";
import { AddressService, AddressServiceImpl } from "./service/AddressService";
import { AddressRepositoryImplDb } from "./repository/AddressRepository";
import { AddressController } from "./controller/AddressController";
import { RegistrableController } from "./controller/RegisterableController";
import { BaseRepository } from "./repository/BaseRepository";
import { Addresses } from "./entity/Addresses";

const container = new Container();
container.bind<RegistrableController>(TYPES.Controller).to(AddressController);
container.bind<AddressService>(TYPES.AddressService).to(AddressServiceImpl);

container
  .bind<BaseRepository<Addresses>>(TYPES.AddressRepository)
  .to(AddressRepositoryImplDb);

export default container;
