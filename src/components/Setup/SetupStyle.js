import React, { Component } from 'react'
import {Grid, Thumbnail, Row, Col, Button} from 'react-bootstrap'

export default class SetupStyle extends Component {
  constructor (props) {
    super(props)
    console.log(this.props.gender)
  }

  render() {
    return (
      <Grid>
        <div className="style-wrapper">
          <Row>
            <Col md={8} mdOffset={2}>
              <Row className="text-center">
                <h3>What's your work style</h3>
                <Col sm={4}>
                    <div className="style-card">
                      <Thumbnail responsive href="#" src="assets/women_work_classic_casual.png"></Thumbnail>
                  </div>
                </Col>
                <Col sm={4}>
                    <div className="style-card">
                      <Thumbnail responsive href="#" src="assets/women_work_casual.png"></Thumbnail>
                  </div>
                </Col>
                <Col sm={4}>
                    <div className="style-card">
                      <Thumbnail responsive href="#" src="assets/women_work_formal_suit.png"></Thumbnail>
                  </div>
                </Col>
              </Row>
              <Row className="text-center">
                <h3>What's your day style</h3>
                <Col sm={4}>
                    <div className="style-card">
                      <Thumbnail className="selected" responsive href="#" src="assets/women_day_casual-1.png"></Thumbnail>
                  </div>
                </Col>
                <Col sm={4}>
                    <div className="style-card">
                      <Thumbnail responsive href="#" src="assets/women_day_classic-1.png"></Thumbnail>
                  </div>
                </Col>
                <Col sm={4}>
                    <div className="style-card">
                      <Thumbnail responsive href="#" src="assets/women_day_trendy-1.png"></Thumbnail>
                  </div>
                </Col>
              </Row>
              <Row className="text-center">
                <h3>What's your evening style</h3>
                <Col sm={4}>
                    <div className="style-card">
                      <Thumbnail responsive href="#" src="assets/women_evening_trendy_dress.png"></Thumbnail>
                  </div>
                </Col>
                <Col sm={4}>
                    <div className="style-card">
                      <Thumbnail responsive href="#" src="assets/women_evening_black_dress.png"></Thumbnail>
                  </div>
                </Col>
                <Col sm={4}>
                    <div className="style-card">
                      <Thumbnail className="selected" responsive href="#" src="assets/women_evening_casual_dress.png"></Thumbnail>
                  </div>
                </Col>
              </Row>
              <Row className="text-center">
                <Button className="btn btn-black" href="#"> Continue </Button>
              </Row>
            </Col>
          </Row>
        </div>
      </Grid>
    )
  }
}
