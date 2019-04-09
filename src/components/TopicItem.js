import React from 'react';
import {ListGroup, ButtonGroup, Button} from 'react-bootstrap';
import {FaArrowUp, FaArrowDown} from 'react-icons/fa';

const TopicItem = ({index, content, upvote, downvote}) => {
  return(
    <ListGroup.Item
      style={{
        display: 'flex',
        alignItems: 'center'
      }}>
      <h2>{index}</h2>
      <ButtonGroup vertical className="mx-2">
        <Button variant="outline-success">
          <FaArrowUp />
          {upvote}
        </Button>
        <Button variant="outline-danger">
          {downvote}
          <FaArrowDown />
        </Button>
      </ButtonGroup>
      <span>{content}</span>
    </ListGroup.Item>
  )
}

export default TopicItem