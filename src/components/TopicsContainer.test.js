import React from 'react';
import ReactDOM from 'react-dom';
import TopicsContainer from './TopicsContainer';
import {Store} from './../store';
import {Provider} from 'react-redux';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={Store}>
      <TopicsContainer />
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
