import React, { Component } from 'react'
import { DropdownButton, Button, MenuItem, Panel } from 'react-bootstrap'
export default class Price extends Component {
  constructor(props) {
    super(props)
    this.state ={
      active: true
    }
  }
  render() {

    return (
      <div>
        <Button onClick={ ()=> this.setState({ open: !this.state.open })}>
            Price <i className="fa fa-angle-down"></i>
        </Button>
        <Panel collapsible expanded={this.state.open}>
          <div className="custom-radio">
            <label className="radio-inline">
              <input type="radio"  name="radio" onClick={()=>{this.props.filterPrice(0,2500)}} value=""/>
              <span>
                <i className="fa fa-check"></i>
              </span> On Sale
            </label>
          </div>
          <div className="custom-radio">
            <label className="radio-inline">
              <input type="radio" onClick={()=>{this.props.filterPrice(2500,10000)}}  name="radio" value=""/>
              <span>
                <i className="fa fa-check"></i>
              </span> $25-100
            </label>
          </div>
          <div className="custom-radio">
            <label className="radio-inline">
              <input type="radio"  onClick={()=>{this.props.filterPrice(10000,20000)}} name="radio" value=""/>
              <span>
                <i className="fa fa-check"></i>
              </span> $100-$200
            </label>
          </div>
          <div className="custom-radio">
            <label className="radio-inline">
              <input type="radio" onClick={()=>{this.props.filterPrice(50000, 99999999)}}  name="radio" value=""/>
              <span>
                <i className="fa fa-check"></i>
              </span> $500+
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
