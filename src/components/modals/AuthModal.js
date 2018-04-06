import React, { Component } from 'react'
import { Button, Modal, OverlayTrigger, Popover, Tooltip, Nav, NavItem, Row, Col, FormGroup, FieldGroup, Checkbox } from 'react-bootstrap'
import axios from 'axios';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import cookie from 'react-cookie';

import LoginModal from './LoginModal'
import SignupModal from './SignupModal'


const responseGoogle = (response) => {
  axios.post('https://api.dashwink.tech/sessions/google', {
    google_token: response.accessToken
  })
  .then(function (response) {
    var userInfo = {id: response.data.data.id, token: response.data.data.attributes['auth-token']}
    cookie.save('user', userInfo, {path:'/'});
  })
  .catch(function (error) {
    console.log(error);
  });
}

export default class AuthModal extends Component {
  constructor(props) {
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.login = this.props.login
  }



  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  render () {
    const { show, whichModal } = this.props;

    const responseFacebook = response => {
      axios.post('https://api.dashwink.tech/sessions/facebook', {
        facebook_token: response.accessToken
      })
     .then(response => {
        var userInfo = {id: response.data.data.id, token: response.data.data.attributes['auth-token']}
        cookie.save('user', userInfo, {path:'/'});
        this.props.closeModal();
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    const handleWhichModal = () => {
      if (whichModal === 'login') {
        return <LoginModal login={this.login.bind(this)}/>
      } else if (whichModal === 'signup') {
        return <SignupModal />
      } else {
        return;
      }
    }

    return (
      <Modal show={show} className="modal-wrapper login-modal-wrapper">
        <Modal.Body>
          <Nav bsStyle='pills'>
            <NavItem onClick={() => this.props.checkModal('login')}><span className="login-nav-tab">Log In</span></NavItem>
            <NavItem onClick={() => this.props.checkModal('signup')}><span className="login-nav-tab">Sign Up</span></NavItem>
          </Nav>
          {handleWhichModal()}
          <div className="social-signup">
            <span className="divider-or">OR</span>
            <p>
              Sign in with social account
            </p>
            <Row>
              <Col xs={6}>
                <GoogleLogin
                className='btn btn-block btn-google'
                clientId="243995276556-brcj0m6p4ci6fc8q598me993giohgte3.apps.googleusercontent.com"
                buttonText="Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
              />
              </Col>
              <Col xs={6}>
                <FacebookLogin
                className='btn btn-block btn-facebook'
                appId="337269936617073"
                autoLoad={true}
                fields="name,email,picture"
                callback={(res) => responseFacebook(res)}
                cssClass="btn btn-block btn-facebook"
              />
              </Col>
            </Row>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-black" onClick={() => this.props.closeModal()}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }

}

AuthModal.propTypes={
  login:React.PropTypes.func
}
