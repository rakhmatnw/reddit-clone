import React, {Component} from 'react';
import {ListGroup} from 'react-bootstrap';
import TopicItem from './TopicItem';

class TopicsContainer extends Component {

  render(){
    return(
      <ListGroup>
        <TopicItem />
      </ListGroup>
    )
  }
}

export default TopicsContainer;