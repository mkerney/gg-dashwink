import React, { Component } from 'react';
// import LoginModal from './modals/LoginModal'
import AuthModal from './modals/AuthModal'
import axios from 'axios';
import { Nav, NavItem, Navbar, NavDropdown, MenuItem  } from 'react-bootstrap'
import cookie from 'react-cookie';
import { LinkContainer } from 'react-router-bootstrap'
export default class MyNavbar extends Component {

  constructor() {
    super();
    this.state = {
      name: null,
      signedIn: false,
      modalOn: false,
      whichModal: null
    }


  }
  componentDidMount () {
    if (cookie.load('user')){
      var user = cookie.load('user')
      this.setState({name:user.name, signedIn:true})
    }
    else {
      this.setState({signedIn:false})
    }
  }
  login(email, password) {
    axios.post('https://api.dashwink.tech/sessions', {
      email: email,
      password: password
    })
    .then(function (response) {
      console.log (response)
      var userName = response.data.data.attributes['first-name'] + ' ' + response.data.data.attributes['last-name']
      var userInfo = {id: response.data.data.id, token: response.data.data.attributes['auth-token'], name: userName}
      cookie.save('user', userInfo , {path:'/'});
      this.setState({
        name: userName,
        modalOn :false,
        signedIn : true
      })
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    });
  }
  handleToggleModal(modalChoose) {
    this.setState({
      modalOn: true,
      whichModal: modalChoose
    })
    console.log(this.state)
  }

  handleCloseModal() {
    this.setState({ modalOn: false })
  }

  render() {

    return (
      <div>
        <Navbar inverse className="navbar-wrapper">
          <Navbar.Header>
            <Navbar.Brand>
              <LinkContainer to="/">
                <a href="#"><span className="dashwink-txt">DASHWINK</span></a>
              </LinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav className="navleft">
              <LinkContainer to="/items">
                <NavItem>Shop <i className="fa fa-home"></i></NavItem>
              </LinkContainer>
              <LinkContainer to="/new_items">
                <NavItem>Explore <i className="fa fa-compass"></i></NavItem>
              </LinkContainer>
              <LinkContainer to="sale_alert"> 
                <NavItem>Alerts <i className="fa fa-bell-o"></i></NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight className="navright">
              <LinkContainer to="/style_game">
                <NavItem>Style Game</NavItem>
              </LinkContainer>
              <NavItem>Editor's Blog</NavItem>
              <LinkContainer to="/myprofile"><NavItem className={this.state.signedIn ? '' : 'hidden'}>{this.state.name}</NavItem></LinkContainer>
              <NavItem onClick={() => this.handleToggleModal('login')} className={this.state.signedIn ? 'hidden' : ''}>Login</NavItem>
              <NavItem onClick={() => this.handleToggleModal('signup')} className={this.state.signedIn ? 'hidden' : ''}>Sign Up</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <AuthModal login={this.login.bind(this)} show={this.state.modalOn} closeModal={() => this.handleCloseModal()} checkModal={(modalChoose) => this.handleToggleModal(modalChoose)} whichModal={this.state.whichModal} />
      </div>
    );
  }
}
