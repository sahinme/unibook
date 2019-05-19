import { inject, injectable } from "inversify";
import TYPES from "../types";
import { Comment } from "../model/Comment";
import { CommentRepositoryImlDb } from "../repository/CommentRepository";
import { CommentDTO } from "../entity/Comments";

export interface CommentService {
  getComments(): Promise<Array<Comment>>;
  createComment(comment: Comment): Promise<Comment>;
  updateComment(comment: Comment): Promise<Comment>;
  getComment(id: number): Promise<Comment>;
  deleteComment(id: number): Promise<any>;
}

@injectable()
export class CommentServiceImpl implements CommentService {
  @inject(TYPES.CommentRepository)
  private commentRepository: CommentRepositoryImlDb;

  public async getComments(): Promise<Array<Comment>> {
    const comments: Array<
      Comment
    > = await this.commentRepository.findAll().then(comment =>
      comment.map((dto: CommentDTO) => {
        return this.toCommentDTO(dto);
      })
    );
    return comments;
  }

  public async createComment(comment: Comment): Promise<Comment> {
    const commentDto: CommentDTO = this.toComment(comment);
    const createdDto: CommentDTO = await this.commentRepository.create(
      commentDto
    );
    return await this.toCommentDTO(createdDto);
  }

  public async updateComment(comment: Comment): Promise<Comment> {
    const commentDto: CommentDTO = this.toComment(comment);
    const updatedPost = await this.commentRepository.update(commentDto);
    return await this.toCommentDTO(updatedPost);
  }

  public async getComment(id: number): Promise<Comment> {
    const comment = await this.commentRepository.find(id).then(comment => {
      return this.toCommentDTO(comment);
    });
    return comment;
  }

  public async deleteComment(id: number): Promise<any> {
    return await this.commentRepository.delete(id).then(data => {
      return this.toCommentDTO(data);
    });
  }

  private toComment(comment: Comment): CommentDTO {
    return {
      comment: comment.getComment,
      createdDate: comment.getCreatedDate,
      post_id: comment.getPostId,
      user_id: comment.getUserId,
      _id: comment.getId
    };
  }

  private toCommentDTO(commentDTO: CommentDTO): Comment {
    return new Comment(
      commentDTO.comment,
      commentDTO.user_id,
      commentDTO.createdDate,
      commentDTO.post_id,
      commentDTO._id
    );
  }
}
