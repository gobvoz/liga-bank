import { createReducer } from '@reduxjs/toolkit';
import { requireAuthorization } from '../actions';
import { AuthorizationStatus } from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const USER = createReducer(initialState, builder => {
  builder.addCase(requireAuthorization, (state, action) => {
    return {
      ...state,
      authorizationStatus: action.payload,
    };
  });
});

export { USER };
