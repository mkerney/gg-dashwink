import React, { Component } from 'react'
import {Grid, Button, Row, Col, Thumbnail} from 'react-bootstrap'
import Winks from '../Winks/Winks'
import axios from 'axios'

import SortBar from '../SortBar/SortBar'

export default class TopPicks extends Component {
  constructor () {
    super()
    this.state=({products:null, condition:false});
  }
  sortProducts (sortType, sortOrder) {
    axios.get('https://api.dashwink.tech/products?page[sort_field]=' + sortType + '&page[sort_order]='+ sortOrder)
    .then(function (response) {
      this.setState({products:response.data.data})
    }.bind(this))
  }

  filterCategories (category_id) {
    axios.get('https://api.dashwink.tech/products?filter[category_ids]=' + categories)
    .then(function (response) {
      this.setState({products:response.data.data})
    }.bind(this))
  }

  filterPrice (priceLow, priceHigh) {
    axios.get('https://api.dashwink.tech/products?filter[price_low]=' + priceLow + '&filter[price_high]=' + priceHigh+ '&page[sort_order]=asc')
    .then(function (response) {
      this.setState({products:response.data.data})
    }.bind(this))
  }

  componentDidMount() {
    var sortType = 'sku'
    var sortOrder = 'desc'
    axios.get('https://api.dashwink.tech/products?page[sort_field]=' + sortType + '&page[sort_order]='+ sortOrder)    .then(function (response) {
      this.setState({products:response.data.data})
    }.bind(this))
  }

  render() {
    if (this.state.products !== null) {
      return (
        <Grid>
          <Row className="hidden-sm hidden-xs">
            <h1 className="text-center item-title">Top Picks</h1>
          </Row>
          <div  className={this.state.condition ? "item-wrapper all-item sidebar-open" :"item-wrapper all-item"}>
            <Row>
              <SortBar
                sortProducts ={this.sortProducts.bind(this)}
                filterPrice={this.filterPrice.bind(this)}
                filterCategories={this.filterCategories.bind(this)} />
              <Col xs={12} md={9} lg={10} className="item-content">
                <h1 className="text-center item-title visible-sm visible-xs">Top Picks</h1>
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
              <h1 className="text-center">Top Picks</h1>
            </Row>
            <Row>
              <Col xs={12} md={9} lg={10} className="item-content">
                <h1 className="text-center item-title visible-sm visible-xs">Top Picks</h1>
                <div>No products yet</div>
              </Col>
            </Row>
          </div>
        </Grid>
      )
    }
  }
}
