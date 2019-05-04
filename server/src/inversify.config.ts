import { Container } from "inversify";
import TYPES from "./types";
import { RegistrableController } from "./controller/RegisterableController";
import { UserService, UsersServiceImpl } from "./service/UserService";
import { UserRepositoryImplDb } from "./repository/UserRepository";
import { UserController } from "./controller/UserController";
import { AuthorizationController } from "./controller/AuthorizationController";
import { AuthorizationServiceImpl } from "./service/AuthorizationService";
import { PostController } from "./controller/PostController";
import { PostServiceImpl, PostService } from "./service/PostService";
import { PostRepositoryImplDb } from "./repository/PostRepository";
import { SocketIOController } from "./controller/SocketIOController";

const container = new Container();

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

container.bind<RegistrableController>(TYPES.Controller).to(PostController);
container.bind<PostService>(TYPES.PostService).to(PostServiceImpl);
container
  .bind<PostRepositoryImplDb>(TYPES.PostRepository)
  .to(PostRepositoryImplDb);

container.bind<RegistrableController>(TYPES.Controller).to(SocketIOController);

export default container;
