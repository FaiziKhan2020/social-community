import React from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PostForm from './PostForm';
import styles from '../../styles/CreatePostModal.module.scss';
import { CreatePostModalProps } from '../../types';



const CreatePostModal: React.FC<CreatePostModalProps> = ({ open, onClose, onSubmit }) => {
  const handleSubmit = (title: string, content: string) => {
    onSubmit(title, content);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth className={styles.dialog}>
      <DialogTitle className={styles.title}>
        Create New Post
        <IconButton onClick={onClose} className={styles.closeButton} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <PostForm onSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  );
};

export default CreatePostModal; 
