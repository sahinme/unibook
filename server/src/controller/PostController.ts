import * as express from "express";
import { injectable, inject } from "inversify";
import { RegistrableController } from "./RegisterableController";
import { PostService } from "../service/PostService";
import TYPES from "../types";
import { Post } from "../model/Post";
import { LikeService } from "../service/LikeService";
import { Like } from "../model/Like";

@injectable()
export class PostController implements RegistrableController {
  private postService: PostService;
  private likeService: LikeService;

  constructor(@inject(TYPES.PostService) postService: PostService) {
    this.postService = postService;
  }

  public register(app: express.Application): void {
    app
      .route("/post")
      .get(
        async (
          req: express.Request,
          res: express.Response,
          next: express.NextFunction
        ) => {
          const posts = await this.postService
            .getPosts()
            .catch(err => next(err));
          res.json(posts);
        }
      )
      .post(
        async (
          req: express.Request,
          res: express.Response,
          next: express.NextFunction
        ) => {
          const post = new Post(
            req.body.title,
            req.body.description,
            req.body.created_date,
            req.body.userId,
            req.body.likes,
            req.body.shareCount
          );
          const createdPost = await this.postService
            .createPost(post)
            .catch(err => next(err));
          res.json(createdPost);
          const like = new Like(
            req.body.like_type,
            req.body.user_id
            /*             post._id:12,
             */
          );
          const createdLike = await this.likeService
            .createLike(like)
            .catch(err => next(err));
        }
      );

    app
      .route("/post/:id")
      .get(
        async (
          req: express.Request,
          res: express.Response,
          next: express.NextFunction
        ) => {
          const post = await this.postService
            .getPost(<number>req.params.id)
            .catch(err => next(err));
          res.json(post);
          if (!post) {
            res.json("user not found");
          }
        }
      )
      .put(
        async (
          req: express.Request,
          res: express.Response,
          next: express.NextFunction
        ) => {
          const post = new Post(
            req.body.title,
            req.body.description,
            req.body.createdDate,
            req.body.userId,
            req.body.likes,
            req.body.shareCount,
            req.body.id
          );
          const updatedPost = await this.postService
            .updatePost(post)
            .catch(err => next(err));
          res.json(updatedPost);
        }
      )
      .delete(
        async (
          req: express.Request,
          res: express.Response,
          next: express.NextFunction
        ) => {
          await this.postService
            .deletePost(<number>req.params.id)
            .catch(err => next(err));
          res.json({ msg: "Deleted succesfully" });
        }
      );
  }
}