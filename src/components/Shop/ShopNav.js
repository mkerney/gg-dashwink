import React, { Component } from 'react'
import { Nav, NavItem, Navbar,   } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class ShopNav extends Component {
  render() {
    return (
      <Navbar className="category-nav item-nav">
       <Nav>
        <LinkContainer to="/items"><NavItem bsClass="whitebg" eventKey={1} >All Items</NavItem></LinkContainer>
        <LinkContainer to="/my_winks"><NavItem eventKey={1} >Your Winks</NavItem></LinkContainer>
        <LinkContainer to="javascript:void(0);"><NavItem eventKey={1} >Your Collections</NavItem></LinkContainer>
        {/*<LinkContainer to="/collections"><NavItem eventKey={1} >Your Collections</NavItem></LinkContainer>*/}
        <LinkContainer to="/for_you"><NavItem eventKey={1} >Just For You</NavItem></LinkContainer>
        <NavItem><input className="form-control" placeholder="Search all products"></input></NavItem>
       </Nav>
     </Navbar>
    )
  }
}
