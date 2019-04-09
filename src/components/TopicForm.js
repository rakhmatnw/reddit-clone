import React, {Component} from 'react';
import {
  Alert,
  Form, 
  Button, 
  Row,
  Col
} from 'react-bootstrap';

class TopicForm extends Component {
  render(){
    return(
      // I used Alert to wrap the form and give it background color of 'info' from Bootstrap color pallete styling
      <Alert variant="info">
        <Form>
          <Form.Control 
            as="textarea" 
            rows="3" 
            style={{
              marginBottom: '10px'
            }}/>
          <Row>
            <Col>
              <span>0/255</span>
            </Col>
            <Col style={{textAlign: 'right'}}>
              <Button variant="primary">post</Button>
            </Col>
          </Row>
        </Form>
      </Alert>
    )
  }
}

export default TopicForm;