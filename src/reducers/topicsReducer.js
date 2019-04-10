// set initial state to be empty topics
const initState = {
  topics: []
}

export const topicsReducer = (state = initState, action) => {
  // run when dispatched action type is 'GET_TOPICS'
  if(action.type === 'GET_TOPICS'){
    // return dispatched acion payload
    return {
      topics: action.payload
    }  
  }

  if(action.type === 'ADD_TOPICS'){
    return {
      // clone the current state that contains current topic
      // and added new topic inside dispatced action payload
      topics: [...state.topics, action.payload]
    }
  }

  if(action.type === 'UPVOTE_TOPIC' || action.type === 'DOWNVOTE_TOPIC'){
    return {
      // clone the action payload value from dipatched action
      topics: [...action.payload]
    }
  }

  return state
}