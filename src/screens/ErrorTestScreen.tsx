import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { userService } from '../services/userService';
import { Loading } from '../components/Loading';
import { ErrorMessage } from '../components/ErrorMessage';
import { EmptyState } from '../components/EmptyState';

export function ErrorTestScreen() {
  const { data, isLoading, isError, error, refetch, isRefetching } = useQuery({
    queryKey: ['error-test'],
    queryFn: () => userService.getNonExistent(),
    retry: false,
  });

  if (isLoading) return <Loading message="Tentando rota inexistente..." />;

  if (isError) {
    return (
      <View style={styles.container}>
        <ErrorMessage
          message={`Não foi possível carregar os dados. (${error?.message ?? 'erro desconhecido'})`}
          onRetry={refetch}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.reload} onPress={() => refetch()} disabled={isRefetching}>
        <Text style={styles.reloadText}>{isRefetching ? 'Tentando...' : 'Tentar novamente'}</Text>
      </Pressable>
      <EmptyState message="Sem dados para exibir." />
      {data ? <Text style={styles.data}>{JSON.stringify(data)}</Text> : null}
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
  data: { padding: 16, color: '#0f172a' },
});
