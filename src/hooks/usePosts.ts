import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { postService } from '../services/postService';
import { Post, CreatePostInput } from '../types/post';

export const postKeys = {
  all: ['posts'] as const,
  list: (limit: number) => ['posts', 'list', limit] as const,
};

export function usePosts(limit = 20) {
  return useQuery<Post[], Error>({
    queryKey: postKeys.list(limit),
    queryFn: () => postService.getAll(limit),
  });
}

export function useCreatePost() {
  const queryClient = useQueryClient();
  return useMutation<Post, Error, CreatePostInput>({
    mutationFn: (input) => postService.create(input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: postKeys.all });
    },
  });
}
