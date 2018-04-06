import React, { Component } from 'react'
import { Input,DropdownButton, Button, MenuItem, Panel } from 'react-bootstrap'


export default class Color extends Component {
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
          Color <i className="fa fa-angle-down"></i>
        </Button>
        <Panel collapsible expanded={this.state.open}>
          <div className="custom-radio">
            <label className="radio-inline">
              <input type="radio"  name="radio" value=""/>
              <span>
                <i className="fa fa-check"></i>
              </span> White
            </label>
          </div>
          <div className="custom-radio">
            <label className="radio-inline">
              <input type="radio"  name="radio" value=""/>
              <span>
                <i className="fa fa-check"></i>
              </span> Black
            </label>
          </div>
          <div className="custom-radio">
            <label className="radio-inline">
              <input type="radio"  name="radio" value=""/>
              <span>
                <i className="fa fa-check"></i>
              </span> Red
            </label>
          </div>
          <div className="custom-radio">
            <label className="radio-inline">
              <input type="radio"  name="radio" value=""/>
              <span>
                <i className="fa fa-check"></i>
              </span> Silver
            </label>
          </div>
          <div className="custom-radio">
            <label className="radio-inline">
              <input type="radio"  name="radio" value=""/>
              <span>
                <i className="fa fa-check"></i>
              </span> Blue
            </label>
          </div>
          <div className="custom-radio">
            <label className="radio-inline">
              <input type="radio"  name="radio" value=""/>
              <span>
                <i className="fa fa-check"></i>
              </span> Beige
            </label>
          </div>
          <div className="custom-radio">
            <label className="radio-inline">
              <input type="radio"  name="radio" value=""/>
              <span>
                <i className="fa fa-check"></i>
              </span> Multi
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
