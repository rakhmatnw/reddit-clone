import React from 'react';
import ReactDOM from 'react-dom';
import TopicItem from './TopicItem';
import {Store} from './../store';
import {Provider} from 'react-redux';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={Store}>
      <TopicItem />
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
