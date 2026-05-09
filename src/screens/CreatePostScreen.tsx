import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useCreatePost } from '../hooks/usePosts';
import { Post } from '../types/post';

export function CreatePostScreen() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [validationError, setValidationError] = useState<string | null>(null);
  const [created, setCreated] = useState<Post | null>(null);

  const { mutate, isPending, error, reset } = useCreatePost();

  const handleSubmit = () => {
    setValidationError(null);
    setCreated(null);
    if (title.trim().length < 3) {
      setValidationError('O título deve ter ao menos 3 caracteres.');
      return;
    }
    if (body.trim().length < 5) {
      setValidationError('O conteúdo deve ter ao menos 5 caracteres.');
      return;
    }
    mutate(
      { title: title.trim(), body: body.trim(), userId: 1 },
      {
        onSuccess: (post) => {
          setCreated(post);
          setTitle('');
          setBody('');
        },
      }
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.label}>Título</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => {
          setTitle(text);
          if (created) setCreated(null);
          if (error) reset();
        }}
        placeholder="Digite o título"
      />

      <Text style={styles.label}>Conteúdo</Text>
      <TextInput
        style={[styles.input, styles.textarea]}
        value={body}
        onChangeText={(text) => {
          setBody(text);
          if (created) setCreated(null);
          if (error) reset();
        }}
        placeholder="Digite o conteúdo"
        multiline
        numberOfLines={5}
      />

      {validationError ? <Text style={styles.errorText}>{validationError}</Text> : null}
      {error ? <Text style={styles.errorText}>Erro: {error.message}</Text> : null}

      <Pressable
        style={[styles.button, isPending && styles.buttonDisabled]}
        onPress={handleSubmit}
        disabled={isPending}
      >
        <Text style={styles.buttonText}>{isPending ? 'Enviando...' : 'Criar post'}</Text>
      </Pressable>

      {created ? (
        <View style={styles.success}>
          <Text style={styles.successTitle}>Post criado com sucesso!</Text>
          <Text style={styles.successId}>ID retornado: {created.id}</Text>
          <Text style={styles.successBody}>Título: {created.title}</Text>
        </View>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#f1f5f9', flexGrow: 1 },
  label: { fontSize: 13, color: '#475569', marginBottom: 6, marginTop: 8 },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    color: '#0f172a',
  },
  textarea: { minHeight: 120, textAlignVertical: 'top' },
  errorText: { color: '#b91c1c', marginTop: 12 },
  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonDisabled: { backgroundColor: '#94a3b8' },
  buttonText: { color: '#ffffff', fontWeight: '600' },
  success: {
    marginTop: 20,
    padding: 14,
    backgroundColor: '#dcfce7',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#86efac',
  },
  successTitle: { fontWeight: '700', color: '#166534' },
  successId: { color: '#166534', marginTop: 4, fontSize: 16 },
  successBody: { color: '#166534', marginTop: 2 },
});
