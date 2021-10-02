import gql from 'graphql-tag';


export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!, $isAdmin: Boolean!) {
        login(email: $email, password: $password, isAdmin: $isAdmin) {
            token
            user {
                _id
                email
                password
                parentOne
            }
        }
    }
`;


export const ADD_USER = gql`
    mutation createUser($parentOne: String!, $email: String!, $password: String!, $student: String) {
        createUser(parentOne: $parentOne, email: $email, password: $password, student: $student) {
            token
            user {
                email
                parentOne
                parentTwo
                students {
                  student
                }
            }
        }
    }
`;

export const CREATE_LOCATION = gql`
    mutation createLocation($parentOne: String!, $row: String!, $position: String!){
        createLocation(parentOne: $parentOne, row: $row, position: $position){
            _id
            row
            position
            user {
                email
                parentOne
                parentTwo
                students {
                    student
                }
            }
        }
    }

`;

export const ADD_STUDENT = gql`
  mutation addStudent($student: String!) {
    addStudent(student: $student) {
      _id
      addStudent
      parentOne
    }
  }
`;

