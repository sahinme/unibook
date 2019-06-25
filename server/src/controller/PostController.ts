import * as express from "express";
import { injectable, inject } from "inversify";
import { RegistrableController } from "./RegisterableController";
import TYPES from "../types";
import { Post } from "../model/Post";
import { PostService } from "../service/postService/PostService";

@injectable()
export class PostController implements RegistrableController {
  private postService: PostService;

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
            req.body.likes,
            req.body.shareCount,
            req.body.hashtags
          );
          const createdPost = await this.postService
            .createPost(post)
            .catch(err => next(err));
          res.json(createdPost);
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
            res.json({ msg: "user not found" });
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
