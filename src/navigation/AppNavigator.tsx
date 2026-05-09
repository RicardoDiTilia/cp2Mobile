import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { HomeScreen } from '../screens/HomeScreen';
import { UsersFetchScreen } from '../screens/UsersFetchScreen';
import { UsersScreen } from '../screens/UsersScreen';
import { UserDetailsScreen } from '../screens/UserDetailsScreen';
import { UserPostsScreen } from '../screens/UserPostsScreen';
import { PostsScreen } from '../screens/PostsScreen';
import { CreatePostScreen } from '../screens/CreatePostScreen';
import { ErrorTestScreen } from '../screens/ErrorTestScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#2563eb' },
          headerTintColor: '#ffffff',
          headerTitleStyle: { fontWeight: '600' },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'CP2 Mobile' }} />
        <Stack.Screen name="UsersFetch" component={UsersFetchScreen} options={{ title: 'Usuários (Fetch)' }} />
        <Stack.Screen name="Users" component={UsersScreen} options={{ title: 'Usuários (Axios)' }} />
        <Stack.Screen name="UserDetails" component={UserDetailsScreen} options={{ title: 'Detalhes' }} />
        <Stack.Screen name="UserPosts" component={UserPostsScreen} options={{ title: 'Posts do Usuário' }} />
        <Stack.Screen name="Posts" component={PostsScreen} options={{ title: 'Posts' }} />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} options={{ title: 'Criar Post' }} />
        <Stack.Screen name="ErrorTest" component={ErrorTestScreen} options={{ title: 'Teste de Erro' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
