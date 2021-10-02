import React from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_LOCATION } from '../utils/mutations';

import { DropdownButton, Dropdown } from 'react-bootstrap';

const userID = localStorage.getItem('id_user');

const Position = (props) => {
    const [createLocation, { error, data }] = useMutation(CREATE_LOCATION);

    const locationSubmit = async (event) => {
        event.preventDefault();
        console.log({ row: 1, position: 1, userID: userID });

        try {
            const { data } = await createLocation({variables: { row: 1, position: 1, userID: userID }});
            window.location.assign('./');

        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className='location'>
            <h1>Where are you located in the car rider line?</h1>
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
                <button className="btn btn-block btn-primary" style={{ cursor: 'pointer' }} onClick={locationSubmit}>
                I am here for my child!
                </button>
        </div>
    )
}

export default Position;