import React, { Component} from 'react'
import {Row, Button,  Col, Thumbnail} from 'react-bootstrap'

export default class Brand extends Component {
  render () {
    return (
      <div className="container">
        <div className="style-wrapper brands-wrapper">
          <Row>
            <Col md={8} mdOffset={2}>
              <h3 className="text-center"> Tell us your favorite brands:</h3>
              <Row>
                <Col md={3} xs={6}>
                  <div className="style-card">
                    <Thumbnail responsive href="#" className="img-responsive" src="assets/brand.png"></Thumbnail>
                  </div>
                </Col>
                <Col md={3} xs={6}>
                  <div className="style-card active">
                    <Thumbnail responsive href="#" className="img-responsive" src="assets/brand.png"></Thumbnail>
                  </div>
                </Col>
                <Col md={3} xs={6}>
                  <div className="style-card">
                    <Thumbnail responsive href="#" className="img-responsive" src="assets/brand.png"></Thumbnail>
                  </div>
                </Col>
                <Col md={3} xs={6}>
                  <div className="style-card">
                    <Thumbnail responsive href="#" className="img-responsive" src="assets/brand.png"></Thumbnail>
                  </div>
                </Col>
                <Col md={3} xs={6}>
                  <div className="style-card">
                    <Thumbnail responsive href="#" className="img-responsive" src="assets/brand.png"></Thumbnail>
                  </div>
                </Col>
                <Col md={3} xs={6}>
                  <div className="style-card">
                    <Thumbnail responsive href="#" className="img-responsive" src="assets/brand.png"></Thumbnail>
                  </div>
                </Col>
                <Col md={3} xs={6}>
                  <div className="style-card">
                    <Thumbnail responsive href="#" className="img-responsive" src="assets/brand.png"></Thumbnail>
                  </div>
                </Col>
                <Col md={3} xs={6}>
                  <div className="style-card">
                    <Thumbnail responsive href="#" className="img-responsive" src="assets/brand.png"></Thumbnail>
                  </div>
                </Col>
                <Col md={3} xs={6}>
                  <div className="style-card">
                    <Thumbnail responsive href="#" className="img-responsive" src="assets/brand.png"></Thumbnail>
                  </div>
                </Col>
                <Col md={3} xs={6}>
                  <div className="style-card active">
                    <Thumbnail responsive href="#" className="img-responsive" src="assets/brand.png"></Thumbnail>
                  </div>
                </Col>
                <Col md={3} xs={6}>
                  <div className="style-card">
                    <Thumbnail responsive href="#" className="img-responsive" src="assets/brand.png"></Thumbnail>
                  </div>
                </Col>
                <Col md={3} xs={6}>
                  <div className="style-card">
                    <Thumbnail responsive href="#" className="img-responsive" src="assets/brand.png"></Thumbnail>
                  </div>
                </Col>
              </Row>
              <Row className="text-center">
                <Button className="btn-black"> Continue </Button>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
