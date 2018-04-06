import React, { Component } from 'react'
import { Nav, NavItem, Navbar,   } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


export default class AlertNav extends Component {
  render () {
    return (
      <Navbar className="category-nav item-nav">
       <Nav>
        <LinkContainer to="/sale_alert"><NavItem eventKey={1} >Sale Alerts</NavItem></LinkContainer>
        <LinkContainer to="/created_alert"><NavItem eventKey={1} >Created Alerts</NavItem></LinkContainer>

        <NavItem><input className="form-control" placeholder="Search all products"></input></NavItem>
       </Nav>
     </Navbar>
    )
  }
}
