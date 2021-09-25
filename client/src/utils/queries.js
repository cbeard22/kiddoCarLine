import { gql } from '@apollo/client';

export const GET_STUDENTS = gql `
    query {
        students {
            _id
            student
            parent {
                parentOne
                parentTwo
            }
        }
    }
`;