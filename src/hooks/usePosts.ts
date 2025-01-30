import { useState, useCallback } from 'react';
import { Post, Comment } from '../types';

export const usePosts = (initialPosts: Post[] = []) => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const addPost = useCallback((title: string, content: string, author: Post['author']) => {
    const newPost: Post = {
      id: Math.random().toString(),
      title,
      content,
      author,
      createdAt: new Date().toISOString(),
      comments: []
    };
    setPosts(prevPosts => [...prevPosts, newPost]);
  }, []);

  const addCommentToPost = useCallback((postId: string, content: string, author: Comment['author']) => {
    const newComment: Comment = {
      id: Math.random().toString(),
      content,
      author,
      createdAt: new Date().toISOString(),
      replies: []
    };
    setPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === postId 
          ? { ...post, comments: [...post.comments, newComment] }
          : post
      )
    );
  }, []);

  const addReplyToComment = useCallback((postId: string, commentId: string, content: string, author: Comment['author']) => {
    const newReply: Comment = {
      id: Math.random().toString(),
      content,
      author,
      createdAt: new Date().toISOString(),
      replies: []
    };
    setPosts(prevPosts => 
      prevPosts.map(post => {
        if (post.id !== postId) return post;
        
        return {
          ...post,
          comments: post.comments.map(comment => 
            comment.id === commentId
              ? { ...comment, replies: [...comment.replies, newReply] }
              : comment
          )
        };
      })
    );
  }, []);

  const deletePost = useCallback((postId: string) => {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
  }, []);

  const updatePost = useCallback((postId: string, updates: Partial<Post>) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId ? { ...post, ...updates } : post
      )
    );
  }, []);

  return {
    posts,
    addPost,
    addCommentToPost,
    addReplyToComment,
    deletePost,
    updatePost,
  };
}; 