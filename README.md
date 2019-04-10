# Reddit Clone
A simple clone of Reddit functionality which allow user to contribute topics and upvote or downvote the topic

This project was built with [Create React App](https://github.com/facebook/create-react-app) boilerplate

## Installation
This project requires [Node.js](https://nodejs.org/) to run
```
$ git clone https://github.com/rakhmatnw/reddit-clone.git
$ cd reddit-clone
$ npm install or yarn install
$ npm start or yarn start
```

## Stack
This project uses several libraries:
* [React.js](https://reactjs.org/)
* [Redux.js](https://redux.js.org/)
* [React-Redux](https://react-redux.js.org/)
* [React-Bootstrap](https://react-bootstrap.github.io/)
* [React-Icons](https://react-icons.netlify.com/#/)
* [React-Helmet](https://github.com/nfl/react-helmet)

## Features
* User can add topic (max character is 255)
* User can upvote a topic
* User can downvote a topic
* This project will only show top 20 topics which being sorted based on the amount of upvote from highest to lowest (descending)
* This project uses sessionStorage to save data, so when the browser closed the data will be removed