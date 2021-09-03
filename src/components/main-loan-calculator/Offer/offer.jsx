import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setNewOffer } from '../../../store/actions';
import {
  AUTO_PRICE_RATE,
  FirstPaymentRate,
  LoanPurpose,
  MIN_FIRST_PAYMENT_RATE,
  MOTHER,
  MONTHS,
  MinLoanAmount,
  SALARY_RATE,
} from '../../../const';
import ErrorMessage from '../../error-message/error-message';

const Offer = props => {
  const { setActive } = props;
  const {
    purpose,
    price,
    firstPayment,
    loanTerm,
    isMother,
    isInsuranceAuto,
    isInsuranceLive,
    offerNumber,
  } = useSelector(state => state.DATA);
  const [isError, setError] = useState(false);

  const dispatch = useDispatch();

  const getLoanAmount = () => {
    let amount = price - (price * firstPayment) / FirstPaymentRate.MAX;
    if (isMother) {
      amount = amount - MOTHER;
    }
    return amount;
  };

  const getLoanRate = () => {
    if (purpose === LoanPurpose.MORTGAGE) {
      if (firstPayment < MIN_FIRST_PAYMENT_RATE) {
        return 9.4;
      }
      return 8.5;
    } else {
      if (isInsuranceAuto && isInsuranceLive) {
        return 3.5;
      } else if (isInsuranceAuto || isInsuranceLive) {
        return 8.5;
      } else if (price >= AUTO_PRICE_RATE) {
        return 15;
      }
    }
    return 16;
  };

  const getMonthPayment = () => {
    const amount = getLoanAmount();
    const monthRate = getLoanRate() / FirstPaymentRate.MAX / MONTHS;
    const loanPeriod = loanTerm * MONTHS;
    return parseInt(
      amount * (monthRate + monthRate / (Math.pow(1 + monthRate, loanPeriod) - 1)),
      10,
    );
  };

  const getSalary = () => {
    return parseInt((getMonthPayment() * FirstPaymentRate.MAX) / SALARY_RATE, 10);
  };

  useEffect(() => {
    if (purpose === LoanPurpose.MORTGAGE) {
      if (getLoanAmount() < MinLoanAmount.MORTGAGE) {
        setError(true);
      } else {
        setError(false);
      }
    } else if (getLoanAmount() < MinLoanAmount.AUTO) {
      setError(true);
    } else {
      setError(false);
    }
  }, [getLoanAmount()]);

  const onOfferSendHandler = () => {
    const offer = {
      id: offerNumber + 1,
      loanPurpose: purpose === LoanPurpose.MORTGAGE ? `Ипотека` : `Автокредит`,
      loanPrice: price,
      loanFirstPayment: (price * firstPayment) / FirstPaymentRate.MAX,
      loanTime: loanTerm,
    };
    dispatch(setNewOffer(offer));
    setActive(true);
  };

  return (
    <div className="loan-calculator__offer offer">
      {isError && <ErrorMessage />}
      {!isError && (
        <>
          <h3 className="offer__title">Наше предложение</h3>
          <div className="offer__wrapper">
            <div className="offer__item loan-amount">
              <p className="offer__data">{`${getLoanAmount().toLocaleString(`ru-RU`)} рублей`}</p>
              <p className="offer__comment">
                {purpose === LoanPurpose.MORTGAGE ? `Сумма ипотеки` : `Сумма автокредита`}
              </p>
            </div>
            <div className="offer__item loan-rate">
              <p className="offer__data">{`${getLoanRate().toLocaleString(`ru-RU`)}%`}</p>
              <p className="offer__comment">Процентная ставка</p>
            </div>
            <div className="offer__item loan-payment">
              <p className="offer__data">{`${getMonthPayment().toLocaleString(`ru-RU`)} рублей`}</p>
              <p className="offer__comment">Ежемесячный платеж</p>
            </div>
            <div className="offer__item loan-salary">
              <p className="offer__data">{`${getSalary().toLocaleString(`ru-RU`)} рублей`}</p>
              <p className="offer__comment">Необходимый доход</p>
            </div>
          </div>
          <button className="offer__button button" type="button" onClick={onOfferSendHandler}>
            Оформить заявку
          </button>
        </>
      )}
    </div>
  );
};

Offer.propTypes = {
  setActive: PropTypes.func.isRequired,
};

export default Offer;
