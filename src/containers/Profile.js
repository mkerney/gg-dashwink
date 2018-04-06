import React, { Component } from 'react'
import axios from 'axios'
import cookie from 'react-cookie'

import ProfileNav from '../components/Profile/ProfileNav'

export default class Profile extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount () {
    var user = cookie.load('user')
    axios.get('http://api.dashwink.tech/users/' + user.id)
    .then(function (response) {
      var data = response.data.data.attributes
      this.setState({
        name:data["first-name"] + " " + data["last-name"],
        email:data.email,
        firstName:data["first-name"],
        lastName:data["last-name"],
        image:data["avatar-small"]
      })
    }.bind(this))
  }

  render() {

    if (this.state === null) {
      return (
        <div>
          <ProfileNav />
          Loading
        </div>
      )
    }
    else {
      var childrenWithProps = React.cloneElement(this.props.children,
        {
          name:this.state.name,
          email:this.state.email,
          firstName:this.state.firstName,
          lastName:this.state.lastName,
          image:this.state.image
        }
      );
      return (
        <div>
          <ProfileNav />
          {childrenWithProps}
        </div>
      )
    }

  }
}
