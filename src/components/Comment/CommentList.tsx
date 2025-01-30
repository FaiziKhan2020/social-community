import React from 'react';
import { Box } from '@mui/material';
import CommentItem from './CommentItem';
import { CommentListProps } from '../../types';
import styles from '../../styles/CommentList.module.scss';
import classNames from 'classnames';



const CommentList: React.FC<CommentListProps> = ({ 
  comments, 
  onReply, 
  isReply = false,
  level = 0 
}) => {
  return (
    <Box className={classNames(styles.commentList, styles[`level-${level}`])}>
      {comments.map(comment => (
        <CommentItem
          key={comment.id}
          comment={comment}
          onReply={onReply}
          isReply={isReply}
          level={level}
        />
      ))}
    </Box>
  );
};

export default CommentList; 