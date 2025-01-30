import { formatDistanceToNow } from 'date-fns';

export const formatTimeAgo = (date: string | Date): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return `${formatDistanceToNow(dateObj)} ago`;
}; 