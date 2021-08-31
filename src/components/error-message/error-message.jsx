import { useSelector } from 'react-redux';
import { MinLoanAmount, LoanPurpose } from '../../const';

const ErrorMessage = () => {
  const { purpose } = useSelector(state => state.DATA);

  const loanType = purpose === LoanPurpose.MORTGAGE ? `ипотечные кредиты` : `автокредиты`;
  const loanAmountMin =
    purpose === LoanPurpose.MORTGAGE ? MinLoanAmount.MORTGAGE : MinLoanAmount.AUTO;

  return (
    <div className="step2__error message-error">
      <p className="message-error__message">
        Наш банк не выдаёт {loanType} меньше {loanAmountMin.toLocaleString(`ru-RU`)} рублей.
      </p>
      <p className="message-error__text">Попробуйте использовать другие параметры для расчёта.</p>
    </div>
  );
};

export default ErrorMessage;
