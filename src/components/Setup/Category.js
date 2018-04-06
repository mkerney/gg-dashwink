import React, { Component } from 'react'
import {Grid, Button, Row, Col, Thumbnail} from 'react-bootstrap'

export default class Category extends Component {
  render () {
    return (
     <Grid>
        <div className="style-wrapper categories-wrapper">
          <Row>
            <Col md={8} mdOffset={2}>
              <Row className="text-center">
                <Col md={12}>
                  <h3>What categories are you interested in?</h3>
                </Col>
                <Col sm={4}>
                  <div className="style-card">
                      <Thumbnail className="selected" responsive href="#" src="assets/category.png"></Thumbnail>
                  </div>
                </Col> 
                <Col sm={4}>
                  <div className="style-card">
                      <Thumbnail responsive href="#" src="assets/category.png"></Thumbnail>
                  </div>
                </Col> 
                <Col sm={4}>
                  <div className="style-card">
                      <Thumbnail responsive href="#" src="assets/category.png"></Thumbnail>
                  </div>
                </Col> 
                <Col sm={4}>
                  <div className="style-card">
                      <Thumbnail responsive href="#" src="assets/category.png"></Thumbnail>
                  </div>
                </Col> 
                <Col sm={4}>
                    <div className="style-card">
                      <Thumbnail className="selected" responsive href="#" src="assets/category.png"></Thumbnail>
                  </div>
                </Col> 
                <Col sm={4}>
                  <div className="style-card">
                      <Thumbnail responsive href="#" src="assets/category.png"></Thumbnail>
                  </div>
                </Col> 
                <Col sm={4}>
                  <div className="style-card">
                      <Thumbnail responsive href="#" src="assets/category.png"></Thumbnail>
                  </div>
                </Col> 
                <Col sm={4}>
                  <div className="style-card">
                      <Thumbnail responsive href="#" src="assets/category.png"></Thumbnail>
                  </div>
                </Col> 
                <Col sm={4}>
                  <div className="style-card">
                      <Thumbnail responsive href="#" src="assets/category.png"></Thumbnail>
                  </div>
                </Col> 
              </Row>
              <Row className="text-center">
                <Button className="btn-black"> Continue </Button>
              </Row>
            </Col>
          </Row>
        </div>
      </Grid>
    )
  }
}
