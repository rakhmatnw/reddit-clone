const initState = {
  topics: [
    {
      id: 0,
      content: 'this is a topic that will get alot of upVote',
      upvote: 142,
      downvote: 5
    },
    {
      id: 1,
      content: 'this is a second topic with downvote',
      upvote: 31,
      downvote: 544
    }
  ]
}

export const topicsReducer = (state = initState, action) => {
  if(action.type === 'GET_TOPICS'){
    return {
      topics: state.topics
    }  
  }

  if(action.type === 'ADD_TOPICS'){
    return {
      topics: [...state.topics, action.payload]
    }
  }

  if(action.type === 'UPVOTE_TOPIC'){
    return {
      ...state,
      topics: [...action.payload]
    }
  }

  return state
}