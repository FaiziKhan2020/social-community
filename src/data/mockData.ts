import { Post } from '../types';
import { createMockUser, createMockComment, createMockPost } from '../utils/mockUtils';

const mockUsers = [
  createMockUser('1', 'John Doe'),
  createMockUser('2', 'Jane Smith'),
  createMockUser('3', 'Bob Johnson'),
];

export const mockPosts: Post[] = [
  createMockPost(
    '1',
    'Getting Started with React and TypeScript',
    'TypeScript is a powerful tool for React development. Here are some tips to get started...',
    mockUsers[0],
    '2024-02-20T10:00:00Z',
    [
      createMockComment(
        '1',
        'Great post! Very helpful for beginners.',
        mockUsers[1],
        '2024-02-20T10:30:00Z',
        [
          createMockComment(
            '2',
            'Thanks! Glad you found it useful.',
            mockUsers[0],
            '2024-02-20T11:00:00Z'
          ),
        ]
      ),
    ]
  ),
  createMockPost(
    '2',
    'Best Practices for React Component Design',
    'When designing React components, it\'s important to consider reusability and maintainability...',
    mockUsers[1],
    '2024-02-19T15:00:00Z',
    [
      createMockComment(
        '3',
        'Could you elaborate more on component composition?',
        mockUsers[2],
        '2024-02-19T16:00:00Z'
      ),
    ]
  ),
]; 