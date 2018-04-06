import React, {Component} from 'react'
import { Row, Col, Grid } from 'react-bootstrap'
import axios from 'axios'
import moment from 'moment'
import _ from 'lodash'

export default class CreatedAlert extends Component {
  constructor (props) {
    super (props)
    this.state=({
      alerts:null,
      edit:true,
    })
    this.handleEdit = this.handleEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }
  handleEdit () {
    this.setState({edit:!this.state.edit })
  }

  handleSave(alerts) {
    // find in arr alert.active === false and take those ids to delete from user alerts
    var activeFalse =  _.filter(alerts, function(alert) {
        return alert.active === false
      })
    var activeFalseIds = _.map(activeFalse, function(alert){
      return alert.id
    })
    // alert('save')
    // console.log(alerts)
    // var activeFalse = alerts.map(function (alert){
    //   console.log(alert)
    //   alert.active === false
    // })
    console.log(activeFalse)
    console.log(activeFalseIds)
    this.setState({edit:!this.state.edit})
  }

  handleCancel (alerts) {
    alerts.map(function (item, index){
      alerts[index].active = true
    })
    this.setState({
      alerts:alerts,
      edit:!this.state.edit
    })
  }

  handleDelete (al, key) {
    var arr = this.state.alerts
    arr.map(function (item, index){
      arr[key].active = !arr[key].active
    })
    this.setState({alerts:arr})
  }
  componentWillMount() {
    axios.get("http://api.dashwink.tech/products?page[size]=5")
    .then(function(response) {
      var responseArr = response.data.data
      responseArr.map(function(item) {
        item.active = true
      })
      this.setState({alerts:responseArr})

    }.bind(this))

  }
  render () {
    if(this.state.alerts !== null ) {
      var alerts = this.state.alerts.map(function(alert, index) {
        // console.log(alert)
        // console.log(this.state)
        return (
          <Col md={2} key={alert.id} data-tag={index} className={alert.active?null:"hidden"}>
            {/*delete button for alerts*/}
            <div className={this.state.edit ? 'hidden' : null}>
              <button className="pull-right" onClick={()=>{this.handleDelete(alert, index)}} >x</button>
            </div>
            <img className="img-responsive" src={alert.attributes.image.url}></img>
            <br></br>
            <span>{alert.attributes.name}</span>
            <br></br>
            <span>{moment(alert.attributes["created-at"]).format("MMMM D, YYYY")}</span>
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
          <h1>Created Alerts</h1>
        </Row>
        <Row className="text-center">
        {/*edit / save cancel button toggle*/}
          {this.state.edit?
            <button onClick={this.handleEdit}>Edit</button> :
            <div className="pull-right">
              <button onClick={()=>{this.handleCancel(this.state.alerts)}}>Cancel</button>
              <button onClick={()=>{this.handleSave(this.state.alerts)}}>Save</button>
            </div>
            }
        </Row>
        <Row>
          {alerts}
        </Row>
      </Grid>
    )
  }
}
