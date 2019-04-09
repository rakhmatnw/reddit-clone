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
    payload
  }
}

export const upvoteTopic = (id, currentTopics) => {
  const topicIndex = currentTopics.findIndex(topic => topic.id == id);
  currentTopics[topicIndex].upvote += 1;

  return {
    type: 'UPVOTE_TOPIC',
    payload: currentTopics
  }
}

export const downvoteTopic = (id, currentTopics) => {
  const topicIndex = currentTopics.findIndex(topic => topic.id == id);
  currentTopics[topicIndex].downvote += 1;

  return {
    type: 'DOWNVOTE_TOPIC',
    payload: currentTopics
  }
}