import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  CHANGE_MENU: `data/changeMenu`,
  CHANGE_PURPOSE: `data/changePurpose`,
  CHANGE_PRICE: `data/changePrice`,
  CHANGE_FIRST_PAYMENT: `data/changeFirstPayment`,
  CHANGE_LOAN_TERM: `data/changeLoanTerm`,
  CHANGE_MOTHER_MONEY: `data/changeMotherMoney`,
  CHANGE_INSURANCE_AUTO: `data/changeInsuranceAuto`,
  CHANGE_INSURANCE_LIVE: `data/changeInsuranceLive`,
  SET_NEW_OFFER: `data/setNewOffer`,
  CHANGE_OFFER_NUMBER: `data/changeOfferNumber`,
  RESET_CALCULATOR: `data/resetCalculator`,
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

export const changePurpose = createAction(ActionType.CHANGE_PURPOSE, newPurpose => {
  return {
    payload: newPurpose,
  };
});

export const changePrice = createAction(ActionType.CHANGE_PRICE, newPrice => {
  return {
    payload: newPrice,
  };
});

export const changeFirstPayment = createAction(ActionType.CHANGE_FIRST_PAYMENT, newFirstPayment => {
  return {
    payload: newFirstPayment,
  };
});

export const changeLoanTerm = createAction(ActionType.CHANGE_LOAN_TERM, newLoanTerm => {
  return {
    payload: newLoanTerm,
  };
});

export const changeMotherMoney = createAction(ActionType.CHANGE_MOTHER_MONEY, newMotherMoney => {
  return {
    payload: newMotherMoney,
  };
});

export const changeInsuranceAuto = createAction(
  ActionType.CHANGE_INSURANCE_AUTO,
  newInsuranceAuto => {
    return {
      payload: newInsuranceAuto,
    };
  },
);

export const changeInsuranceLive = createAction(
  ActionType.CHANGE_INSURANCE_LIVE,
  newInsuranceLive => {
    return {
      payload: newInsuranceLive,
    };
  },
);

export const setNewOffer = createAction(ActionType.SET_NEW_OFFER, newOffer => {
  return {
    payload: newOffer,
  };
});

export const changeOfferNumber = createAction(ActionType.CHANGE_OFFER_NUMBER, newNumber => {
  return {
    payload: newNumber,
  };
});

export const resetCalculator = createAction(ActionType.RESET_CALCULATOR);
