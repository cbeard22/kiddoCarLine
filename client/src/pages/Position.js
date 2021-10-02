import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_LOCATION } from '../utils/mutations';
import Auth from '../utils/auth';

import { DropdownButton, Dropdown, Button } from 'react-bootstrap';

//console.log(CREATE_LOCATION);

//This page defines the position the cars are in after parent logs in.
const Position = () => {
    const [formState, setFormState] = useState({
        row: '',
        position: '',
    });
    const [createLocation, { error, data }] = useMutation(CREATE_LOCATION);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        Auth.loggedIn();

        try {
            const { data } = await createLocation({
                variables: { ...formState },
            });

        } catch (e) {
            console.error(e);
        }
    };



//class Position extends Component {
//    render() {
        return (
            <div className='location'>
                <h1>Where are you located in the car rider line?</h1>
                <div className='location-row'>
                    <DropdownButton id="dropdown-basic-button" title="What Row are you in?" onChange={handleChange}>
                        <Dropdown.Item href="">Row 1</Dropdown.Item>
                        <Dropdown.Item href="">Row 2</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div className='location-position'>
                    <DropdownButton id="dropdown-basic-button" title="What position are you in?" onChange={handleChange}>
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
        )
    }
//}

export default Position;