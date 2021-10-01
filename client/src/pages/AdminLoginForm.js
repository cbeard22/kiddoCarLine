import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Form, Container, Row, Col, Button, Card, FormGroup } from 'react-bootstrap';


const AdminLoginForm = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '', isAdmin: true });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className="flex-row justify-center mb-4">
      <Container>
        <Row>
      <Col className="d-flex justify-content-center">
        <Card className="card col-md-6">
          <h4 className="card-header bg-dark text-light p-2">Login</h4>
          <Card.Body className="card-body">
            {data ? (
              <p>
                <Link to="/AdminCarDisplay">You can now view the cars.</Link>
              </p>
            ) : (
              <Form onSubmit={handleFormSubmit}>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                <Form.Control
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                </Form.Group>
                <FormGroup>
                  <Form.Label>Password</Form.Label>
              
                <Form.Control
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                </FormGroup>
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
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

export default AdminLoginForm;
