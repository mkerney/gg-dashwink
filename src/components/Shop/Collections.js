import React, { Component } from 'react'
import {Grid, Button, Row, Col, Modal, Thumbnail} from 'react-bootstrap'
import cookie from 'react-cookie'
import axios from 'axios'
import Dropzone from 'react-dropzone'
import Sort from '../SortBar/SortDropdown/Sort'
import Winks from '../Winks/Winks'
export default class Collectons extends Component {
  constructor (props) {
    super (props)
    this.state = ({
      user:cookie.load('user'),
      showModal:false,
      items: [
        { name: "The Kooples - white top", count:1, src: "assets/male.png" },
        { name: "Sandro-Orange Zipper",   count: 2, src: "assets/female.png" },
        { name: "Sandro-Orange Zipper",   count: 2, src: "assets/female.png" },
        { name: "Sandro-Orange Zipper",   count: 2, src: "assets/male.png" },
        { name: "Sandro-Orange Zipper",   count: 2, src: "assets/female.png" },
        { name: "The Kooples - dress",   count:1, src: "assets/male.png" },
        { name: "The Kooples - dress",   count:1, src: "assets/male.png" },
        { name: "The Kooples - dress",   count:1, src: "assets/female.png" },
        { name: "The Kooples - dress",   count:1, src: "assets/male.png" },
        { name: "The Kooples - dress",   count:1, src: "assets/male.png" },
        { name: "The Kooples - dress",   count:1, src: "assets/female.png" },
        { name: "The Kooples - dress",   count:1, src: "assets/male.png" },
        { name: "The Kooples - dress",   count:1, src: "assets/female.png" },
        { name: "The Kooples - dress",   count:1, src: "assets/male.png" },
        { name: "The Kooples - dress",   count:1, src: "assets/female.png" },
      ]
    })
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.httpHandler = axios.create({
      baseURL: 'https://api.dashwink.tech/',
      headers: {
        'Authorization': this.state.user.token
      }
    })
  }
  open () {
    this.setState({showModal:true})
  }

  close () {
    this.setState({showModal:false})
  }
  onDrop (files ) {
    if ( files.length === 0 ) {
        alert("upload img please")
        return;
    }
    console.log('Received files: ', files);
    this.setState({files:files})
  }
  newCollection () {
    var name = 'jeans'
    axios({
      method: 'post',
      url: 'https://api.dashwink.tech//users/' + this.state.user.id + '/collection/?collection[name]=' + name,
      headers: {
        'Authorization': this.state.user.token
      }
    })
    .then(function (response) {
      console.log(response)
    }.bind(this))
  }
  componentDidMount() {

    // var user = cookie.load('user')
    // axios({
    //   method: 'post',
    //   url: 'https://api.dashwink.tech/users/' + user.id + '/collection?collection[name]=black',
    //   data: {
    //     collection:{name:'black dress'}
    //
    //   }
    // })
    // // axios.post('https://api.dashwink.tech/users/' + user.id + '/collection', {
    // //   collection.name:black dress
    // // })
    // .then(function (response) {
    //   console.log(response)
    //   // this.setState({products:response.data.data})
    // }.bind(this))
  }

  render() {
    var listItems = this.state.items.map(function(item, index) {
      if (index === 0) {
        return(
          // this will be the create collection componenet
          <Col lg={2} md={4} sm={4} xs={6}>
            <div className="item">
            <div onClick={this.open} className="new-collection">
              <a href="javascript:void(0);">
                <div className="caption">
                  <span>+</span>
                  <span>New Collection</span>
                </div>
              </a>
            </div>
              <img className='img-responsive'  src="assets/female.png"></img>
              <div className="item-meta">
                <span className="name">Name</span>
                <span className="site"> demo.com</span>
                <div className="rate">
                  <span className="old">150$</span>
                  <span className="new">75$</span>
                </div>
                <div className="like">
                  <i className="fa fa-heart"></i>
                  <span>12</span>
                </div>
              </div>
            </div>


            <Modal bsSize="small" show={this.state.showModal} onHide={this.close}>
              <Modal.Header closeButton>
                <Modal.Title>New Collection</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <div>
                <Dropzone ref="dropzone" multiple={false} onDrop={this.onDrop.bind(this)} >
                  {this.state.files ?<img className="img-responsive" src={this.state.files[0].preview}></img>
                   : <div>Upload Photo</div> }
                </Dropzone>
                <input type="text" placeholder="Enter Name"></input>
              </div>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.newCollection.bind(this)}>Create</Button>
              </Modal.Footer>
            </Modal>
          </Col>
        )
      }
      if (index % 5 === 0 ) {
        return (
          <Col lg={2} md={4} sm={4} xs={6}>
            <div className="item">
              <img className='img-responsive' src={item.src}></img>
              <div className="item-meta">
                <span className="name">{item.name}</span>
                <span className="site"> Bloomingdales.com</span>
                <div className="rate">
                  <span className="old">150$</span>
                  <span className="new">75$</span>
                </div>
                <div className="like">
                  <i className="fa fa-heart"></i>
                  <span>12</span>
                </div>
              </div>
            </div>
          </Col>
        )
      }
      else {
        return (
          <Col lg={2} md={4} sm={4} xs={6}>
            <div className="item">
              <img className='img-responsive' src={item.src}></img>
              <div className="item-meta">
                <span className="name">{item.name}</span>
                <span className="site"> Bloomingdales.com</span>
                <div className="rate">
                  <span className="old">150$</span>
                  <span className="new">75$</span>
                </div>
                <div className="like">
                  <i className="fa fa-heart"></i>
                  <span>12</span>
                </div>
              </div>
            </div>
          </Col>
        )
      }

    }.bind(this));
    return (

      <Grid>
        <div className="item-wrapper">
          <Row>
            <h1 className="text-center">Your Collections</h1>
          </Row>
          <Row className="item-row">
            <Col md={12}>
              <Row>
                {listItems}
              </Row>
            </Col>
          </Row>
        </div>
      </Grid>
    )
  }
}
