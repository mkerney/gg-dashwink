import React, { Component } from 'react';
import { Button, Navbar, NavItem, Nav, Row, Col, FormGroup, FieldGroup, Checkbox, InputGroup, FormControl } from 'react-bootstrap'

export default class Footer extends Component {
  render() {
    return (
      <section>
        <footer className="footer-wrapper">
          <div className="container">
            <ul className="list-inline footer-menu">
            <li>
              <a href="#">Offers</a>
            </li>
            <li>
              <a href="#">How It Works</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <ul className="list-inline social-menu">
            <li>
              <a href="#"><i className="fa fa-facebook"></i></a>
            </li>
            <li>
              <a href="#"><i className="fa fa-twitter"></i></a>
            </li>
            <li>
              <a href="#"><i className="fa fa-pinterest"></i></a>
            </li>
            <li>
              <a href="#"><i className="fa fa-instagram"></i></a>
            </li>
          </ul>
          </div>
          <div className="container">
            <p>Copyright © Dashwink. All Rights Reserved.</p>
          </div>
        </footer>
        <div className="subscriber-form-wrapper">
          <div className="container">
            <Button className="btn btn-primary subscriber-close">&times;</Button>
            <div className="form-container">
              <Row>
                <Col md={5}>
                  <p>
                    Wink at what you like and we will deliver more styles to you.
                  </p>
                </Col>
                <Col md={7}>
                  <form>
                    <Row>
                      <Col sm={4}>
                        <FormGroup>
                          <Checkbox inline>
                            Men
                          </Checkbox>
                        </FormGroup>
                        <FormGroup className="mb-0">
                          <Checkbox inline>
                            Women
                          </Checkbox>
                        </FormGroup>
                      </Col>
                      <Col sm={8}>
                        <FormGroup>
                          <InputGroup>
                            <FormControl type="text" placeholder="Email Address" />
                            <InputGroup.Addon><Button>Subscribe</Button></InputGroup.Addon>
                          </InputGroup>
                        </FormGroup>
                      </Col>
                    </Row>
                  </form>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </section>    
    );
  }
}
