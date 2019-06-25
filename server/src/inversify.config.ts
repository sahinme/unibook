import { Container } from "inversify";
import TYPES from "./types";
import { RegistrableController } from "./controller/RegisterableController";
import { UserService, UsersServiceImpl } from "./service/UserService";
import { UserRepositoryImplDb } from "./repository/UserRepository";
import { UserController } from "./controller/UserController";
import { AuthorizationController } from "./controller/AuthorizationController";
import { AuthorizationServiceImpl } from "./service/AuthorizationService";
import { PostController } from "./controller/PostController";
import { PostRepositoryImplDb } from "./repository/PostRepository";
import { SocketIOController } from "./controller/SocketIOController";
import { CommentService, CommentServiceImpl } from "./service/CommentService";
import { CommentRepositoryImlDb } from "./repository/CommentRepository";
import { LikeService, LikeServiceImplDb } from "./service/LikeService";
import { LikeRepositoryImlDb } from "./repository/LikeRepository";
import {
  PostService,
  PostServiceImpl
} from "./service/postService/PostService";
/* import { HashtagService, HashtagServiceImplDb } from "./service/HashtagService";
import { HashtagRepositoryImlDb } from "./repository/HashtagRepository";
 */
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

container.bind<CommentService>(TYPES.CommentService).to(CommentServiceImpl);
container
  .bind<CommentRepositoryImlDb>(TYPES.CommentRepository)
  .to(CommentRepositoryImlDb);

container.bind<LikeService>(TYPES.LikeService).to(LikeServiceImplDb);
container
  .bind<LikeRepositoryImlDb>(TYPES.LikeRepository)
  .to(LikeRepositoryImlDb);

/* container.bind<HashtagService>(TYPES.HashtagService).to(HashtagServiceImplDb);
container
  .bind<HashtagRepositoryImlDb>(TYPES.HashtagRepository)
  .to(HashtagRepositoryImlDb); */

container.bind<RegistrableController>(TYPES.Controller).to(SocketIOController);

export default container;
