import React , { Component } from 'react'
import { Grid, Row, Col, Button, Modal } from 'react-bootstrap'
import Wink from './Wink'
import axios from 'axios'
import cookie from 'react-cookie'

export default class Winks extends Component {
  constructor (props) {
    super(props)
    this.insertDecimal = this.insertDecimal.bind(this)
    this.state=({showModal:false})
  }

  insertDecimal(num) {
     var num = (num / 100).toFixed(2);
     return '$' + num
  }
 claimWink (itemId) {
   this.httpHandler.post("/users/" + this.state.user.id + "/winks", {
         user_id:this.state.user.id,
         wink: {
           product_id:itemId
         }
      }).then(function (winkResponse){
        this.httpHandler.get("/products")
       //  getting all products jsut to update wink count, maybe have a custom api call jsut for wink count?
        .then(function (productResponse){
          this.setState({products:productResponse.data.data})
        }.bind(this))
      }.bind(this))
      this.setState({heart:!this.state.heart})
 }

  render () {
    if (!this.props.products) {
      return(
        <Col lg={2} md={4} sm={4} xs={6}>
          Loading
        </Col>
      )
    }
    else {
      var listItems = this.props.products.map(function(item, index,) {
        var product = item.attributes
        return (
          <Col lg={2} md={4} sm={4} xs={6}>
            <div className="item">
              <Wink product={item} insertDecimal={this.insertDecimal.bind(this)}/>
              <div className="item-meta">
                <span className="name" >{product.name}</span>
                <span className="site"> Bloomingdales.com</span>
                <div className="rate">
                  <span className="old">{this.insertDecimal(product.price)}</span>
                  <span className="new">{this.insertDecimal(product["sale-price"])}</span>
                </div>
                <div className="like">
                  {this.state.heart === true ?
                    <i onClick={()=>this.claimWink(item.id)} className="fa fa-heart"></i>
                    :<i onClick={()=>this.claimWink(item.id)} className="fa fa-heart-o"></i>}
                  <span>{product["winks-count"]}</span>
                </div>
              </div>
            </div>
          </Col>
        )
      }.bind(this));
    }

    return (
        <Row className="item-row">
          {listItems}
        </Row>
    )
  }
}
