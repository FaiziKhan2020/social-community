
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

// Component Props Interface
export interface PostProps {
  post: Post;
  onAddComment: (content: string) => void;
  onReplyToComment: (commentId: string, content: string) => void;
}

export interface CommentItemProps {
  comment: Comment;
  onReply: (commentId: string, content: string) => void;
  isReply?: boolean;
  level?: number;
}

export interface CommentListProps {
  comments: Comment[];
  onReply: (commentId: string, content: string) => void;
  isReply?: boolean;
  level?: number;
}

export interface CommentFormProps {
  onSubmit: (content: string) => void;
}

export interface CreatePostModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (title: string, content: string) => void;
}
export interface PostFormProps {
  onSubmit: (title: string, content: string) => void;
}