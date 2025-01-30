import React from 'react';
import { Box, Typography, Button, Avatar } from '@mui/material';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import { Comment } from '../../types';
import styles from '../../styles/CommentItem.module.scss';

interface CommentItemProps {
  comment: Comment;
  onReply: (commentId: string, content: string) => void;
  isReply?: boolean;
  level?: number;
}

const CommentItem: React.FC<CommentItemProps> = ({ 
  comment, 
  onReply, 
  isReply = false,
  level = 0 
}) => {
  const [isReplying, setIsReplying] = React.useState(false);

  const handleReply = (content: string) => {
    onReply(comment.id, content);
    setIsReplying(false);
  };

  return (
    <Box className={styles.comment}>
      <Box className={styles.commentContent}>
        <Avatar 
          src={comment.author.avatar} 
          alt={comment.author.name}
          className={styles.avatar}
        />
        <Box className={styles.mainContent}>
          <Box className={styles.header}>
            <Typography variant="subtitle2" className={styles.author}>
              {comment.author.name}
            </Typography>
          </Box>
          <Typography variant="body1" className={styles.content}>
            {comment.content}
          </Typography>
          {!isReply && (
            <Box className={styles.actions}>
              <Button
                size="small"
                onClick={() => setIsReplying(!isReplying)}
              >
                Reply
              </Button>
            </Box>
          )}
        </Box>
      </Box>
      {isReplying && (
        <Box className={styles.replyForm}>
          <CommentForm onSubmit={handleReply} />
        </Box>
      )}
      {comment.replies && comment.replies.length > 0 && (
        <CommentList 
          comments={comment.replies} 
          onReply={onReply}
          isReply={true}
          level={level + 1}
        />
      )}
    </Box>
  );
};

export default CommentItem; 