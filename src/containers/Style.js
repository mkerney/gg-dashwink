import React, { Component } from 'react'




export default class Style extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var childrenWithProps = React.cloneElement(this.props.children, this.state);

    return (
      <div>
        {childrenWithProps}
      </div>
    )
  }
}
