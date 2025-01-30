import { Comment, User } from '../types';

export const createComment = (content: string, author: User): Comment => ({
  id: Date.now().toString(),
  content,
  author,
  createdAt: new Date().toISOString(),
  replies: [],
});

export const addReplyToComment = (
  comments: Comment[],
  parentCommentId: string,
  replyContent: string,
  author: User
): Comment[] => {
  return comments.map((comment) => {
    if (comment.id === parentCommentId) {
      return {
        ...comment,
        replies: [...comment.replies, createComment(replyContent, author)],
      };
    }
    if (comment.replies.length > 0) {
      return {
        ...comment,
        replies: addReplyToComment(comment.replies, parentCommentId, replyContent, author),
      };
    }
    return comment;
  });
}; 