export const getTopics = () => {
  // Check if there is no saved data
  // then add empty data to sessionStorage
  if(!sessionStorage.getItem('redditClone')){
    sessionStorage.setItem('redditClone', JSON.stringify([]))
  }

  // pass the data from sessionStorage to be an action payload
  return {
    type: 'GET_TOPICS',
    payload: JSON.parse(sessionStorage.getItem('redditClone'))
  }
}

export const addTopic = (content, currentTopics) => {
  // created new object as new Topic
  const payload = {
    // auto incremented id from currectTopics array length
    id: currentTopics.length + 1,
    // content value is passed from component
    content: content,
    // default upvote & downvote value
    upvote: 0,
    downvote: 0
  }

  // added the object to sessionStorage
  sessionStorage.setItem('redditClone', JSON.stringify([...currentTopics, payload]))

  // pass the object as a payload to be stored in reducer
  return {
    type: 'ADD_TOPIC',
    payload
  }
}

export const upvoteTopic = (id, currentTopics) => {
  // find the index of Topic that being selected to upvote inside currentTopics array
  const topicIndex = currentTopics.findIndex(topic => topic.id == id);
  // passed the topicIndex to find selected topic
  // then added 1 to the upvote property inside it 
  currentTopics[topicIndex].upvote += 1;

  // update the current sessionStorage with new currentTopics
  sessionStorage.setItem('redditClone', JSON.stringify([...currentTopics]))

  // pass the updated currentTopic as a payload
  return {
    type: 'UPVOTE_TOPIC',
    payload: currentTopics
  }
}

export const downvoteTopic = (id, currentTopics) => {
  // find the index of Topic that being selected to downvote inside currentTopics array
  const topicIndex = currentTopics.findIndex(topic => topic.id == id);
  // passed the topicIndex to find selected topic
  // then added 1 to the downvote property inside it 
  currentTopics[topicIndex].downvote += 1;

  // update the current sessionStorage with new currentTopics
  sessionStorage.setItem('redditClone', JSON.stringify([...currentTopics]))

  // pass the updated currentTopic as a payload
  return {
    type: 'DOWNVOTE_TOPIC',
    payload: currentTopics
  }
}