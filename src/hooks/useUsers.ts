import { useQuery } from '@tanstack/react-query';
import { userService } from '../services/userService';
import { User } from '../types/user';
import { Post } from '../types/post';

export const userKeys = {
  all: ['users'] as const,
  detail: (id: number) => ['users', id] as const,
  posts: (id: number) => ['users', id, 'posts'] as const,
};

export function useUsers() {
  return useQuery<User[], Error>({
    queryKey: userKeys.all,
    queryFn: () => userService.getAll(),
  });
}

export function useUser(id: number) {
  return useQuery<User, Error>({
    queryKey: userKeys.detail(id),
    queryFn: () => userService.getById(id),
    enabled: Number.isFinite(id),
  });
}

export function useUserPosts(userId: number) {
  return useQuery<Post[], Error>({
    queryKey: userKeys.posts(userId),
    queryFn: () => userService.getPostsByUser(userId),
    enabled: Number.isFinite(userId),
  });
}
