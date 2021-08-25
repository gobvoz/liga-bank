import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  CHANGE_MENU: `data/changeMenu`,
};

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, status => {
  return {
    payload: status,
  };
});

export const changeMenu = createAction(ActionType.CHANGE_MENU, newMenu => {
  return {
    payload: newMenu,
  };
});
