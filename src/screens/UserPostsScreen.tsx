import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useUserPosts } from '../hooks/useUsers';
import { PostCard } from '../components/PostCard';
import { Loading } from '../components/Loading';
import { ErrorMessage } from '../components/ErrorMessage';
import { EmptyState } from '../components/EmptyState';

type Props = NativeStackScreenProps<RootStackParamList, 'UserPosts'>;

export function UserPostsScreen({ route }: Props) {
  const { userId, userName } = route.params;
  const { data, isLoading, isError, error, refetch } = useUserPosts(userId);

  if (isLoading) return <Loading message="Carregando posts..." />;
  if (isError) return <ErrorMessage message={error?.message ?? 'Erro ao carregar posts.'} onRetry={refetch} />;

  return (
    <View style={styles.container}>
      {userName ? <Text style={styles.header}>Posts de {userName}</Text> : null}
      <FlatList
        data={data ?? []}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<EmptyState message="Este usuário não possui posts." />}
        renderItem={({ item }) => <PostCard post={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f1f5f9' },
  header: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
    padding: 16,
  },
  list: { paddingHorizontal: 16, paddingBottom: 24 },
});
