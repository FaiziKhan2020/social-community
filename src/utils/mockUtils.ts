import { User, Post, Comment } from '../types';

export const createMockUser = (id: string, name: string): User => ({
  id,
  name,
  avatar: `https://mui.com/static/images/avatar/${parseInt(id)}.jpg`,
});

export const createMockComment = (
  id: string,
  content: string,
  author: User,
  createdAt: string,
  replies: Comment[] = []
): Comment => ({
  id,
  content,
  author,
  createdAt,
  replies,
});

export const createMockPost = (
  id: string,
  title: string,
  content: string,
  author: User,
  createdAt: string,
  comments: Comment[] = []
): Post => ({
  id,
  title,
  content,
  author,
  createdAt,
  comments,
}); 