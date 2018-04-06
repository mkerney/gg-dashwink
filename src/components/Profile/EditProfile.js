import React, { Component } from 'react';
import { Grid, Row, FormGroup, Col, Image, Input, Button  } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router'
import axios from 'axios'
import cookie from 'react-cookie'
import GoogleAuth from '../Auth/GoogleAuth'
import FacebookAuth from '../Auth/FacebookAuth'

import ProfileDetails from './ProfileDetails'
export default class EditProfile extends Component {
  constructor (props) {
    super(props)
    console.log(props)
    this.state = ({
      name:this.props.name,
      email:this.props.email,
      firstName:this.props.firstName,
      lastName:this.props.lastName,
      password:'',
      user:cookie.load('user')
    })
    console.log(this.state)

    this.httpHandler = axios.create({
      baseURL: 'https://api.dashwink.tech',
      headers: {
        'Authorization':this.state.user.token
      }
    })
  }
  componentDidMount () {
    this.setState({
      name:this.props.name,
      email:this.props.email,
      firstName:this.props.firstName,
      lastName:this.props.lastName,
      password:'',
    })
  }

  updateInfo () {
    var firstName = this.state.firstName
    var lastName = this.state.lastName
    var email = this.state.email
    var password = this.state.password
    this.httpHandler.put("users/" + this.state.user.id + "?user[first-name]=" + firstName + "&user[last-name]=" + lastName + "&user[email]=" + email + "&user[password]=" + password)
    .then(function (response) {
      console.log(response)
    })
  }
  handleChangeFirst (e) {
    this.setState({firstName:e.target.value})
    console.log(e.target.value)
  }
  handleChangeLast (e) {
    this.setState({lastName:e.target.value})
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
    return (
      <Grid className='text-center profile-body'>
        <div className="myprofile-wrapper">
          <h2> Edit Profile </h2>
          <div className="profile-image">
          <Image circle responsive thumbnails src={this.props.image}></Image>
              <a href="javascript:void(0);" className="btn-profile-edit">Upload a Photo</a>
          </div>
          <div className="profile-details-wrapper">
            <div className="profile-editform">
              <FormGroup >
                <input className="form-control" onChange={this.handleChangeFirst.bind(this)} type="text" value={this.state.firstName}/>
              </FormGroup>
              <FormGroup >
                <input className="form-control" onChange={this.handleChangeLast.bind(this)} type="text" value={this.state.lastName}/>
              </FormGroup>
              <FormGroup >
                <input className="form-control" onChange={this.handleChangeEmail.bind(this)} type="email" value={this.state.email}/>
              </FormGroup>
              <FormGroup >
                <input className="form-control" onChange={this.handleChangePassword.bind(this)} type="password" value={this.state.password} placeholder="Password"/>
              </FormGroup>
            </div>
          </div>
          <div className="btn-wrapper">
            <div className="facebook-import">
              <FacebookAuth />
            </div>
            <div className="google-import">
              <GoogleAuth />
            </div>
          </div>
          <div className="btn-profile-save text-right">
            <Link className="btn btn-default btn-cancel" to="/myprofile">Cancel</Link>
            <Button  onClick={this.updateInfo.bind(this)} className="btn-save">Save Changes</Button>
          </div>
        </div>
      </Grid>
    );
  }
}
