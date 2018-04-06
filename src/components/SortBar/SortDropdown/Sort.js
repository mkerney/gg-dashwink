import React, { Component } from 'react'
import {Row, Col, Button, Panel} from 'react-bootstrap'

export default class Sort extends Component {
  constructor(props) {
    super(props)
    this.state ={
      active: false,
      icon: "fa fa-angle-down",
      hidden: "hidden"
    }
  }

  render() {
    return (
      <div>
        <Button onClick={ ()=> this.setState({ open: !this.state.open })}>
          Sort <i className="fa fa-angle-down"></i>
        </Button>
        <Panel collapsible expanded={this.state.open}>
          <div className="custom-radio">
            <label className="radio-inline">
              <input type="radio"  name="radio" onClick={()=>{this.props.sortProducts('price', 'asc')}} value="asc"/>
              <span>
                <i className="fa fa-check" ></i>
              </span> Price: Low to High
            </label>
          </div>
          <div className="custom-radio">
            <label className="radio-inline">
              <input type="radio"  name="radio" onClick={()=>{this.props.sortProducts('price', 'desc')}} value="desc"/>
              <span>
                <i className="fa fa-check"></i>
              </span> Price: High to Low
            </label>
          </div>
          <div className="custom-radio">
            <label className="radio-inline">
              <input type="radio"  name="radio" onClick={()=>{this.props.sortProducts('created_at', 'desc')}} value=""/>
              <span>
                <i className="fa fa-check"></i>
              </span> Newest
            </label>
          </div>
          <div className="custom-radio">
            <a href="javascript:void(0);">clear</a>
          </div>
        </Panel>
      </div>
    )
  }
}
