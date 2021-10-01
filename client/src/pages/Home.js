import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './Home.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import img from './images/logo.png';

class Home extends Component {
  render() {
    return (
      <section className='background'>
      <Container style={{ width: '100', margin: '20px'}}>
        <Row>
          <Col>
            <Grid className="home-grid">
              <Cell col={6}>

                <div className="banner-text">
                  <img class='logo' src={img} alt='logo'>

                  </img>
                </div>
              </Cell>
              <Cell col={6}>
                <h3 className='what m-3'> What would you like to do?</h3>
                <ListGroup className="list">
                  <ListGroupItem><Link to='/SignupForm'> Create an Account</Link></ListGroupItem>
                  <ListGroupItem><Link to='/ParentLoginForm'> Login</Link></ListGroupItem>
                  <ListGroupItem><Link to='/AdminLoginForm'> Admin Login </Link></ListGroupItem>
                </ListGroup>
              </Cell >
            </Grid >
          </Col>
        </Row>
      </Container >
      </section>
    )
  }
}
export default Home;