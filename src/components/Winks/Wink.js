import React, { Component } from 'react'
import {Button, Modal, Col ,Row} from 'react-bootstrap'
import {Link} from 'react-router'



export default class Wink extends Component {
  constructor (props) {
    super(props)
    this.state = ({showModal:false})
    this.close = this.close.bind(this)
    this.open = this.open.bind(this)
  }
  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }
  toggleModal () {
    return this.state.showModal
  }


  render() {
    var product = this.props.product.attributes
    return (
      <div>
        <img className='img-responsive' onClick={this.open} src={product.image.url}></img>
        <Modal bsSize="large" show={this.state.showModal} onHide={this.close}  className="product-modal-wrapper">
          <Modal.Header onClick={this.close} closeButton>
          </Modal.Header>
          <Modal.Body >
            <div className="item-wrapper">
              <div className="product-details-wrapper">
                <Row className="item-meta">
                  <Col md={6}>
                    <img className='img-responsive' onClick={this.open} src={product.image.url}></img>
                  </Col>
                  <Col md={6}>
                    <Row>
                      <Col sm={12}>
                        <h2 className="item-title" title={product.name}>{product.name}</h2>
                        <a href="bloomingdales.com" target="_blank" className="site"> Bloomingdales.com</a>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6}>
                        <div className="rate">
                          <span className="old">{this.props.insertDecimal(product.price)}</span>
                          <span className="new">{this.props.insertDecimal(product["sale-price"])}</span>
                        </div>
                      </Col>
                      <Col xs={6} className="text-right">
                        <ul className="list-inline social-share">
                          <li><a href="javascript:void(0);"><i className="fa fa-facebook-official"></i></a></li>
                          <li><a href="javascript:void(0);"><i className="fa fa-pinterest"></i></a></li>
                          <li><a href="javascript:void(0);"><i className="fa fa-instagram"></i></a></li>
                          <li><a href="javascript:void(0);"><i className="fa fa-twitter"></i></a></li>
                        </ul>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12}>
                        <p className="description"> {product["long-description"]}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12}>
                        <p className="description available-size"> Available Size: XXS, S, M, L</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6} className="col-xxs-12">
                       <div className="like-wrapper">
                          <Button><i className="fa fa-bell-o"></i></Button>
                          <Button><span>+</span></Button>
                          <Button><i className="fa fa-heart"></i> <span>12</span></Button>
                       </div>
                      </Col>
                      <Col xs={6} className="col-xxs-12">
                        <Button className='btn-black'>Buy</Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <div className="modal-divider"></div>
              <div className="similiar-product-wrapper">
                <h3>Similiar Items</h3>
                  <Row>
                    <Col md={3}>
                      <div className="item">
                        <img className='img-responsive'  src={product.image.url}></img>
                        <div className="item-meta">
                          <span className="name" title={product.name}>{product.name}</span>
                          <span className="site"> Bloomingdales.com</span>
                          <div className="rate">
                            <span className="old">{this.props.insertDecimal(product.price)}</span>
                          </div>
                          <div className="text-right">
                            <Button className="btn-like"><i className="fa fa-heart"></i> <span>12</span></Button>
                          </div>
                        </div>
                      </div>
                    </Col>

                    <Col md={3}>
                      <div className="item">
                        <img className='img-responsive'  src={product.image.url}></img>
                        <div className="item-meta">
                          <span className="name" title={product.name}>{product.name}</span>
                          <span className="site"> Bloomingdales.com</span>
                          <div className="rate">
                            <span className="old">{this.props.insertDecimal(product.price)}</span>
                          </div>
                          <div className="text-right">
                            <Button className="btn-like"><i className="fa fa-heart"></i> <span>12</span></Button>
                          </div>
                        </div>
                      </div>
                    </Col>

                    <Col md={3}>
                      <div className="item">
                        <img className='img-responsive'  src={product.image.url}></img>
                        <div className="item-meta">
                          <span className="name" title={product.name}>{product.name}</span>
                          <span className="site"> Bloomingdales.com</span>
                          <div className="rate">
                            <span className="old">{this.props.insertDecimal(product.price)}</span>
                          </div>
                          <div className="text-right">
                            <Button className="btn-like"><i className="fa fa-heart"></i> <span>12</span></Button>
                          </div>
                        </div>
                      </div>
                    </Col>

                    <Col md={3}>
                      <div className="item">
                        <img className='img-responsive'  src={product.image.url}></img>
                        <div className="item-meta">
                          <span className="name" title={product.name}>{product.name}</span>
                          <span className="site"> Bloomingdales.com</span>
                          <div className="rate">
                            <span className="old">{this.props.insertDecimal(product.price)}</span>
                          </div>
                          <div className="text-right">
                            <Button className="btn-like"><i className="fa fa-heart"></i> <span>12</span></Button>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>

    );
  }
}
