import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import cookie from 'react-cookie'


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


export default class GoogleAuth extends Component {
  render () {
    return (
      <GoogleLogin
        className='btn btn-block btn-google'
        clientId="243995276556-brcj0m6p4ci6fc8q598me993giohgte3.apps.googleusercontent.com"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        >
        <i className="fa fa-google"></i>
        <span> Import from Google</span>
      </GoogleLogin>
    )
  }
}
