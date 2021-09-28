import { gql } from '@apollo/client';

export const QUERY_PARENT = gql`
query {
    me {
        _id
        username
        email
        password
        parent {
                studentLastName
            }
        }
    }
`;