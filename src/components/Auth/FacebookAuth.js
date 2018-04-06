import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
import cookie from 'react-cookie'



const responseFacebook = (response) => {
  axios.post('https://api.dashwink.tech/sessions/facebook', {
    facebook_token: response.accessToken
  })
 .then(response => {
    var userInfo = {id: response.data.data.id, token: response.data.data.attributes['auth-token']}
    cookie.save('user', userInfo, {path:'/'});
  })
  .catch(function (error) {
    console.log(error);
  });
}


export default class FacebookAuth extends Component {
  render () {
    return (
      <FacebookLogin
        className='btn btn-block btn-facebook'
        appId="337269936617073"
        autoLoad={true}
        fields="name,email,picture"
        callback={(res) => responseFacebook(res)}
        cssClass="btn btn-block btn-facebook"
        icon="fa fa-facebook-official"
        textButton=" Import from Facebook"
      />
    )
  }

}
