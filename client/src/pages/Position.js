import React from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_LOCATION } from '../utils/mutations';
import { Container, Col, Card} from 'react-bootstrap';

const userID = localStorage.getItem('id_user');

const Position = (props) => {
    const [createLocation, { error, data }] = useMutation(CREATE_LOCATION);

    const locationSubmit = async (event) => {
        event.preventDefault();
        console.log({ row: 1, position: 1, userID: userID });

        try {
            const { data } = await createLocation({ variables: { row: 1, position: 1, userID: userID } });
            window.location.assign('./');

        } catch (e) {
            console.error(e);
        }
    };

    return (
        <main className="flex-row justify-center mb-4">
        <Container>
        <Col className="d-flex justify-content-center">
            <Card style ={{backgroundColor:'black'}}>
            <h1 style={{color:'white'}}>I am here for my child!</h1>
                <button className="btn btn-block btn-primary" style={{ cursor: 'pointer' }} onClick={locationSubmit}>
                Click To Confirm
              </button>
              </Card>
        </Col>
        </Container>
        </main>
    )
}

export default Position;