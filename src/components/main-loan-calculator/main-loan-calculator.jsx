import { useEffect, useState } from 'react';
import Step1 from './Steps/step-1';
import Step2 from './Steps/step-2';
import Step3 from './Steps/step-3';
import { useDispatch, useSelector } from 'react-redux';
import Offer from './Offer/offer';
import Popup from '../popup/popup';
import SubmitPopup from '../submit-popup/submit-popup';
import { resetCalculator } from '../../store/actions';

const MainLoanCalculator = () => {
  const { purpose } = useSelector(state => state.DATA);
  const [isOffer, setOffer] = useState(false);
  const [isComplete, setComplete] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetCalculator());
  }, [isComplete]);

  return (
    <section className="page-main__loan loan-calculator">
      <div className="container">
        <h2 className="loan-calculator__title">Кредитный калькулятор</h2>
        <div className="loan-calculator__wrapper">
          <Step1 />
          {purpose && <Step2 />}
          {purpose && <Offer setActive={setOffer} />}
          {isOffer && <Step3 setActive={setOffer} openPopup={setComplete} />}
          {isComplete && (
            <Popup name={`step3`} active={isComplete} setActive={setComplete}>
              <SubmitPopup setActive={setComplete} />
            </Popup>
          )}
        </div>
      </div>
    </section>
  );
};

export default MainLoanCalculator;
