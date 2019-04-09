import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import {Container, Row, Col} from 'react-bootstrap';
import TopicForm from './components/TopicForm';
import TopicsContainer from './components/TopicsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Using React Helmet to edit html head tag */}
        <Helmet>
          <title>Reddit Clone</title>
          {/* cdn for react-bootstrap styling */}
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
          />
        </Helmet>

        <Container fluid>
          <h1>Reddit Clone</h1>
          <Row>
            <Col md={4}><TopicForm/></Col>
            <Col md={8}><TopicsContainer/></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
