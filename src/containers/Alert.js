import React, {Component} from 'react'


import AlertNav from '../components/Alert/AlertNav'

export default class Alert extends Component {
  constructor (props){
    super(props)
  }
  render () {
    var childrenWithProps = React.cloneElement(this.props.children, this.state);
    return (
      <div>
        <AlertNav />
        {childrenWithProps}
      </div>
    )
  }
}
