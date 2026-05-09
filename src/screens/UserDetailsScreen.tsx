import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useUser } from '../hooks/useUsers';
import { Loading } from '../components/Loading';
import { ErrorMessage } from '../components/ErrorMessage';

type Props = NativeStackScreenProps<RootStackParamList, 'UserDetails'>;

export function UserDetailsScreen({ route, navigation }: Props) {
  const { userId, userName } = route.params;
  const { data, isLoading, isError, error, refetch } = useUser(userId);

  if (isLoading) return <Loading message="Carregando detalhes..." />;
  if (isError || !data) return <ErrorMessage message={error?.message ?? 'Usuário não encontrado.'} onRetry={refetch} />;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Field label="Nome" value={data.name} />
        <Field label="Email" value={data.email} />
        <Field label="Telefone" value={data.phone} />
        <Field label="Website" value={data.website} />
        <Field label="Empresa" value={data.company?.name ?? '-'} />
      </View>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('UserPosts', { userId: data.id, userName: userName ?? data.name })}
      >
        <Text style={styles.buttonText}>Ver posts deste usuário</Text>
      </Pressable>
    </ScrollView>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#f1f5f9', flexGrow: 1 },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  field: { marginBottom: 12 },
  label: { fontSize: 12, color: '#64748b', textTransform: 'uppercase' },
  value: { fontSize: 15, color: '#0f172a', marginTop: 2 },
  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: { color: '#ffffff', fontWeight: '600' },
});
