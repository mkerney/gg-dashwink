import React, {Component} from 'react'
import { Row, Col, Grid } from 'react-bootstrap'
import axios from 'axios'
import moment from 'moment'


export default class SaleAlert extends Component {
  constructor (props) {
    super (props)
    this.state=({alerts:null})
  }
  componentWillMount() {
    axios.get("http://api.dashwink.tech/products?page[size]=5")
    .then(function(response) {
      this.setState({alerts:response.data.data})
      // console.log(this.state)
    }.bind(this))
  }
  render () {
    console.log(this.state.alerts)
    if(this.state.alerts !== null ) {
      var alerts = this.state.alerts.map(function(alert) {
        var alert = alert.attributes
        return (
          <Col lg={2} md={4} sm={4} xs={6}>
            <div className="item text-center">
              <img className='img-responsive' src={alert.image.url}></img>
              <div className="item-meta">
                <strong className="name">{alert.name}</strong>
                <span className="site date">{moment(alert["created-at"]).format("MMMM D, YYYY")}</span>
              </div>
            </div>
          </Col>
        )
      }.bind(this))

    }
    else {
      var alerts =(
        <Col md={2}>
          Loading
        </Col>
      )
    }
    return (
      <Grid>
        <Row className="text-center">
          <h1 className="item-title">Sale Alerts</h1>
        </Row>
        <div className="item-wrapper sale-alert-wrapper">
          <Row className="item-row">
            {alerts}
          </Row>
        </div>
      </Grid>
    )
  }
}
