import React, {Component} from 'react';
import {
  Alert,
  Form, 
  Button, 
  Row,
  Col
} from 'react-bootstrap';

class TopicForm extends Component {
  state = {
    content: '',
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    let {content} = this.state;
    return(
      // I used Alert to wrap the form and give it background color of 'info' from Bootstrap color pallete styling
      <Alert variant={content.length <= 255 ? "info" : "danger"}>
        <Form>
          <Form.Control 
            name="content"
            as="textarea" 
            rows="3" 
            style={{marginBottom: '10px'}}
            onChange={this.handleChange}
            />
          <Row>
            <Col md={3}>
              <span>{this.state.content.length} / 255</span>
            </Col>
            <Col md={{ span: 3, offset: 6}}>
              <Button 
                variant="primary"
                block>
                post
              </Button>
            </Col>
          </Row>
        </Form>
      </Alert>
    )
  }
}

export default TopicForm;