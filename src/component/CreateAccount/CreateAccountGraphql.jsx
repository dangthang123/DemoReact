import { gql } from "@apollo/client";

const CREATE_ACCOUNT = gql`
    mutation CREATE_ACCOUNT ( $input: RegisterUserInput!) {
        registerUser(input: $input) {
            user {
                id
                username
                name
                email
                firstName
                lastName
            }
        }
    }
`;

export default CREATE_ACCOUNT;
