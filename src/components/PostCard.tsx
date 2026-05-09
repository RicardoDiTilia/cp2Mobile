import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Post } from '../types/post';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>
      <Text style={styles.meta}>Post #{post.id} · Usuário {post.userId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
    textTransform: 'capitalize',
  },
  body: {
    fontSize: 14,
    color: '#334155',
    marginTop: 6,
  },
  meta: {
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 8,
  },
});
