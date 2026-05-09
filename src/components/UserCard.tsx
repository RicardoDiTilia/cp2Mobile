import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { User } from '../types/user';

interface UserCardProps {
  user: User;
  onPress?: (user: User) => void;
}

export function UserCard({ user, onPress }: UserCardProps) {
  const Container = onPress ? Pressable : View;
  return (
    <Container style={styles.card} onPress={onPress ? () => onPress(user) : undefined}>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
      {user.company?.name ? <Text style={styles.company}>{user.company.name}</Text> : null}
    </Container>
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
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
  },
  email: {
    fontSize: 14,
    color: '#475569',
    marginTop: 4,
  },
  company: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 4,
    fontStyle: 'italic',
  },
});
