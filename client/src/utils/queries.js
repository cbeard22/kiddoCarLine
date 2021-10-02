import { gql } from '@apollo/client';

export const GET_STUDENTS = gql`
    query users {
        users {
            _id
            email
            password
            parentOne
            parentTwo
            students {
                student
            }
        }
    }
`;

export const QUERY_LOCATIONS = gql`
  query locations {
    locations {
      _id
      row
      position
      user {
          parentOne
          parentTwo
          students {
              student
          }
      }
    }
  }
`;
