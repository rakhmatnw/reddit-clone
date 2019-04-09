const initState = {
  topics: []
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

  if(action.type === 'UPVOTE_TOPIC' || action.type === 'DOWNVOTE_TOPIC'){
    return {
      topics: [...action.payload]
    }
  }

  return state
}