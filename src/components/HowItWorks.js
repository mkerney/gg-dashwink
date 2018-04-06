import React, {Component} from 'react'
export default class HowItWorks extends Component {
  render () {
    return (
      <div className="text-center">
        <div className="row">
          <h1 className="text-center">How It Works</h1>
        </div>
        <div className="row">
          <div className="col-sm-4 ">
            <div className="card">
              <img className="img-responsive" src="assets/your-style.png"/>
              <h4>Show us your style</h4>
              <p>Take a quick survey to let us know about you and start your custom shop.</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <img className="img-responsive" src="assets/custom-shop.png"/>
              <h4>Browse your custom shop</h4>
              <p>We will alert you when your item(s) goes on sale. Buy directly from the retailer.</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <img className="img-responsive" src="assets/buy-direct.png"/>
              <h4>Buy Direct</h4>
              <p>We will customize a wardrobe based on your preferences. The more winks, the better your custom shop.</p>
            </div>
          </div>
        </div>
        <br />
        <div className="row text-center">
          <button className="btn btn-black">Get Started</button>
        </div>
      </div>
    )
  }
}
