import React, { Component } from 'react'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router'
import Rating from 'react-rating'
import Winks from '../Winks/Winks'

export default class StyleResult extends Component {
  constructor () {
    super()
    this.state=({products:null})
  }

  componentWillMount() {
    axios.get('https://api.dashwink.tech/products?page[size]=5')
    .then(function (response) {
      console.log('yoshi')
      this.setState({products:response.data.data})
    }.bind(this))
  }

  render () {
    var jsx;
    if(this.state.products === null) {
      return jsx =
      <Grid container-fluid>
        <Row>
          <h1 className="text-center">Your style is casual</h1>
        </Row>
        <Row>
          <Col md={3} mdOffset={3}><img className="img-responsive" src="assets/y.png"></img></Col>
          <Col md={3}>
            <p>Organic pork belly selfies activated charcoal tattooed, marfa tacos butcher viral wayfarers listicle gentrify fashion axe prism cold-pressed. Green juice craft beer twee, dreamcatcher kale chips food truck prism iPhone franzen. Shabby chic asymmetrical cronut.</p>
            <a><i className="fa fa-facebook"></i></a>
            <a><i className="fa fa-pinterest"></i></a>
            <a><i className="fa fa-instagram"></i></a>
            <a><i className="fa fa-twitter"></i></a>
            <br></br>
            <span>How Well did we rate you?</span>
            <br></br>
            <Rating empty="fa fa-star-o fa-3x"  full="fa fa-star fa-3x"/>
          </Col>
        </Row>
        <Row className='item-row'>
          <div className="item"></div>
        </Row>
      </Grid>
    }
    else {
      return jsx =
      <Grid container-fluid>
        <Row>
          <h1 className="text-center">Your style is casual</h1>
        </Row>
        <Row>
          <Col md={3} mdOffset={3}><img className="img-responsive" src="assets/y.png"></img></Col>
          <Col md={3}>
            <p>Organic pork belly selfies activated charcoal tattooed, marfa tacos butcher viral wayfarers listicle gentrify fashion axe prism cold-pressed. Green juice craft beer twee, dreamcatcher kale chips food truck prism iPhone franzen. Shabby chic asymmetrical cronut.</p>
            <a><i className="fa fa-facebook"></i></a>
            <a><i className="fa fa-pinterest"></i></a>
            <a><i className="fa fa-instagram"></i></a>
            <a><i className="fa fa-twitter"></i></a>
            <br></br>
            <span>How Well did we rate you?</span>
            <br></br>
            <Rating empty="fa fa-star-o fa-3x"  full="fa fa-star fa-3x"/>
          </Col>
        </Row>
        <Row className='item-row'>
          <Col mdOffset={1} className="item">
            <Winks products={this.state.products}/>
           </Col>
        </Row>
        <Row className='text-center'><Link to="/for_you"><Button> See More</Button></Link></Row>
      </Grid>
    }
    return (
      <div>
        {jsx}
      </div>
    )
  }
}
