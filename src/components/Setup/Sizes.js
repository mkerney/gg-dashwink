import React, { Component} from 'react'
import {Row, Button, Col, Grid, ButtonToolbar} from 'react-bootstrap'


export default class Sizes extends Component {
  render () {
    return (
      <Grid>
        <div className="style-wrapper size-wrapper">
          <Row>
            <Col md={12}>
              <h1 className="text-center"> What fits you best:</h1>
              <Row>
                <Col md={6}>
                  <h3 className="text-center">Top Size</h3>
                  <ButtonToolbar>
                    <Button>0</Button>
                    <Button>2</Button>
                    <Button>4</Button>
                    <Button>6</Button>
                    <Button>8</Button>
                    <Button>10</Button>
                    <Button>12</Button>
                    <Button>14</Button>
                    <Button>16</Button>
                    <Button>18</Button>
                    <Button>20</Button>
                    <Button>XXS</Button>
                    <Button>XS</Button>
                    <Button>S</Button>
                    <Button>M</Button>
                    <Button>L</Button>
                    <Button>XL</Button>
                    <Button>XXL</Button>
                  </ButtonToolbar>
                </Col>
                <Col md={6}>
                  <h3 className="text-center">Dress Size </h3>
                  <ButtonToolbar>
                    <Button>0</Button>
                    <Button>2</Button>
                    <Button className="selected">4</Button>
                    <Button>6</Button>
                    <Button>8</Button>
                    <Button>10</Button>
                    <Button>12</Button>
                    <Button>14</Button>
                    <Button>16</Button>
                    <Button>18</Button>
                    <Button>20</Button>
                    <Button>XXS</Button>
                    <Button>XS</Button>
                    <Button>S</Button>
                    <Button>M</Button>
                    <Button>L</Button>
                    <Button>XL</Button>
                    <Button>XXL</Button>
                  </ButtonToolbar>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <h3 className="text-center">Denim Size</h3>
                  <ButtonToolbar>
                    <Button>25</Button>
                    <Button>26</Button>
                    <Button>27</Button>
                    <Button>28</Button>
                    <Button>29</Button>
                    <Button>30</Button>
                    <Button>31</Button>
                    <Button>32</Button>
                  </ButtonToolbar>
                </Col>
                <Col md={6}>
                  <h3 className="text-center">Pant Size</h3>
                  <ButtonToolbar>
                    <Button>0</Button>
                    <Button>2</Button>
                    <Button>4</Button>
                    <Button>6</Button>
                    <Button>8</Button>
                    <Button>10</Button>
                    <Button>12</Button>
                    <Button>14</Button>
                    <Button>16</Button>
                    <Button>18</Button>
                  </ButtonToolbar>
                </Col>
              </Row>
              <Row className="text-center">
                <Col md={6} mdOffset={3}>
                  <h3>Shoe Size</h3>
                  <ButtonToolbar>
                    <Button>4</Button>
                    <Button>4.5</Button>
                    <Button>5</Button>
                    <Button>5.5</Button>
                    <Button>6</Button>
                    <Button>6.5</Button>
                    <Button>7</Button>
                    <Button>7.5</Button>
                    <Button>8</Button>
                    <Button>8.5</Button>
                    <Button>9</Button>
                    <Button>9.5</Button>
                    <Button>10</Button>
                    <Button>10.5</Button>
                    <Button>11</Button>
                    <Button>11.5</Button>
                    <Button>12</Button>
                    <Button>12.5</Button>
                    <Button>13</Button>
                  </ButtonToolbar>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Button className="btn btn-black">Continue</Button>
          </Row>
        </div>
      </Grid>
    )
  }
}
