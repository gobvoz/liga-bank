import * as actions from '../actions';
import { createReducer } from '@reduxjs/toolkit';
import { MENU_TYPE } from '../../const';

const initialState = {
  menuType: MENU_TYPE.SERVICES,
};

const DATA = createReducer(initialState, builder => {
  builder.addCase(actions.changeMenu, (state, action) => {
    return {
      ...state,
      menuType: action.payload,
    };
  });
});

export { DATA };
