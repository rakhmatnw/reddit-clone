import React from 'react';
import ReactDOM from 'react-dom';
import TopicItem from './TopicItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TopicItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
