import React, { Component } from 'react';
import { Grid, FormGroup, Row, Col, Image, Input  } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router'
import GoogleAuth from '../Auth/GoogleAuth'
import FacebookAuth from '../Auth/FacebookAuth'


import ProfileDetails from './ProfileDetails'


export default class MyProfile extends Component {
  constructor (props) {
    super (props)
    // console.log(this.props)
    // console.log('sdfs')
  }

  render() {
    return (
      <Grid className='text-center profile-body'>
        <div className="myprofile-wrapper">
          <h2> Your Profile </h2>
          <div className="profile-image">
            <Image circle responsive thumbnails src={this.props.image}></Image>
          </div>
          <div className="text-right">
            <Link className="btn-profile-edit" to="/editprofile">Edit Profile</Link>
          </div>
          <div className="profile-details-wrapper">
            <div className="profile-details">
              <FormGroup >
                <input className="form-control" disabled type="text" value={this.props.name}/>
              </FormGroup>
              <FormGroup >
                <input className="form-control" disabled type="email" value={this.props.email}/>
              </FormGroup>
              <FormGroup >
                <input className="form-control" disabled type="password" placeholder="Password"/>
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
        </div>
      </Grid>
    );
  }
}
