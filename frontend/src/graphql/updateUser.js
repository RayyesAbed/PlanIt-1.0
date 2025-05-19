import { gql } from "@apollo/client";

const updateUser = gql`
  mutation UpdateUser(
    $name: String
    $toBeConfirmedEmail: String
    $password: String
    $id: ID!
  ) {
    updateUser(
      name: $name
      toBeConfirmedEmail: $toBeConfirmedEmail
      password: $password
      id: $id
    ) {
      name
      toBeConfirmedEmail
      confirmedEmail
      password
    }
  }
`;

export default updateUser;
