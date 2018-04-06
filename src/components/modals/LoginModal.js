import React, { Component } from 'react'
import { Button, Modal, OverlayTrigger, Popover, Tooltip, Nav, NavItem, Row, Col, FormGroup, FieldGroup, Checkbox } from 'react-bootstrap'
import axios from 'axios';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import cookie from 'react-cookie';

const responseGoogle = (response) => {
  axios.post('https://api.dashwink.tech/sessions/google', {
    google_token: response.accessToken
  })
  .then(function (response) {
    var userInfo = {id: response.data.data.id, token: response.data.data.attributes['auth-token']}
    cookie.save('user', userInfo , {path:'/'});
    LoginModal.setState({ showModal: false });
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
  })
  .catch(function (error) {
    console.log(error);
  });
}

export default class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.render.bind(this);
    this.state = {showModal: false}
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.login = this.props.login
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  // login() {
  //   axios.post('https://api.dashwink.tech/sessions', {
  //     email: this.state.email,
  //     password: this.state.password
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //     var userInfo = {id: response.data.data.id, token: response.data.data.attributes['auth-token']}
  //     cookie.save('user', userInfo);
  //     this.setState({
  //       name: response.data.data.attributes['first-name'] + ' ' + response.data.data.attributes['last-name'],
  //     })
  //     console.log(this.state)
  //     this.forceUpdate()
  //   }.bind(this))
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

    handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  render () {

    return (
      <form>
        <FormGroup >
          <input value={this.state.email} onChange={this.handleEmailChange} className="form-control" placeholder="Email"/>
        </FormGroup>
        <FormGroup>
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange} className="form-control" placeholder="Password"/>
        </FormGroup>
        <Row className='top-space'>
          <Col sm={6}>
            <Checkbox className="checkbox-login"> Remember Me </Checkbox>
          </Col>
          <Col sm={6} className='forgot-password'>
            <a href="">Forgot Password</a>
          </Col>
        </Row>
        <Row className='top-space'>
          <Col md={12}>
            <Button onClick={()=> this.login(this.state.email, this.state.password)} className="btn btn-black btn-block">Login</Button>
          </Col>
        </Row>
      </form>
    )
  }

}

LoginModal.propTypes={
  login:React.PropTypes.func
}
