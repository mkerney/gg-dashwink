import React, { Component } from 'react'
import {Grid, Row, Col, Button} from 'react-bootstrap'


export default class StyleGame extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid>
        <div className="style-game-wrapper">
          <Row>
            <Col sm={12}>
              <h2 className="text-center">What's Your Style?</h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <div className="styles">
                <ul className="list-inline text-center">
                  <li>
                    <button onClick={()=>{alert('this is seleceted')}} className="btn btn-block">Cars</button>
                  </li>
                  <li>
                     <button className="btn btn-block">Drinks</button>
                  </li>
                  <li>
                     <button className="btn btn-block">Shoes</button>
                  </li>
                  <li>
                     <button className="btn btn-block">Jewelry</button>
                  </li>
                  <li>
                     <button className="btn btn-block">Movies</button>
                  </li>
                  <li>
                     <button className="btn btn-block">Magazines</button>
                  </li>
                  <li>
                     <button className="btn btn-block">Hobbies</button>
                  </li>
                  <li>
                     <button className="btn btn-block">Homes</button>
                  </li>
                  <li>
                     <button className="btn btn-block">Celebs</button>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <h3 className="text-center">Select one image from each group of questions</h3>
            </Col>
          </Row>
          <div className="style-group-wrapper">
            <Row>
              <Col sm={4} xs={6}>
                <Button><img className="img-responsive" src="assets/female.png"></img></Button>
              </Col>
              <Col sm={4} xs={6}>
                <Button><img className="img-responsive" src="assets/female.png"></img></Button>
              </Col>
              <Col sm={4} xs={6}>
                <Button><img className="img-responsive" src="assets/female.png"></img></Button>
              </Col>
              <Col sm={4} xs={6}>
                <Button><img className="img-responsive" src="assets/female.png"></img></Button>
              </Col>
              <Col sm={4} xs={6}>
                <Button><img className="img-responsive" src="assets/female.png"></img></Button>
              </Col>
              <Col sm={4} xs={6}>
                <Button><img className="img-responsive" src="assets/female.png"></img></Button>
              </Col>
              <Col sm={4} xs={6}>
                <Button><img className="img-responsive" src="assets/female.png"></img></Button>
              </Col>
              <Col sm={4} xs={6}>
                <Button><img className="img-responsive" src="assets/female.png"></img></Button>
              </Col>
              <Col sm={4} xs={6}>
                <Button><img className="img-responsive" src="assets/female.png"></img></Button>
              </Col>
            </Row>
          </div>
        </div>
      </Grid>
    )
  }
}
