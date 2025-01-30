import { useState, useCallback } from 'react';
import { Comment, User } from '../types';
import { createComment, addReplyToComment } from '../utils/commentUtils';

interface UseCommentsProps {
  initialComments?: Comment[];
  currentUser: User;
}

export const useComments = ({ initialComments = [], currentUser }: UseCommentsProps) => {
  const [comments, setComments] = useState<Comment[]>(initialComments);

  const addComment = useCallback((content: string) => {
    const newComment = createComment(content, currentUser);
    setComments(prevComments => [...prevComments, newComment]);
    return newComment;
  }, [currentUser]);

  const addReply = useCallback((parentCommentId: string, content: string) => {
    setComments(prevComments => 
      addReplyToComment(prevComments, parentCommentId, content, currentUser)
    );
  }, [currentUser]);

  const deleteComment = useCallback((commentId: string) => {
    setComments(prevComments => 
      prevComments.filter(comment => comment.id !== commentId)
    );
  }, []);

  return {
    comments,
    addComment,
    addReply,
    deleteComment,
  };
}; 