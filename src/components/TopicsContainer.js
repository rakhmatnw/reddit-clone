import React, {Component} from 'react';
import {ListGroup} from 'react-bootstrap';
import TopicItem from './TopicItem';
import {connect} from 'react-redux';
import {getTopics} from './../actions/topicsAction';

class TopicsContainer extends Component {

  componentDidMount(){
    this.props.getTopics();
  }

  render(){
    const TopicList = this.props.topics.map((topic,i) => {
      return(
        <TopicItem 
          key={topic.id}
          id={topic.id}
          index={i+1}
          content={topic.content}
          upvote={topic.upvote}
          downvote={topic.downvote}/>
      )
    })

    return(
      <ListGroup>
        {TopicList}
      </ListGroup>
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
    getTopics: () => {dispatch(getTopics())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicsContainer);