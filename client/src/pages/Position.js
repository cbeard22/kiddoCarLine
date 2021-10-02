import React from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_LOCATION } from '../utils/mutations';

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
        <div className='location'>
            <h1>I am here for my child!</h1>
            <button className="btn btn-block btn-primary" style={{ cursor: 'pointer' }} onClick={locationSubmit}>
                I am here for my child!
            </button>
        </div>
    )
}

export default Position;