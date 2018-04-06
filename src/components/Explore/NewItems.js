import React, { Component } from 'react'
import {Grid, Button, Row, Col, Thumbnail} from 'react-bootstrap'
import Winks from '../Winks/Winks'
import axios from 'axios'
export default class NewItems extends Component {
  constructor () {
    super()
    this.state=({products:null, condition:false});
  }

  componentDidMount() {
    var sortType = 'created_at'
    var sortOrder = 'desc'
    axios.get('https://api.dashwink.tech/products?page[sort_field]=' + sortType + '&page[sort_order]='+ sortOrder)
    .then(function (response) {
      console.log(response)
      this.setState({products:response.data.data})
    }.bind(this))
  }

  render() {
    if (this.state.products !== null) {
      return (
        <Grid>
          <Row className="hidden-sm hidden-xs">
            <h1 className="text-center item-title">New Arrivals</h1>
          </Row>
          <div  className={this.state.condition ? "item-wrapper all-item sidebar-open" :"item-wrapper all-item"}>
            <Row>

              <Col xs={12} md={9} lg={10} className="item-content">
                <h1 className="text-center item-title visible-sm visible-xs">New Arrivals</h1>
                <Winks products={this.state.products} />
              </Col>
            </Row>
          </div>
        </Grid>
      )
    } else {
      return (
        <Grid>
          <div className={this.state.condition ? "item-wrapper all-item sidebar-open" :"item-wrapper all-item"}>
            <Row className="hidden-sm hidden-xs">
              <h1 className="text-center">New Arrivals</h1>
            </Row>
            <Row>
              <Col xs={12} md={9} lg={10} className="item-content">
                <h1 className="text-center item-title visible-sm visible-xs">New Arrivals</h1>
                <div>No winks yet</div>
              </Col>
            </Row>
          </div>
        </Grid>
      )
    }

  }
}
