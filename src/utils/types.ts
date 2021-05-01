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

export type TRecipe = {
  id: string;
  pathRecipeImage: string;
  name: string;
};

export type TRecipeStars = {
  id: string;
  pathRecipeImage: string;
  name: string;
  valoration: TValoration;
};

export type TValoration = boolean[];

export type TRecipeComplete = {
  id: string;
  pathRecipeImage: string;
  pathAvatarImage: string;
  nameRecipe: string;
  nameUser: string;
  valoration: TValoration;
  valorationNumber: number;
  introduction: string;
  ingredients: TIngredient[];
  steps: TStep[];
  tricks: TTrick[];
  comments: TCommentary[];
  tags: any[];
  relatedRecipes: {
    title: string;
    recipes: TRecipeStars[];
  }[];
};

export type TIngredient = {
  id: string;
  pathIngredientImage: string;
  name: string;
  amount: string;
};

export type TStep = {
  id: string;
  step: string;
};

export type TTrick = {
  id: string;
  trick: string;
};

export type TRadio = {
  radio: string;
}