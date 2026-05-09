import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useUsers } from '../hooks/useUsers';
import { UserCard } from '../components/UserCard';
import { Loading } from '../components/Loading';
import { ErrorMessage } from '../components/ErrorMessage';
import { EmptyState } from '../components/EmptyState';

type Props = NativeStackScreenProps<RootStackParamList, 'Users'>;

export function UsersScreen({ navigation }: Props) {
  const { data, isLoading, isError, error, refetch, isRefetching } = useUsers();

  if (isLoading) return <Loading message="Carregando usuários..." />;
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
        ListEmptyComponent={<EmptyState message="Nenhum usuário disponível." />}
        renderItem={({ item }) => (
          <UserCard
            user={item}
            onPress={(user) => navigation.navigate('UserDetails', { userId: user.id, userName: user.name })}
          />
        )}
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
