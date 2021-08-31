import * as actions from '../actions';
import { createReducer } from '@reduxjs/toolkit';
import { MENU_TYPE } from '../../const';

const initialState = {
  menuType: MENU_TYPE.SERVICES,
  purpose: ``,
  price: ``,
  firstPayment: ``,
  loanTerm: ``,
  offerNumber: 0,
  offer: {},
  isMother: false,
  isInsuranceAuto: false,
  isInsuranceLive: false,
};
const DATA = createReducer(initialState, builder => {
  builder.addCase(actions.changeMenu, (state, action) => {
    return {
      ...state,
      menuType: action.payload,
    };
  });
  builder.addCase(actions.changePurpose, (state, action) => {
    return {
      ...state,
      purpose: action.payload,
    };
  });
  builder.addCase(actions.changePrice, (state, action) => {
    return {
      ...state,
      price: action.payload,
    };
  });
  builder.addCase(actions.changeFirstPayment, (state, action) => {
    return {
      ...state,
      firstPayment: action.payload,
    };
  });
  builder.addCase(actions.changeLoanTerm, (state, action) => {
    return {
      ...state,
      loanTerm: action.payload,
    };
  });
  builder.addCase(actions.changeMotherMoney, (state, action) => {
    return {
      ...state,
      isMother: action.payload,
    };
  });
  builder.addCase(actions.changeInsuranceAuto, (state, action) => {
    return {
      ...state,
      isInsuranceAuto: action.payload,
    };
  });
  builder.addCase(actions.changeInsuranceLive, (state, action) => {
    return {
      ...state,
      isInsuranceLive: action.payload,
    };
  });
  builder.addCase(actions.setNewOffer, (state, action) => {
    return {
      ...state,
      offer: action.payload,
    };
  });
  builder.addCase(actions.changeOfferNumber, (state, action) => {
    return {
      ...state,
      offerNumber: action.payload,
    };
  });
  builder.addCase(actions.resetCalculator, state => {
    return {
      ...state,
      purpose: ``,
      price: ``,
      firstPayment: ``,
      loanTerm: ``,
      offer: {},
      isMother: false,
      isInsuranceAuto: false,
      isInsuranceLive: false,
    };
  });
});

export { DATA };
