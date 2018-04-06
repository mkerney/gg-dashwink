import React, { Component } from 'react'
import { Button, Modal, OverlayTrigger, Popover, Tooltip, Nav, NavItem, Row, Col, FormGroup, FieldGroup, Checkbox } from 'react-bootstrap'
import axios from 'axios';
import cookie from 'react-cookie';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
  axios.post('https://api.dashwink.tech/sessions/google', {
    google_token: response.accessToken
  })
  .then(function (response) {
    var userInfo = {id: response.data.data.id, token: response.data.data.attributes['auth-token']}
    cookie.save('user', userInfo , {path:'/'});
    SignupModal.setState({ showModal: false });
  })
  .catch(function (error) {
    console.log(error);
  });
}
const responseFacebook = (response) => {
  axios.post('https://api.dashwink.tech/sessions/facebook', {
    facebook_token: response.accessToken
  })
 .then(function (response) {
    var userInfo = {id: response.data.data.id, token: response.data.data.attributes['auth-token']}
    cookie.save('user', userInfo , {path:'/'});
    SignupModal.close()
  })
  .catch(function (error) {
    console.log(error);
  });
}

export default class SignupModal extends Component {

  constructor() {
    super();
    this.render.bind(this);
    this.state = {showModal: true}
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);


  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  handleFirstNameChange(e) {
    this.setState({firstName: e.target.value});
  }

  handleLastNameChange(e) {
    this.setState({lastName: e.target.value});
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  signUp() {
    var that = this;
    // var userInfo = {id: response.data.data.id, token: response.data.data.attributes['auth-token']}
    // cookie.save('user', userInfo);
    axios.post('https://api.dashwink.tech/users', {
      user: {
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      }
    })
    .then(function (response) {
      var userInfo = {id: response.data.data.id, token: response.data.data.attributes['auth-token']}
      cookie.save('user', userInfo , {path:'/'});
    })
    .catch(function (error) {
      console.log(error);
    });
    this.setState({ showModal: false });

  }

  handleSelect(eventKey) {
    event.preventDefault();
    alert(`selected ${eventKey}`);
  }
  render () {

    return (
      <form>
        <FormGroup>
          <input value={this.state.firstName} onChange={this.handleFirstNameChange} className="form-control" placeholder="First Name"/>
        </FormGroup>
        <FormGroup>
          <input value={this.state.lastName} onChange={this.handleLastNameChange} className="form-control" placeholder="Last Name"/>
        </FormGroup>
        <FormGroup>
          <input value={this.state.email} onChange={this.handleEmailChange} className="form-control" placeholder="Email"/>
        </FormGroup>
        <FormGroup>
          <input value={this.state.password} onChange={this.handlePasswordChange}  type="password" className="form-control" placeholder="Password"/>
        </FormGroup>
        <Row>
          <Col md={12}>
            <p className="term-conditions">
              By signing up, I agree to the <a href="javascript:void(0);">Terms of Service</a> and <a href="javascript:void(0);">Privacy Policy</a>
            </p>
          </Col>
          <Col md={12}>
            <Button onClick={this.signUp.bind(this)} className="btn btn-black btn-block">Sign Up</Button>
          </Col>
        </Row>
      </form>
    )
  }

}
