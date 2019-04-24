import { Container } from "inversify";
import TYPES from "./types";
import { AddressService, AddressServiceImpl } from "./service/AddressService";
import { AddressRepositoryImplDb } from "./repository/AddressRepository";
import { AddressController } from "./controller/AddressController";
import { RegistrableController } from "./controller/RegisterableController";
import { UserService, UsersServiceImpl } from "./service/UserService";
import { UserRepositoryImplDb } from "./repository/UserRepository";
import { UserController } from "./controller/UserController";
import { AuthorizationController } from "./controller/AuthorizationController";
import { AuthorizationServiceImpl } from "./service/AuthorizationService";

const container = new Container();
container.bind<RegistrableController>(TYPES.Controller).to(AddressController);
container.bind<AddressService>(TYPES.AddressService).to(AddressServiceImpl);
container
  .bind<AddressRepositoryImplDb>(TYPES.AddressRepository)
  .to(AddressRepositoryImplDb);

container.bind<RegistrableController>(TYPES.Controller).to(UserController);
container.bind<UserService>(TYPES.UserService).to(UsersServiceImpl);
container
  .bind<UserRepositoryImplDb>(TYPES.UserRepository)
  .to(UserRepositoryImplDb);

container
  .bind<RegistrableController>(TYPES.Controller)
  .to(AuthorizationController);
container
  .bind<AuthorizationServiceImpl>(TYPES.AuthorizationService)
  .to(AuthorizationServiceImpl);

export default container;
