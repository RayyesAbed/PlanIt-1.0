import { gql } from "@apollo/client";

const updateUser = gql`
  mutation UpdateUser($name: String, $toBeConfirmedEmail: String, $id: ID!) {
    updateUser(name: $name, toBeConfirmedEmail: $toBeConfirmedEmail, id: $id) {
      name
      toBeConfirmedEmail
      confirmedEmail
    }
  }
`;

export default updateUser;
