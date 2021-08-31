import { useSelector } from 'react-redux';
import { LOAN_AMOUNT_MIN, LoanPurpose } from '../../const';

const ErrorPopup = () => {
  const { purpose } = useSelector(state => state.DATA);

  const loanType = purpose === LoanPurpose.MORTGAGE ? `ипотечные кредиты` : `автокредиты`;
  const loanAmountMin =
    purpose === LoanPurpose.MORTGAGE ? LOAN_AMOUNT_MIN.MORTGAGE : LOAN_AMOUNT_MIN.AUTO;

  return (
    <div className="step2__error popup-error" onClick={evt => evt.stopPropagation()}>
      <p className="popup-error__message">
        Наш банк не выдаёт {loanType} меньше {loanAmountMin.toLocaleString(`ru-RU`)} рублей.
      </p>
      <p className="popup-error__text">Попробуйте использовать другие параметры для расчёта.</p>
    </div>
  );
};

export default ErrorPopup;
