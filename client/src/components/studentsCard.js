import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import './studentsCard.css'


//this will be the card used to render to admin pages for the rows and positions of car riders
export default function studentsCard(props) {
    return (
        <Col>
            <Card id={props.id}>
                <Card.Body>
                    {props.name}
                </Card.Body>
            </Card>
        </Col>
    );
};