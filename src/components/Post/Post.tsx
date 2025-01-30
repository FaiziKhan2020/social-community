import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { PostProps } from '../../types';
import { CommentList, CommentForm } from '../Comment';
import styles from '../../styles/Post.module.scss';


const Post: React.FC<PostProps> = ({ post, onAddComment, onReplyToComment }) => {
  return (
    <Box className={styles.post}>
      <Box className={styles.header}>
        <Avatar 
          src={post.author.avatar} 
          alt={post.author.name} 
          className={styles.avatar}
        />
        <Box className={styles.info}>
          <Typography variant="h6" className={styles.title}>
            {post.title}
          </Typography>
          <Typography variant="body2" className={styles.meta}>
            {post.author.name}
          </Typography>
        </Box>
      </Box>
      <Box className={styles.content}>
        <Typography variant="body1" className={styles.text}>
          {post.content}
        </Typography>
        <Box className={styles.commentsSection}>
          <Typography variant="h6" className={styles.commentsHeader}>
            Comments
          </Typography>
          <CommentForm onSubmit={onAddComment} />
          <CommentList 
            comments={post.comments} 
            onReply={onReplyToComment}
            level={0}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Post; 