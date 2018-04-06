import React , {Component} from 'react'
import {Grid, Button, Row, Col, Thumbnail} from 'react-bootstrap'

import Sort from './SortDropdown/Sort'
import Category from './SortDropdown/Category'
import Price from './SortDropdown/Price'
import Size from './SortDropdown/Size'
import Color from './SortDropdown/Color'
import Brand from './SortDropdown/Brand'
import Stores from './SortDropdown/Stores'

export default class SortBar extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <Col xs={3} md={3} lg={2}  className="item-sidebar-wrapper">
        <div>
          <Button className="btn-toggle-sidebar" onClick={this.handleClick}>
            <span className="fa fa-bars"></span>
          </Button>
          <div className="sort">
            <Sort sortProducts={this.props.sortProducts.bind(this)}/>
          </div>
          <div className="category">
            <Category filterCategories={this.props.filterCategories.bind(this)}/>
          </div>
          <div className="price">
            <Price filterPrice={this.props.filterPrice.bind(this)} />
          </div>
          <div className="size">
            <Size />
          </div>
          <div className="color">
            <Color />
          </div>
          <div className="brand">
            <Brand />
          </div>
          <div className="stores">
            <Stores />
          </div>
        </div>
      </Col>
    )
  }
}
