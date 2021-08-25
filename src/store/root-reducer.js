import { combineReducers } from 'redux';
import { DATA } from './data/data';
import { USER } from './user/user';

export const NameSpace = {
  DATA: `DATA`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: DATA,
  [NameSpace.USER]: USER,
});
