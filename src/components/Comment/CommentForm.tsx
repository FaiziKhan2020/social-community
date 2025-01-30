import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import styles from '../../styles/CommentForm.module.scss';

interface CommentFormProps {
  onSubmit: (content: string) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ onSubmit }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onSubmit(content.trim());
      setContent('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className={styles.form}>
      <TextField
        fullWidth
        multiline
        rows={2}
        placeholder="Write a reply..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        variant="outlined"
        size="small"
      />
      <Box className={styles.actions}>
        <Button 
          type="submit" 
          variant="contained" 
          size="small"
          disabled={!content.trim()}
        >
          Reply
        </Button>
      </Box>
    </Box>
  );
};

export default CommentForm; 