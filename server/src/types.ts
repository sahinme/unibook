const TYPES = {
  UserRepository: Symbol("UserRepository"),
  PostRepository: Symbol("PostRepository"),
  UserService: Symbol("UserService"),
  PostService: Symbol("PostService"),
  CommentRepository: Symbol("CommentRepository"),
  CommentService: Symbol("CommentService"),
  LikeRepository: Symbol("LikeRepository"),
  LikeService: Symbol("LikeService"),
  AuthorizationService: Symbol("AuthorizationService"),
  Controller: Symbol("Controller")
};

export default TYPES;
