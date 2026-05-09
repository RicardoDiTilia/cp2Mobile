## CP2 - Consumo de API no React Native

Projeto do checkpoint 2 de Mobile (3ESS).

API usada: https://jsonplaceholder.typicode.com

### Como rodar

```
npm install
npx expo start
```

Pra abrir no navegador: `npx expo start --web`.
No celular, usar o Expo Go e escanear o QR code.

### Tecnologias

- React Native
- Expo (SDK 51)
- TypeScript
- Axios
- React Navigation (native stack)
- AsyncStorage
- TanStack Query

### Estrutura

```
src/
  services/      api, userService, postService
  hooks/         useUsers, usePosts
  screens/       Home, UsersFetch, Users, UserDetails, UserPosts, Posts, CreatePost, ErrorTest
  components/    Loading, ErrorMessage, EmptyState, UserCard, PostCard
  navigation/    AppNavigator, types
  types/         user, post
```

### Exercícios

- Ex 1: UsersFetchScreen - lista de usuarios usando fetch.
- Ex 2: CreatePostScreen - POST com validacao, mostrando o id retornado.
- Ex 3: services/ + hooks/ - service layer com Axios e custom hooks.
- Ex 4: ErrorTestScreen - chama uma rota que nao existe e trata o erro.
- Ex 5: services/api.ts - interceptor de request/response com header X-App-Name e logs.
- Ex 6: telas de Users, UserDetails, UserPosts, Posts e CreatePost usando TanStack Query.

### Navegacao

Home -> UsersFetch | Users -> UserDetails -> UserPosts | Posts | CreatePost | ErrorTest

### Grupo

- (preencher os 5 nomes)
