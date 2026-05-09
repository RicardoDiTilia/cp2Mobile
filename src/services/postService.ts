import { api } from './api';
import { Post, CreatePostInput } from '../types/post';

export const postService = {
  async getAll(limit = 20): Promise<Post[]> {
    const { data } = await api.get<Post[]>('/posts', { params: { _limit: limit } });
    return data;
  },

  async getById(id: number): Promise<Post> {
    const { data } = await api.get<Post>(`/posts/${id}`);
    return data;
  },

  async create(input: CreatePostInput): Promise<Post> {
    const { data } = await api.post<Post>('/posts', input);
    return data;
  },
};
