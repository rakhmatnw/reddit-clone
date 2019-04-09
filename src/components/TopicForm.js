import React, {Component} from 'react';
import {
  Alert,
  Form, 
  Button, 
  Row,
  Col,
  Modal
} from 'react-bootstrap';
import {connect} from 'react-redux';
import {addTopic} from './../actions/topicsAction.js';

class TopicForm extends Component {
  state = {
    content: '',
    modalShown: false
  }

  handleChange = e => {
    // Set the value of content in state from the form
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    // prevent button to refresh the page on submit
    e.preventDefault();
    // if content length is more than 255, it will not submit, instead modal will be shown
    this.state.content.length > 255 ?
      this.setState({modalShown: true}) :
      this.props.addTopic(this.state.content, this.props.topics)
  }

  handleModalToggle = () => {
    // modal will disappear
    this.setState({modalShown: false})
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
              <Col md={5}>
                <span>{this.state.content.length} / 255</span>
              </Col>
              <Col md={{ span: 5, offset: 2}}>
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
          onHide={this.handleModalToggle}>
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

const mapStateToProps = store => {
  return {
    topics: store.topics
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTopic: (content, currentTopics) => {dispatch(addTopic(content, currentTopics))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicForm);