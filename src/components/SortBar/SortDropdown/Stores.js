import React, { Component } from 'react'
import { DropdownButton, MenuItem, Button, Panel } from 'react-bootstrap'

export default class Stores extends Component  {
  constructor(...args) {
    super(...args);
    this.state = {
      open: false
    };
  }
  render() {

    return (
      <div>

        <Button onClick={ ()=> this.setState({ open: !this.state.open })}>
            Stores <i className="fa fa-angle-down"></i>
        </Button>
        <Panel collapsible expanded={this.state.open}>
          <div className="custom-radio">
            <input type="text" className="form-control" placeholder="Search for brand" />
          </div>
          <div className="custom-radio">
            <label className="radio-inline">
              <input type="radio"  name="radio" value=""/>
              <span>
                <i className="fa fa-check"></i>
              </span> Anthropologie
            </label>
          </div>
          <div className="custom-radio">
            <label className="radio-inline">
              <input type="radio"  name="radio" value=""/>
              <span>
                <i className="fa fa-check"></i>
              </span> Burberry
            </label>
          </div>
          <div className="custom-radio">
            <label className="radio-inline">
              <input type="radio"  name="radio" value=""/>
              <span>
                <i className="fa fa-check"></i>
              </span> Tory Burch
            </label>
          </div>
          <div className="custom-radio">
            <label className="radio-inline">
              <input type="radio"  name="radio" value=""/>
              <span>
                <i className="fa fa-check"></i>
              </span> DVF
            </label>
          </div>
          <div className="custom-radio">
            <label className="radio-inline">
              <input type="radio"  name="radio" value=""/>
              <span>
                <i className="fa fa-check"></i>
              </span> Theory
            </label>
          </div>
          <div className="custom-radio">
            <label className="radio-inline">
              <input type="radio"  name="radio" value=""/>
              <span>
                <i className="fa fa-check"></i>
              </span> Zara
            </label>
          </div>
          <div className="custom-radio">
            <label className="radio-inline">
              <input type="radio"  name="radio" value=""/>
              <span>
                <i className="fa fa-check"></i>
              </span> H&M
            </label>
          </div>
          <div className="custom-radio">
            <label className="radio-inline">
              <input type="radio"  name="radio" value=""/>
              <span>
                <i className="fa fa-check"></i>
              </span> Nordstrom
            </label>
          </div>
          <div className="custom-radio">
            <label className="radio-inline">
              <input type="radio"  name="radio" value=""/>
              <span>
                <i className="fa fa-check"></i>
              </span> Sakes Fifth Avenue
            </label>
          </div>
          <div className="custom-radio">
            <a href="javascript:void(0);">clear</a>
          </div>
        </Panel>
      </div>
    );
  }
}
