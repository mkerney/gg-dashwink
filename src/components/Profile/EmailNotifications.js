import React , { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

// return (
  // <Grid className="text-center">
  //   <div className="product-type-wrapper">
  //     <h2>Product Type</h2>
  //     <div className="custom-checkbox">
  //       <label className="radio-inline">
  //         <input onClick={this.selectGender.bind(this)} type="checkbox" name="genderType" value="women"/>
  //         <span>
  //           <i className="fa fa-check"></i>
  //         </span> Women
  //       </label>
  //     </div>
  //     <div className="custom-radio">
  //       <label className="radio-inline">
  //         <input onClick={this.selectGender.bind(this)} type="radio" name="genderType" value="men"/>
  //         <span>
  //           <i className="fa fa-check"></i>
  //         </span> Men
  //       </label>
  //     </div>
  //   </div>
  // </Grid>

export default class EmailNotifications extends Component {
  render () {
    return (
      <Grid className="text-center profile-body">
        <div className="product-type-wrapper">
          <h2> Email Notifications</h2>
          <div className="custom-check">
            <label className="checkbox-inline">
              <input type="checkbox"/>
              <span>
                <i className="fa fa-check"></i>
              </span> Sale Alerts
            </label>
          </div>
          <div className="custom-check">
            <label className="checkbox-inline">
              <input type="checkbox"/>
              <span>
                <i className="fa fa-check"></i>
              </span> Product Referrals
            </label>
          </div>
          <div className="custom-check">
            <label className="checkbox-inline">
              <input type="checkbox"/>
              <span>
                <i className="fa fa-check"></i>
              </span> Limited News
            </label>
          </div>
          <div className="custom-check">
            <label className="checkbox-inline">
              <input type="checkbox"/>
              <span>
                <i className="fa fa-check"></i>
              </span> News
            </label>
          </div>
        </div>
      </Grid>

    )
  }
}
