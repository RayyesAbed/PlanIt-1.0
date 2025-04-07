import { gql } from "@apollo/client";

const updateUser = gql`
  mutation UpdateUser(
    $name: String
    $email: String
    $password: String
    $id: ID!
  ) {
    updateUser(name: $name, email: $email, password: $password, id: $id) {
      name
      email
      password
    }
  }
`;

export default updateUser;
