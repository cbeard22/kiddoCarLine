import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Home extends Component {
  render() {
    return (
      <div style={{ width: '100', margin: '20px' }}>
        <Grid className="home-grid">
          <Cell col={12}>

            <div className="banner-text">
              <h1> Kiddo Car Line </h1>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Home;