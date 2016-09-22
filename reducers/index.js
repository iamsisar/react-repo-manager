import { createStore } from 'redux';
import { combineReducers } from 'redux';
import repositories from './repositories';
import mainPanel from './mainPanel';

const reducer = combineReducers({
  repositories,
  mainPanel
});

export default createStore(reducer, window.devToolsExtension && window.devToolsExtension());