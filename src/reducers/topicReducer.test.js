import {topicsReducer} from './topicsReducer';

describe('Topic Reducer based on actions ', () => {
  it('should add new topic when ADD_TOPIC dispatched', () => {
    const initState = {
      topics: []
    };

    const newTopic = {
      id: 5,
      content: 'Hello this is a new topic',
      upvote: 0,
      downvote: 0
    };

    const expectedState = {
      topics: initState.topics.concat(newTopic)
    }

    const action = {type: 'ADD_TOPIC', payload: newTopic};
    const actualState = topicsReducer(initState, action);

    expect(actualState).toEqual(expectedState);
  });
})