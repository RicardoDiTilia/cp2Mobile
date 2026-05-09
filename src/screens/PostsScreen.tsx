import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { usePosts } from '../hooks/usePosts';
import { PostCard } from '../components/PostCard';
import { Loading } from '../components/Loading';
import { ErrorMessage } from '../components/ErrorMessage';
import { EmptyState } from '../components/EmptyState';

export function PostsScreen() {
  const { data, isLoading, isError, error, refetch, isRefetching } = usePosts(20);

  if (isLoading) return <Loading message="Carregando posts..." />;
  if (isError) return <ErrorMessage message={error?.message ?? 'Erro ao carregar.'} onRetry={refetch} />;

  return (
    <View style={styles.container}>
      <Pressable style={styles.reload} onPress={() => refetch()} disabled={isRefetching}>
        <Text style={styles.reloadText}>{isRefetching ? 'Recarregando...' : 'Recarregar'}</Text>
      </Pressable>
      <FlatList
        data={data ?? []}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<EmptyState message="Nenhum post encontrado." />}
        renderItem={({ item }) => <PostCard post={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f1f5f9' },
  reload: {
    margin: 16,
    backgroundColor: '#2563eb',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  reloadText: { color: '#ffffff', fontWeight: '600' },
  list: { paddingHorizontal: 16, paddingBottom: 24 },
});
