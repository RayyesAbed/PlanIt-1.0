import { gql } from "@apollo/client";

const updatePassword = gql`
  mutation UpdatePassword(
    $oldPassword: String
    $newPassword: String
    $id: ID!
  ) {
    updatePassword(
      oldPassword: $oldPassword
      newPassword: $newPassword
      id: $id
    ) {
      id
    }
  }
`;

export default updatePassword;
