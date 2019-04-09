import React from 'react';
import {ListGroup, ButtonGroup, Button} from 'react-bootstrap';
import {FaArrowUp, FaArrowDown} from 'react-icons/fa';
import {connect} from 'react-redux';
import {upvoteTopic, downvoteTopic} from './../actions/topicsAction';

const TopicItem = ({id, index, content, upvote, downvote, upvoteTopic, downvoteTopic, topics}) => {
  return(
    <ListGroup.Item
      style={{
        display: 'flex',
        alignItems: 'center'
      }}>
      <h2>{index}</h2>
      <ButtonGroup vertical className="mx-2">
        <Button 
          variant="outline-success"
          onClick={() => upvoteTopic(id, topics)}>
          <FaArrowUp />
          {upvote}
        </Button>
        <Button 
          variant="outline-danger"
          onClick={() => downvoteTopic(id, topics)}>
          {downvote}
          <FaArrowDown />
        </Button>
      </ButtonGroup>
      <span>{content}</span>
    </ListGroup.Item>
  )
}

const mapStateToProps = store => {
  return {
    topics: store.topics
  }
}

const mapDispatchToProps = dispatch => {
  return {
    upvoteTopic: (id, topics) => {dispatch(upvoteTopic(id, topics))},
    downvoteTopic: (id, topics) => {dispatch(downvoteTopic(id, topics))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicItem)