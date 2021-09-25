import { gql } from '@apollo/client';

export const GET_STUDENTS = gql `
    query {
        students {
            _id
            email
            password
            parent {
                parentOne
                parentTwo
            }
            student {
                userID
            }
        }
    }
`;