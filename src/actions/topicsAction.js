export const getTopics = () => {
  if(!sessionStorage.getItem('redditClone')){
    sessionStorage.setItem('redditClone', JSON.stringify([]))
  }

  console.log();

  return {
    type: 'GET_TOPICS',
    payload: JSON.parse(sessionStorage.getItem('redditClone'))
  }
}

export const addTopic = (content, currentTopics) => {
  const payload = {
    id: currentTopics.length + 1,
    content: content,
    upvote: 0,
    downvote: 0
  }

  sessionStorage.setItem('redditClone', JSON.stringify([...currentTopics, payload]))

  return {
    type: 'ADD_TOPICS',
    payload
  }
}

export const upvoteTopic = (id, currentTopics) => {
  const topicIndex = currentTopics.findIndex(topic => topic.id == id);
  currentTopics[topicIndex].upvote += 1;

  sessionStorage.setItem('redditClone', JSON.stringify([...currentTopics]))

  return {
    type: 'UPVOTE_TOPIC',
    payload: currentTopics
  }
}

export const downvoteTopic = (id, currentTopics) => {
  const topicIndex = currentTopics.findIndex(topic => topic.id == id);
  currentTopics[topicIndex].downvote += 1;

  sessionStorage.setItem('redditClone', JSON.stringify([...currentTopics]))

  return {
    type: 'DOWNVOTE_TOPIC',
    payload: currentTopics
  }
}