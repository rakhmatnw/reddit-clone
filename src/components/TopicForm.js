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
    // check if "topic" character is more than 255
    if(this.state.content.length > 255){
      // if it's true then show the alert modal
      this.setState({modalShown: true})
    }else{
      // if it's false then invoke addTopic to dispatch an action
      // first parameter is content from state as new topic
      // second parameter is current topics array from redux store
      this.props.addTopic(this.state.content, this.props.topics)
      // change the content state into empty to make textArea form become empty on submit
      this.setState({content: ''})
    }
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
            {/* Form.Control from React-Bootstrap */}
            <Form.Control 
              name="content"
              as="textarea" 
              rows="3" 
              value={this.state.content} // subscribe to the value from state
              style={{marginBottom: '10px'}} // additional styling
              onChange={this.handleChange} // invoke a function on Change
              />
            {/* Row & Col component from react-bootstrap grid */}
            <Row>
              <Col md={5}>
                {/* displayed the amount of "Topic" character users typed in the form */}
                <span>{this.state.content.length} / 255</span>
              </Col>
              <Col md={{ span: 5, offset: 2}}>
                <Button 
                variant="primary" 
                block
                onClick={this.handleSubmit} // invoke a funtion on click
                >
                  Post 
                </Button>
              </Col>
            </Row>
          </Form>
        </Alert>

        {/* Modal component from react-bootstrap */}
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