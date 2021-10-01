import React, { Component } from 'react';

import { DropdownButton, Dropdown, Button, Container } from 'react-bootstrap';



//This page defines the position the cars are in after parent logs in.

//console.log(data);

class Position extends Component {
    render() {
        return (
            <Container className="d-flex justify-content-center">
            <div className='location'>
                <h1 style={{color:"white"}}>Where are you located in the car rider line?</h1>
                <div className='location-row'>
                    <DropdownButton id="dropdown-basic-button" title="What Row are you in?">
                        <Dropdown.Item href="">Row 1</Dropdown.Item>
                        <Dropdown.Item href="">Row 2</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div className='location-position'>
                    <DropdownButton id="dropdown-basic-button" title="What position are you in?">
                        <Dropdown.Item href="">Car 1</Dropdown.Item>
                        <Dropdown.Item href="">Car 2</Dropdown.Item>
                        <Dropdown.Item href="">Car 3</Dropdown.Item>
                        <Dropdown.Item href="">Car 4</Dropdown.Item>
                        <Dropdown.Item href="#">Car 5</Dropdown.Item>
                        <Dropdown.Item href="#">Car 6</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div className='submitbutton'>
                    <Button variant="primary" size="lg">
                        I am here for my child!
                    </Button>{' '}
                </div>
            </div>
            </Container>
        )
    }
}

export default Position;