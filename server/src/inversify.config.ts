import { Container } from "inversify";
import TYPES from "./types";
import { AddressService, AddressServiceImpl } from "./service/AddressService";
import {
  AddressRepository,
  AddressRepositoryImplDb
} from "./repository/AddressRepository";
import { AddressController } from "./controller/AddressController";
import { RegistrableController } from "./controller/RegisterableController";

const container = new Container();
container.bind<RegistrableController>(TYPES.Controller).to(AddressController);
container.bind<AddressService>(TYPES.AddressService).to(AddressServiceImpl);

container
  .bind<AddressRepository>(TYPES.AddressRepository)
  .to(AddressRepositoryImplDb);

export default container;
