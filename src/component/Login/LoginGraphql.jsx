import { gql } from "@apollo/client";

const LOGIN = gql`
  mutation LOGIN($input: LoginInput!) {
    login(input: $input) {
      authToken
      user {
        id
        username
        name
        email
        firstName
        lastName
        description
        nicename
        wooSessionToken
        jwtAuthToken
      }
      sessionToken
    }
  }
`;

export default LOGIN;
