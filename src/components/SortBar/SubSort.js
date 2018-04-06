import React, { Component } from 'react'
import {Row, Col, Button, Panel} from 'react-bootstrap'
export default class SubSort extends Component {
  constructor() {
    super()
    this.state ={
      active: true
    }
  }

  render() {
    return (
      <div>
        <div className="custom-check">
          <label className="checkbox-inline">
            <input type="radio"  name="radio" value=""/>
            <span>
              <i className="fa fa-check"></i>
            </span> XXS
          </label>
        </div>
        <div className="custom-check">
          <label className="checkbox-inline">
            <input type="radio" name="radio" value=""/>
            <span>
              <i className="fa fa-check"></i>
            </span> XS
          </label>
        </div>
        <div className="custom-check">
          <label className="checkbox-inline">
            <input type="radio" name="radio" value=""/>
            <span>
              <i className="fa fa-check"></i>
            </span> S
          </label>
        </div>
        <div className="custom-check">
          <label className="checkbox-inline">
            <input type="radio" name="radio" value=""/>
            <span>
              <i className="fa fa-check"></i>
            </span> M
          </label>
        </div>
        <div className="custom-check">
          <label className="checkbox-inline">
            <input type="radio" name="radio" value=""/>
            <span>
              <i className="fa fa-check"></i>
            </span> L
          </label>
        </div>
        <div className="custom-check">
          <label className="checkbox-inline">
            <input type="radio" name="radio" value=""/>
            <span>
              <i className="fa fa-check"></i>
            </span> XL
          </label>
        </div>
        <div className="custom-check">
          <label className="checkbox-inline">
            <input type="radio" name="radio" value=""/>
            <span>
              <i className="fa fa-check"></i>
            </span> XXL
          </label>
        </div>
        <div className="custom-check">
          <label className="checkbox-inline">
            <input type="radio" name="radio" value=""/>
            <span>
              <i className="fa fa-check"></i>
            </span> 0
          </label>
        </div>
        <div className="custom-check">
          <label className="checkbox-inline">
            <input type="radio" name="radio" value=""/>
            <span>
              <i className="fa fa-check"></i>
            </span> 1
          </label>
        </div>
        <div className="custom-check">
          <a href="javascript:void(0);">clear</a>
        </div>
      </div>
    )
  }
}
