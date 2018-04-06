import React, { Component } from 'react'
import {Input, Button, Col,MenuItem, DropdownButton, Grid, Row} from 'react-bootstrap'

export default class SetupProfile extends Component {
  render () {
    return (
      <div className="style-wrapper profile-wrapper">
        <Grid>
          <Row>
            <Col md={6} mdOffset={3} className='text-center'>
              <form>
                <h3>What is your zipcode</h3>
                <input type="text" placeholder="Enter Zip Code"></input>
                <h3>How did you hear about us</h3>
                <DropdownButton title="Dropdown">
                 <MenuItem href="#books">Books</MenuItem>
                 <MenuItem href="#podcasts">Podcasts</MenuItem>
                 <MenuItem href="#">Tech I Like</MenuItem>
                 <MenuItem href="#">About me</MenuItem>
                 <MenuItem href="#addBlog">Add a Blog</MenuItem>
               </DropdownButton>
               <Button className="btn btn-black"> Done </Button>
              </form>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
