export type RootStackParamList = {
  Home: undefined;
  UsersFetch: undefined;
  Users: undefined;
  UserDetails: { userId: number; userName?: string };
  UserPosts: { userId: number; userName?: string };
  Posts: undefined;
  CreatePost: undefined;
  ErrorTest: undefined;
};
