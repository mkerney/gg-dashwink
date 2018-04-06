import React, { Component } from 'react'
import { Nav, NavItem, Navbar,   } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class ExploreNav extends Component {
  render() {
    return (
      <Navbar className="category-nav item-nav">
       <Nav>
        <LinkContainer to="/new_items"><NavItem eventKey={1} >New Arrivals</NavItem></LinkContainer>
        <LinkContainer to="/trending"><NavItem eventKey={1} >Trending</NavItem></LinkContainer>
        <LinkContainer to="/on_sale"><NavItem eventKey={1} >On Sale</NavItem></LinkContainer>
        <LinkContainer to="/top_picks"><NavItem eventKey={1} >Top Picks</NavItem></LinkContainer>
        <LinkContainer to="/women"><NavItem eventKey={1} >Women</NavItem></LinkContainer>
        <LinkContainer to="/men"><NavItem eventKey={1} >Men</NavItem></LinkContainer>
        <NavItem><input className="form-control" placeholder="Search all products"></input></NavItem>
       </Nav>
     </Navbar>
    )
  }
}
