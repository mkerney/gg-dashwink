import React, { Component } from 'react'
import {Grid, Button, Row, Col, Thumbnail} from 'react-bootstrap'
import Winks from '../Winks/Winks'
import axios from 'axios'
import { LinkContainer } from 'react-router-bootstrap'
import SubSort from '../SortBar/SubSort'
export default class Women extends Component {
  constructor () {
    super()
    this.state=({products:null, condition:false});
  }

  componentDidMount() {
    axios.get('https://api.dashwink.tech/products')
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
            <Col md={2}>
              <LinkContainer to="/women/tops">
                <Button>Tops</Button>
              </LinkContainer>
            </Col>
            <Col md={2}><Button>Bottoms</Button></Col>
            <Col md={2}><Button>Dresses</Button></Col>
            <Col md={2}><Button>Outerwear</Button></Col>
            <Col md={2}><Button>Accessories</Button></Col>
            <Col md={2}><Button>Shoes</Button></Col>
          </Row>
          <div  className={this.state.condition ? "item-wrapper all-item sidebar-open" :"item-wrapper all-item"}>
            <Row>
              <Col lg={2} md={3}><SubSort /></Col>
              <Col xs={12} md={9} lg={10} className="item-content">
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
                <div>No products yet</div>
              </Col>
            </Row>
          </div>
        </Grid>
      )
    }
  }
}
