import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { ADD_STUDENT } from '../utils/mutations';
import Auth from '../utils/auth';

const SignupForm = () => {
    const [userFormData, setUserFormData] = useState({ parentName: '', childName: ''});
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [addStudent] = useMutation(ADD_STUDENT);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        vent.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const { data } = await addStudent({
            variables: { ...userFormData }
            });

        Auth.login(data.addStudent.token);

        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setUserFormData({
            parentName: '',
            childName: '',
        });
    };


    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                    Something went wrong with your signup!
                </Alert>

                <Form.Group>
                    <Form.Label htmlFor='parentName'>Parent Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Parent Name'
                        name='parentName'
                        onChange={handleInputChange}
                        value={userFormData.parentName}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Name is required!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor='parentName'>Parent Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Parent Name'
                        name='parentName'
                        onChange={handleInputChange}
                        value={userFormData.parentName}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Name is required!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor='childName'>Child Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Child Name'
                        name='childName'
                        onChange={handleInputChange}
                        value={userFormData.childName}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Name is required!</Form.Control.Feedback>
                </Form.Group>
                <Button
                    disabled={!(userFormData.parentName && userFormData.childName)}
                    type='submit'
                    variant='success'>
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default SignupForm;