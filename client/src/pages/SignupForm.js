import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Container, Row, Col, Button, Card, FormGroup } from 'react-bootstrap';
import './SignupForm.css';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const SignupForm = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    studentsName: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

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

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <Card className="card col-md-6">
              <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
              <Card.Body className="card-body">
                {data ? (
                  <p>
                    Success! You may now head{' '}
                    <Link to="/">back to the homepage.</Link>
                  </p>
                ) : (
                  <Form onSubmit={handleFormSubmit}>
                    <Form.Group>
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        className="form-input"
                        placeholder="username"
                        name="username"
                        type="text"
                        value={formState.username}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <FormGroup>
                      <Form.Label> Email</Form.Label>
                      <Form.Control
                        className="form-input"
                        placeholder="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <Form.Group>
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        className="form-input"
                        placeholder="******"
                        name="password"
                        type="password"
                        value={formState.password}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Student Last Name</Form.Label>
                      <Form.Control
                        className="form-input"
                        placeholder="student last name"
                        name="studentsName"
                        type="text"
                        value={formState.studentsName}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Button
                      className="btn btn-block btn-primary"
                      style={{ cursor: 'pointer' }}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Form>
                )}

                {error && (
                  <div className="my-3 p-3 bg-danger text-white">
                    {error.message}
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default SignupForm;
