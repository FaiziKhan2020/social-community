// Base types
export interface User {
  id: string;
  name: string;
  avatar: string;
}

export interface Comment {
  id: string;
  content: string;
  author: User;
  createdAt: string;
  replies: Comment[];
}

export interface Post {
  id: string;
  title: string;
  content: string;
  author: User;
  createdAt: string;
  comments: Comment[];
}

// Component Props
export interface PostProps {
  post: Post;
  onAddComment: (postId: string, content: string) => void;
}

export interface CommentItemProps {
  comment: Comment;
  level: number;
}

export interface CommentListProps {
  comments: Comment[];
  level?: number;
}

export interface CommentFormProps {
  onSubmit: (content: string) => void;
} 