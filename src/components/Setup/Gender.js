import React, { Component } from 'react'
import {Grid, Button, Row, Col, Thumbnail} from 'react-bootstrap'
import { Link } from 'react-router'
import axios from 'axios'
import cookie from 'react-cookie'
export default class Gender extends Component {
  constructor (props) {
    super(props)
    this.state=({ user: cookie.load('user')})
    this.handleClick = this.handleClick.bind(this)
    this.httpHandler = axios.create({
      baseURL: 'https://api.dashwink.tech',
      headers: {
        'Authorization': this.state.user.token
      }
    })
  }

  handleClick (e) {
    if (e.currentTarget.classList.contains("female")) {
      this.setState({gender: "women"})
    }
    else {
      this.setState({gender: "men"})
    }

  }

  onContinue () {
    this.httpHandler.put('/users/' + this.state.user.id, {
      user: {
        product_type: this.state.gender
      }
    })
    .then(function(response) {
      return response
    })

  }

  render() {
    return (
      <Grid>
        <div className="gender-wrapper">
          <Row>
            <Col md={4} sm={6} mdOffset={2} >
              <div className="gender female " onClick={this.handleClick}>
                <Thumbnail  href="#" className="img-responsive" src="assets/female.png"></Thumbnail>
                <a className="gender-overlay">
                  <span>Female</span>
                </a>
              </div>
            </Col>
            <Col md={4} sm={6} >
              <div className="gender male " onClick={this.handleClick}>
                <Thumbnail href="#" className="img-responsive"  src="assets/male.png"></Thumbnail>
                <a  className="gender-overlay">
                  <span>Male</span>
                </a>
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            {/*<Button className="btn-block btn-black" onClick={this.onContinue.bind(this)}>Continue</Button>*/}

            <Link to="/style" className="btn-block btn-black" onClick={this.onContinue.bind(this)}>Continue</Link>
          </Row>
        </div>
      </Grid>
    )
  }
}
