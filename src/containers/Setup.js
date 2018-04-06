import React, { Component } from 'react'
import SetupNav from '../components/Setup/SetupNav'

export default class Setup extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <SetupNav />
        {this.props.children}
      </div>
    )
  }
}
