import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

interface MenuItem {
  label: string;
  description: string;
  route: keyof RootStackParamList;
}

const menu: MenuItem[] = [
  { label: 'Exercício 1 — Fetch API', description: 'UsersFetchScreen', route: 'UsersFetch' },
  { label: 'Exercício 6 — Usuários (Axios)', description: 'UsersScreen', route: 'Users' },
  { label: 'Posts', description: 'PostsScreen', route: 'Posts' },
  { label: 'Exercício 2 — Criar Post', description: 'CreatePostScreen', route: 'CreatePost' },
  { label: 'Exercício 4 — Teste de Erro', description: 'ErrorTestScreen', route: 'ErrorTest' },
];

export function HomeScreen({ navigation }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>CP2 — Consumo de API</Text>
      <Text style={styles.subtitle}>Selecione um exercício</Text>
      <View style={styles.menu}>
        {menu.map((item) => (
          <Pressable
            key={item.route}
            style={styles.item}
            onPress={() => navigation.navigate(item.route as never)}
          >
            <Text style={styles.itemLabel}>{item.label}</Text>
            <Text style={styles.itemDesc}>{item.description}</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f1f5f9',
    flexGrow: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0f172a',
  },
  subtitle: {
    fontSize: 14,
    color: '#475569',
    marginTop: 4,
    marginBottom: 16,
  },
  menu: {
    gap: 10,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  itemLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
  },
  itemDesc: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 4,
  },
});
