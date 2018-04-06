import React, { Component } from 'react'
import { Link } from 'react-router'
import ShopNav from '../components/Shop/ShopNav'




export default class Shop extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var childrenWithProps = React.cloneElement(this.props.children, this.state);

    return (
      <div>
        <ShopNav />
        {childrenWithProps}
      </div>
    )
  }
}
