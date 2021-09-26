import gql from 'graphql-tag';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token {
                user{
                    email
                    password
                }
            }
        }
    }




`;

export const ADD_STUDENT = gql`
    mutation createStudent($_id: String!, $techNum: Int!){
        createStudent(_id: $_id, techNum: $techNum) {
            token
            user {
                _id
                techNum
            }
        }
    }




`;

export const CREATE_LOCATION = gql`
    mutation createLocation($student: String! $tech2: String!){
        createLocation(student: $student, tech2: $tech2){
            token
            location{
                student
                tech2
            }
        }
    }



`;



