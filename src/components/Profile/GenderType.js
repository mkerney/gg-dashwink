import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import cookie from 'react-cookie'

export default class GenderType extends Component {
  constructor () {
    super()
    this.state=({user:cookie.load('user')})
    this.httpHandler = axios.create({
      baseURL: 'https://api.dashwink.tech',
      headers: {
        'Authorization': this.state.user.token
      }
    })
  }
  selectGender () {
    this.httpHandler.put('/users/' + this.state.user.id, {
      user: {
        product_type: e.target.value
      }
    })
    .then(function(response) {
      console.log (response)
      return response
    })
  }
  render () {
    return (
      <Grid className="text-center profile-body">
        <div className="product-type-wrapper">
          <h2>Product Type</h2>
          <div className="custom-radio">
            <label className="radio-inline">
              <input onClick={this.selectGender.bind(this)} type="radio" name="genderType" value="women"/>
              <span>
                <i className="fa fa-check"></i>
              </span> Women
            </label>
          </div>
          <div className="custom-radio">
            <label className="radio-inline">
              <input onClick={this.selectGender.bind(this)} type="radio" name="genderType" value="men"/>
              <span>
                <i className="fa fa-check"></i>
              </span> Men
            </label>
          </div>
        </div>
      </Grid>
    )
  }
}
