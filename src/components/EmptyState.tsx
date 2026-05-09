import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface EmptyStateProps {
  message?: string;
}

export function EmptyState({ message = 'Nenhum dado encontrado.' }: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  text: {
    color: '#64748b',
    fontSize: 15,
  },
});
