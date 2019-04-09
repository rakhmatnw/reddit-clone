import React from 'react';
import ReactDOM from 'react-dom';
import TopicForm from './TopicForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TopicForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
