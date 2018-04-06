import React, { Component, PropTypes } from 'react';
import { Row, Col, Grid } from 'react-bootstrap'
import HowItWorks from '../components/HowItWorks'
import GetStarted from '../components/GetStarted'




export default class Home extends Component {
  render() {
    // we can use ES6's object destructuring to effectively 'unpack' our props
    return (
      <section>
          <div className="slider-wrapper">
              <GetStarted />
          </div>
          <Grid>
              <div className="howwork-wrapper">
                  <Row >
                      <Col md={12}>
                          <HowItWorks />
                      </Col>
                  </Row>
              </div>
          </Grid>
      </section>

    );
  }
}
