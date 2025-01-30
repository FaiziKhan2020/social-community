import React from 'react';
import { Box, TextField, Button } from '@mui/material';
import { useFormField } from '../../hooks';
import styles from '../../styles/PostForm.module.scss';
import { PostFormProps } from '../../types';



const PostForm: React.FC<PostFormProps> = ({ onSubmit }) => {
  const titleField = useFormField({
    initialValue: '',
    validate: value => value.length < 3 ? 'Title must be at least 3 characters' : undefined,
  });

  const contentField = useFormField({
    initialValue: '',
    validate: value => value.length < 10 ? 'Content must be at least 10 characters' : undefined,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (titleField.value.trim() && contentField.value.trim() && !titleField.error && !contentField.error) {
      onSubmit(titleField.value, contentField.value);
      titleField.reset();
      contentField.reset();
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className={styles.form}>
      <TextField
        fullWidth
        label="Title"
        value={titleField.value}
        onChange={titleField.onChange}
        onBlur={titleField.onBlur}
        error={titleField.touched && !!titleField.error}
        helperText={titleField.touched && titleField.error}
        className={styles.field}
      />
      <TextField
        fullWidth
        multiline
        rows={4}
        label="Content"
        value={contentField.value}
        onChange={contentField.onChange}
        onBlur={contentField.onBlur}
        error={contentField.touched && !!contentField.error}
        helperText={contentField.touched && contentField.error}
        className={styles.field}
      />
      <Button
        type="submit"
        variant="contained"
        disabled={!titleField.value.trim() || !contentField.value.trim() || !!titleField.error || !!contentField.error}
        className={styles.submitButton}
      >
        Create Post
      </Button>
    </Box>
  );
};

export default PostForm; 