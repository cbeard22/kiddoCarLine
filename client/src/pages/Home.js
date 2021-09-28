import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './Home.css';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div style={{ width: '100', margin: '20px' }}>
        <Grid className="home-grid">
          <Cell col={6}>

            <div className="banner-text">
              <h1 className='comp-name'> Kiddo Car Line </h1>
            </div>
          </Cell>
          <Cell col={6}>
            <h3 className='what'> What would you like to do?</h3>
            <ul className="list">
              <li><Link to='/SignupForm'> Create a parent account</Link></li>
              <li><Link to='/ParentLoginForm'> Login as a parent</Link></li>
              <li><Link to='/AdminLoginForm'> Login as an Administrator</Link></li>
            </ul>
          </Cell >
        </Grid >
      </div >
    )
  }
}
export default Home;