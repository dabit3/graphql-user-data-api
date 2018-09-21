// this is an auto generated file. This will be overwritten
import gql from "graphql-tag";

export const GetAvatar = gql`
  query GetAvatar($id: ID!) {
    getAvatar(id: $id) {
      id
      gender
      name
    }
  }
`;
export const ListAvatars = gql`
  query ListAvatars(
    $filter: ModelAvatarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAvatars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        gender
        name
      }
      nextToken
    }
  }
`;
