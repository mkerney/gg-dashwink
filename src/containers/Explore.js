import React, { Component } from 'react'
import { Link } from 'react-router'
import ExploreNav from '../components/Explore/ExploreNav'




export default class Explore extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var childrenWithProps = React.cloneElement(this.props.children, this.state);

    return (
      <div>
        <ExploreNav />
        {childrenWithProps}
      </div>
    )
  }
}
