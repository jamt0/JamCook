export type TResponse = {
  id: string;
  pathAvatarImage: string;
  nameUser: string;
  date: string;
  response: string;
};

export type TCommentary = {
  id: string;
  pathAvatarImage: string;
  nameUser: string;
  date: string;
  commentary: string;
  valoration: boolean[];
  responses: TResponse[];
};

export type TUserSignUp = {
  name: string;
  email: string;
  password: string;
};

export type TUserSignIn = {
  email: string;
  password: string;
};