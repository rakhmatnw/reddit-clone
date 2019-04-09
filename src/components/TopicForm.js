import React, {Component} from 'react';
import {
  Alert,
  Form, 
  Button, 
  Row,
  Col,
  Modal
} from 'react-bootstrap';

class TopicForm extends Component {
  state = {
    content: '',
    modalShown: false
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    if(this.state.content.length > 255){
      this.setState({
        modalShown: true
      })
    }
  }

  handleModalToggle = () => {
    this.setState({
      modalShown: false
    })
  }

  render(){
    // destructure 'content' from state
    let {content} = this.state;
    
    return(
      <div>
        {/* I used Alert to wrap the form and give it background color of 'info' from Bootstrap color pallete styling and will turn to 'danger' if content character length is more than 255  */}
        <Alert variant={content.length <= 255 ? "info" : "danger"}>
          <Form>
            {/* Form.Control is a component from React-Bootstrap */}
            <Form.Control 
              name="content"
              as="textarea" 
              rows="3" 
              style={{marginBottom: '10px'}}
              onChange={this.handleChange}
              />
            {/* I used react-bootstrap layout grid with Row & Col */}
            <Row>
              <Col md={3}>
                <span>{this.state.content.length} / 255</span>
              </Col>
              <Col md={{ span: 3, offset: 6}}>
                <Button 
                variant="primary" 
                block
                onClick={this.handleSubmit}> 
                  Post 
                </Button>
              </Col>
            </Row>
          </Form>
        </Alert>

        {/* Modal will shown when user submit a post but the character length is more than 255 character */}
        <Modal 
          show={this.state.modalShown} 
          onHide={this.handleModalToggle}
          >
          <Modal.Body>
            The number of Topic characters cannot be more than 255 character!
          </Modal.Body>
          <Modal.Footer>
            <Button 
              variant="secondary"
              onClick={this.handleModalToggle}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default TopicForm;