export const getTopics = () => {
  return {
    type: 'GET_TOPICS'
  }
}

export const addTopic = (content, currentTopics) => {
  const payload = {
    id: currentTopics.length + 1,
    content: content,
    upvote: 0,
    downvote: 0
  }

  return {
    type: 'ADD_TOPICS',
    payload: payload
  }
}