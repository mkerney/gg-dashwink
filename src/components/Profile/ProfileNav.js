import React, { Component } from 'react';
import { Nav, NavItem, Navbar, DropdownButton, MenuItem, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import axios from 'axios'
import cookie from 'react-cookie'

import Logout from  '../Auth/Logout'
export default class UserProfile extends Component {
  constructor () {
    super()
    this.state=({gender:null})
  }
  componentDidMount() {
    var user = cookie.load('user')
    axios.get('https://api.dashwink.tech/users/' + user.id)
    .then(function (response) {
      console.log(response.data.data.attributes["product-type"])
      var gender = response.data.data.attributes["product-type"]
      var upperCase = gender[0].toUpperCase()
      var restOfString = gender.slice(1,(gender.length))
      var gender = upperCase.concat(restOfString)
      this.setState({gender:gender})
    }.bind(this))
  }

  render() {
    // if(this.state.gender === null) {
    //   var gender = " "
    // }
    // else {
    //   var gender = this.state.gender
    //
    // }
    return (
      <Navbar className="item-nav profile-nav">
       <Nav>
        <LinkContainer to="/myprofile"><NavItem bsClass="whiteunderline" eventKey={1} >Profile</NavItem></LinkContainer>
        <NavDropdown id="ProfileDropdown" title="Settings">
            {/*Need redux for gender state*/}
            <LinkContainer to="/gender_type">
              <MenuItem >Product Type: {this.state.gender}</MenuItem>
            </LinkContainer>
            <LinkContainer to="/gender">
              <MenuItem >Style Survey</MenuItem>
            </LinkContainer>
            <LinkContainer to="/email_notifications">
              <MenuItem >Notifications</MenuItem>
            </LinkContainer>
            <MenuItem >Feedback</MenuItem>
            <MenuItem >Contact Us</MenuItem>
            <LinkContainer to="/faq">
              <MenuItem >FAQ</MenuItem>
            </LinkContainer>
            <LinkContainer to="/privacy_policy">
              <MenuItem >Privacy Policy</MenuItem>
            </LinkContainer>
            <LinkContainer to="/terms_service">
              <MenuItem >Terms of Service</MenuItem>
            </LinkContainer>
            <LinkContainer to="/">
              <Logout />
            </LinkContainer>
        </NavDropdown>
       </Nav>
     </Navbar>
    );
  }
}
