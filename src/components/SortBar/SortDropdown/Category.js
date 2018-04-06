import React, { Component } from 'react'

import { DropdownButton, Button, MenuItem, Panel } from 'react-bootstrap'
export default class Category extends Component {
  constructor(props) {
    super(props)
    this.state ={
      categories:[]
    }
  }

  render() {

    return (
      <div>
        <Button onClick={ ()=> this.setState({ open: !this.state.open })}>
          Category <i className="fa fa-angle-down"></i>
        </Button>
        <Panel collapsible expanded={this.state.open}>
           <DropdownButton className="clearfix" title="Women">
            <MenuItem href="javascript:void(0);">Women</MenuItem>
            <MenuItem href="javascript:void(0);">Men</MenuItem>
            <MenuItem href="javascript:void(0);">Both</MenuItem>
          </DropdownButton>
          <div className="custom-radio">
            <label className="radio-inline">
              <input onClick={()=>{this.props.filterCategories()}} type="radio"  name="radio" value=""/>
              <span>
                <i className="fa fa-check"></i>
              </span> Top
            </label>
          </div>
          <div className="custom-radio">
            <label className="radio-inline">
              <input type="radio"  name="radio" value=""/>
              <span>
                <i className="fa fa-check"></i>
              </span> Bottoms
            </label>
          </div>
          <div className="custom-radio">
            <label className="radio-inline">
              <input type="radio"  name="radio" value=""/>
              <span>
                <i className="fa fa-check"></i>
              </span> Dresses
            </label>
          </div>
          <div className="custom-radio">
            <label className="radio-inline">
              <input type="radio"  name="radio" value=""/>
              <span>
                <i className="fa fa-check"></i>
              </span> Outerwear
            </label>
          </div>
          <div className="custom-radio">
            <label className="radio-inline">
              <input type="radio"  name="radio" value=""/>
              <span>
                <i className="fa fa-check"></i>
              </span> Accessories
            </label>
          </div>
          <div className="custom-radio">
            <label className="radio-inline">
              <input type="radio"  name="radio" value=""/>
              <span>
                <i className="fa fa-check"></i>
              </span> Shoes
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
