import React, { Component } from 'react'
import {Grid, Button, Row, Col, Thumbnail} from 'react-bootstrap'
export default class Trending extends Component {
  constructor (props) {
    super(props)
    this.state ={
      items: [
        { name: "The Kooples - white top", count:1, src: "assets/male.png" },
        { name: "Sandro-Orange Zipper",   count: 2, src: "assets/female.png" },
        { name: "Sandro-Orange Zipper",   count: 2, src: "assets/female.png" },
        { name: "Sandro-Orange Zipper",   count: 2, src: "assets/male.png" },
        { name: "Sandro-Orange Zipper",   count: 2, src: "assets/female.png" },
        { name: "The Kooples - dress",   count:1, src: "assets/male.png" },
        { name: "The Kooples - dress",   count:1, src: "assets/male.png" },
        { name: "The Kooples - dress",   count:1, src: "assets/female.png" },
        { name: "The Kooples - dress",   count:1, src: "assets/male.png" },
        { name: "The Kooples - dress",   count:1, src: "assets/male.png" },
        { name: "The Kooples - dress",   count:1, src: "assets/female.png" },
        { name: "The Kooples - dress",   count:1, src: "assets/male.png" },
        { name: "The Kooples - dress",   count:1, src: "assets/female.png" },
        { name: "The Kooples - dress",   count:1, src: "assets/male.png" },
        { name: "The Kooples - dress",   count:1, src: "assets/female.png" },
      ]
    }
  }

  render() {
    var collections = this.state.items.map(function(item, index) {
      return (
        <Col lg={4} md={4} sm={4} xs={6}>
          <div className="item">
            <img className='img-responsive' src={item.src}></img>
            <div className="item-meta">
              <span className="name">{item.name}</span>
              <span className="site"> Bloomingdales.com</span>
              <div className="rate">
                <span className="old">150$</span>
                <span className="new">75$</span>
              </div>
              <div className="like">
                <i className="fa fa-heart"></i>
                <span>12</span>
              </div>
            </div>
          </div>
        </Col>
      )

    });
    return (

      <Grid>
        <div className="item-wrapper">
          <Row>
            <h1 className="text-center">Trending</h1>
          </Row>
          <Row className="item-row">
            <Col md={12}>
              <Row>
                {collections}
              </Row>
            </Col>
          </Row>
        </div>
      </Grid>
    )
  }
}
