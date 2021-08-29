import { useRef, useState } from 'react';
import { LoanPurpose, PurposeValue } from '../../const';

const MainLoanCalculator = () => {
  const [isClose, setClose] = useState(false);
  const [isPurpose, setPurpose] = useState(``);
  const purpose = useRef();

  const openPurposeHandler = () => {
    setClose(!isClose);
  };

  const choiceClickHandler = evt => {
    evt.preventDefault();
    const choice = evt.target.dataset.choice;
    setPurpose(choice);
    purpose.current.value = PurposeValue[isPurpose];
  };

  return (
    <section className="page-main__loan loan-calculator">
      <div className="container">
        <h2 className="loan-calculator__title">Кредитный калькулятор</h2>
        <div className="loan-calculator__wrapper">
          <div className="loan-calculator__step1 step1">
            <h3 className="step1__title">Шаг 1. Цель кредита</h3>
            <label className="step1_label">
              <input
                ref={purpose}
                aria-label="Цель кредита"
                className="step1_field"
                type="text"
                name="purpose"
                placeholder="Выберите цель кредита"
                onClick={openPurposeHandler}
                disabled={true}
              />
              <button
                className="step1__button button step1__button--open"
                aria-label={!isClose ? `Открыть` : `Закрыть`}
                onClick={openPurposeHandler}></button>
              <ul className="step1__list">
                <li className="step1__choice">
                  <a
                    href="#"
                    className="step1__link"
                    data-choice={LoanPurpose.MORTGAGE}
                    onClick={choiceClickHandler}>
                    Ипотечное кредитование
                  </a>
                </li>
                <li className="step1__choice">
                  <a
                    href="#"
                    className="step1__link"
                    data-choice={LoanPurpose.AUTO}
                    onClick={choiceClickHandler}>
                    Автомобильное кредитование
                  </a>
                </li>
              </ul>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainLoanCalculator;
