import React from 'react';
import ReactDOM from 'react-dom';
import TopicForm from './TopicForm';
import {Store} from './../store';
import {Provider} from 'react-redux';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={Store}>
      <TopicForm />
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
