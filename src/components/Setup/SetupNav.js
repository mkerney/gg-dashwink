import React, { Component } from 'react'
import { Nav, NavItem, Navbar, NavDropdown, MenuItem  } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'





export default class SetupNav extends Component {

  render() {
    return (
      <Navbar className="category-nav">
       <Nav className="nav-justified">
        <LinkContainer to="/gender"><NavItem eventKey={1} >Gender</NavItem></LinkContainer>
        <LinkContainer to="/style"><NavItem eventKey={1} >Style</NavItem></LinkContainer>
        <LinkContainer to="/category"><NavItem eventKey={1} >Category</NavItem></LinkContainer>
        <LinkContainer to="/brands"><NavItem eventKey={1} >Brands</NavItem></LinkContainer>
        <LinkContainer to="/size"><NavItem eventKey={1} >Sizes</NavItem></LinkContainer>
        <LinkContainer to="/myprofile"><NavItem eventKey={1} >Profile</NavItem></LinkContainer>
       </Nav>
     </Navbar>
    )
  }
}
