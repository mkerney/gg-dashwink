import React, { Component } from 'react';
import {  Col, FormGroup } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


export default class ProfileDetails extends Component {
  constructor (props) {
    super(props)
    console.log(this.props)
    this.state = ({
      name: 'sdf',
      email: "jane@gmail.com",
      password: "password"
    })
  }
  handleChangeName (e) {
    this.setState({name:e.target.value})
    console.log(e.target.value)
  }
  handleChangeEmail (e) {
    this.setState({email:e.target.value})
    console.log(e.target.value)
  }
  handleChangePassword (e) {
    this.setState({password:e.target.value})
    console.log(e.target.value)
  }
  render() {
    if (this.props.edit === 'true') {
      return (
        <div className="profile-editform ">
          <FormGroup >
            <input className="form-control" onChange={this.handleChangeName.bind(this)} type="text" value={this.state.name}/>
          </FormGroup>
          <FormGroup >
            <input className="form-control" onChange={this.handleChangeEmail.bind(this)} type="email" value={this.state.email}/>
          </FormGroup>
          <FormGroup >
            <input className="form-control" onChange={this.handleChangePassword.bind(this)} type="password" value={this.state.password}/>
          </FormGroup>
        </div>
      );
    }

    else {
      return (
        <div className="profile-details">
          <FormGroup >
            <input className="form-control" disabled type="text" value={this.state.name}/>
          </FormGroup>
          <FormGroup >
            <input className="form-control" disabled type="email" value={this.state.email}/>
          </FormGroup>
          <FormGroup >
            <input className="form-control" disabled type="password" value={this.state.password}/>
          </FormGroup>
        </div>
      );
    }


  }
}
