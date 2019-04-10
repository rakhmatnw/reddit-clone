import React, {Component} from 'react';
import {ListGroup} from 'react-bootstrap';
import TopicItem from './TopicItem';
import {connect} from 'react-redux';
import {getTopics} from './../actions/topicsAction';

class TopicsContainer extends Component {

  // when component already mounted invoke getTopics to dispatch action
  componentDidMount(){
    // this function will check if there is already a data in memory
    this.props.getTopics();
  }

  render(){
    // sort the topics based on upvote, descending 
    this.props.topics.sort((a,b) => b.upvote-a.upvote);
    // slice the top 20 topics
    // then map the topics data to a TopicItem Component
    const TopicList = this.props.topics
      .slice(0, 20)
      .map((topic,i) => {
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

    // conditional rendering if the topics is empty
    if(this.props.topics.length > 0){
      return(
        <ListGroup>
          {TopicList}
        </ListGroup>
        )
    }else{
      return(
        <div>
          no post yet.
        </div>
      )
    }

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