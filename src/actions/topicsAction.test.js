import * as actions from './topicsAction';

describe('Topics Actions', () => {
  it('should create a GET_TOPICS action', () => {
    const topics = [];

    const expectedAction = {type: 'GET_TOPICS', payload: topics}
    const actualAcion = actions.getTopics();

    expect(actualAcion).toEqual(expectedAction);
  });

  it('should create an ADD_TOPIC action', () => {
    // current Topics form store
    const currentTopics = []
    // content from component
    const content = 'Hello! this is a new topic'
    // create new topic object
    const newTopic = {
      id: 1,
      content: content,
      upvote: 0,
      downvote: 0
    }
    const expectedAction = {type: 'ADD_TOPIC', payload: newTopic};
    const actualAction = actions.addTopic(content, currentTopics);

    expect(actualAction).toEqual(expectedAction);
  });

  it('should create an UPVOTE_TOPIC action', () => {
    const id = 1;

    const upvotedTopic = {
      id: 1,
      content: 'Hello! this is a topic',
      upvote: 1,
      downvote: 0
    }

    const topics = [];
    topics.push(upvotedTopic);

    const expectedAction = {type: 'UPVOTE_TOPIC', payload: topics};
    const actualAction = actions.upvoteTopic(id, topics);

    expect(actualAction).toEqual(expectedAction);
  });

  it('should create an DOWNVOTE_TOPIC action', () => {
    const id = 1;

    const downvotedTopic = {
      id: 1,
      content: 'Hello! this is a topic',
      upvote: 0,
      downvote: 1
    }

    const topics = [];
    topics.push(downvotedTopic);

    const expectedAction = {type: 'DOWNVOTE_TOPIC', payload: topics};
    const actualAction = actions.downvoteTopic(id, topics);

    expect(actualAction).toEqual(expectedAction);
  });

})