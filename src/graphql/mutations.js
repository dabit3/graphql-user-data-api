// this is an auto generated file. This will be overwritten
import gql from "graphql-tag";

export const CreateAvatar = gql`
  mutation CreateAvatar($input: CreateAvatarInput!) {
    createAvatar(input: $input) {
      id
      gender
      name
    }
  }
`;
export const UpdateAvatar = gql`
  mutation UpdateAvatar($input: UpdateAvatarInput!) {
    updateAvatar(input: $input) {
      id
      gender
      name
    }
  }
`;
export const DeleteAvatar = gql`
  mutation DeleteAvatar($input: DeleteAvatarInput!) {
    deleteAvatar(input: $input) {
      id
      gender
      name
    }
  }
`;
