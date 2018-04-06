import React, { Component } from 'react';
import { connect } from 'react-redux';
import DevTools from './DevTools';
import MyNavbar from '../components/MyNavbar';
import Footer from '../components/Footer'

class Root extends Component {
  render() {
    const { state } = this.props;
    return (
          <div>
            <MyNavbar />
            {this.props.children}
            <Footer />
            {/* Being the dev version of our Root component, we include DevTools below */}
            {/*<DevTools />*/}
          </div>


    );
  }
};

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

module.exports = connect(mapStateToProps)(Root);
