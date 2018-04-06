import React, { Component } from 'react'
import {Row, Col, Button, Panel} from 'react-bootstrap'
export default class Size extends Component {
  constructor() {
    super()
    this.state ={
      active: true
    }
  }

  render() {

    return (
      <div>
        <Button onClick={ ()=> this.setState({ open: !this.state.open })}>
            Size <i className="fa fa-angle-down"></i>
        </Button>
        <Panel collapsible expanded={this.state.open}>
          <div className="custom-radio">
            <label className="radio-inline">
              <input type="radio"  name="radio" value=""/>
              <span>
                <i className="fa fa-check"></i>
              </span> XXS
            </label>
          </div>
          <div className="custom-radio">
            <label className="radio-inline">
              <input type="radio"  name="radio" value=""/>
              <span>
                <i className="fa fa-check"></i>
              </span> XS
            </label>
          </div>
          <div className="custom-radio">
            <label className="radio-inline">
              <input type="radio"  name="radio" value=""/>
              <span>
                <i className="fa fa-check"></i>
              </span> S
            </label>
          </div>
          <div className="custom-radio">
            <label className="radio-inline">
              <input type="radio"  name="radio" value=""/>
              <span>
                <i className="fa fa-check"></i>
              </span> M
            </label>
          </div>
          <div className="custom-radio">
            <label className="radio-inline">
              <input type="radio"  name="radio" value=""/>
              <span>
                <i className="fa fa-check"></i>
              </span> L
            </label>
          </div>
          <div className="custom-radio">
            <label className="radio-inline">
              <input type="radio"  name="radio" value=""/>
              <span>
                <i className="fa fa-check"></i>
              </span> XL
            </label>
          </div>
          <div className="custom-radio">
            <label className="radio-inline">
              <input type="radio"  name="radio" value=""/>
              <span>
                <i className="fa fa-check"></i>
              </span> XXL
            </label>
          </div>
          <div className="custom-radio">
            <label className="radio-inline">
              <input type="radio"  name="radio" value=""/>
              <span>
                <i className="fa fa-check"></i>
              </span> 0
            </label>
          </div>
          <div className="custom-radio">
            <label className="radio-inline">
              <input type="radio"  name="radio" value=""/>
              <span>
                <i className="fa fa-check"></i>
              </span> 1
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
