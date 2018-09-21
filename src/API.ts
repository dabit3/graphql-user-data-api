/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateAvatarInput = {
  gender: string,
  name: string,
};

export type UpdateAvatarInput = {
  id: string,
  gender?: string | null,
  name?: string | null,
};

export type DeleteAvatarInput = {
  id?: string | null,
};

export type ModelAvatarFilterInput = {
  id?: ModelIDFilterInput | null,
  gender?: ModelStringFilterInput | null,
  name?: ModelStringFilterInput | null,
  and?: Array< ModelAvatarFilterInput | null > | null,
  or?: Array< ModelAvatarFilterInput | null > | null,
  not?: ModelAvatarFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type CreateAvatarMutationVariables = {
  input: CreateAvatarInput,
};

export type CreateAvatarMutation = {
  createAvatar:  {
    __typename: "Avatar",
    id: string,
    gender: string,
    name: string,
  } | null,
};

export type UpdateAvatarMutationVariables = {
  input: UpdateAvatarInput,
};

export type UpdateAvatarMutation = {
  updateAvatar:  {
    __typename: "Avatar",
    id: string,
    gender: string,
    name: string,
  } | null,
};

export type DeleteAvatarMutationVariables = {
  input: DeleteAvatarInput,
};

export type DeleteAvatarMutation = {
  deleteAvatar:  {
    __typename: "Avatar",
    id: string,
    gender: string,
    name: string,
  } | null,
};

export type GetAvatarQueryVariables = {
  id: string,
};

export type GetAvatarQuery = {
  getAvatar:  {
    __typename: "Avatar",
    id: string,
    gender: string,
    name: string,
  } | null,
};

export type ListAvatarsQueryVariables = {
  filter?: ModelAvatarFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAvatarsQuery = {
  listAvatars:  {
    __typename: "ModelAvatarConnection",
    items:  Array< {
      __typename: "Avatar",
      id: string,
      gender: string,
      name: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateAvatarSubscription = {
  onCreateAvatar:  {
    __typename: "Avatar",
    id: string,
    gender: string,
    name: string,
  } | null,
};

export type OnUpdateAvatarSubscription = {
  onUpdateAvatar:  {
    __typename: "Avatar",
    id: string,
    gender: string,
    name: string,
  } | null,
};

export type OnDeleteAvatarSubscription = {
  onDeleteAvatar:  {
    __typename: "Avatar",
    id: string,
    gender: string,
    name: string,
  } | null,
};
