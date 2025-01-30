import React, { useState } from 'react';
import { Container, AppBar, Toolbar, Typography, Box, CssBaseline, ThemeProvider, createTheme, Button } from '@mui/material'
import Post from './components/Post/Post'
import { mockPosts } from './data/mockData'
import { usePosts } from './hooks'
import styles from './styles/App.module.scss'
import CreatePostModal from './components/Post/CreatePostModal'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
  },
})

// Mock current user
const currentUser = {
  id: 'current-user',
  name: 'Current User',
  avatar: 'https://mui.com/static/images/avatar/4.jpg',
}

const App: React.FC = () => {
  const { posts, addPost, addCommentToPost, addReplyToComment } = usePosts(mockPosts);
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);

  const handleReplyToComment = (postId: string, commentId: string, content: string) => {
    addReplyToComment(postId, commentId, content, currentUser);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={styles.root}>
        <AppBar position="static" className={styles.appBar}>
          <Toolbar>
            <Typography variant="h6" component="div" className={styles.title}>
              Community
            </Typography>
            <Button 
              color="inherit" 
              onClick={() => setIsCreatePostModalOpen(true)}
            >
              + Create Post
            </Button>
          </Toolbar>
        </AppBar>
        <Container className={styles.container}>
          {posts.map((post) => (
            <Post 
              key={post.id} 
              post={post} 
              onAddComment={(content) => addCommentToPost(post.id, content, currentUser)}
              onReplyToComment={(commentId, content) => handleReplyToComment(post.id, commentId, content)}
            />
          ))}
        </Container>
      </Box>
      <CreatePostModal
        open={isCreatePostModalOpen}
        onClose={() => setIsCreatePostModalOpen(false)}
        onSubmit={(title, content) => {
          addPost(title, content, currentUser);
          setIsCreatePostModalOpen(false);
        }}
      />
    </ThemeProvider>
  )
}

export default App
