import React, { Component } from 'react'
import axios from 'axios';
import cookie from 'react-cookie'

import { LinkContainer } from 'react-router-bootstrap'



export default class Logout extends Component {
  constructor () {
    super()
  }

  logout () {
    var user = cookie.load('user')
    axios.delete("https://api.dashwink.tech/sessions/" + user.token, {
      id: user.token
    }).then(function (response) {
      // somethign wrong with api need tofigure out
      cookie.remove('user' , {path:'/'})
    })

  }
  render () {
    return (
      <LinkContainer to="/">
        <button className="btn-logout" onClick={this.logout.bind(this)}>
          Logout
        </button>
      </LinkContainer>
    )
  }

}
