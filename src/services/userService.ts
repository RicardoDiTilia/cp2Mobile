import { api } from './api';
import { User } from '../types/user';
import { Post } from '../types/post';

export const userService = {
  async getAll(): Promise<User[]> {
    const { data } = await api.get<User[]>('/users');
    return data;
  },

  async getById(id: number): Promise<User> {
    const { data } = await api.get<User>(`/users/${id}`);
    return data;
  },

  async getPostsByUser(userId: number): Promise<Post[]> {
    const { data } = await api.get<Post[]>('/posts', { params: { userId } });
    return data;
  },

  async getNonExistent(): Promise<unknown> {
    const { data } = await api.get('/rota-inexistente');
    return data;
  },
};
