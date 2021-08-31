import PropTypes from 'prop-types';
import { popupCloseHandler } from '../../utils';

const SubmitPopup = props => {
  const { setActive } = props;

  return (
    <div className="step3__submit popup-submit" onClick={evt => evt.stopPropagation()}>
      <div className="popup-submit__header">
        <button
          className="popup-submit__btn button"
          type="button"
          aria-label="Закрыть"
          onClick={() => popupCloseHandler(setActive)}></button>
      </div>
      <div className="popup-submit__container">
        <p className="popup-submit__message ">Спасибо за обращение в наш банк.</p>
        <p className="popup-submit__text ">
          Наш менеджер скоро свяжется с вами по указанному номеру телефона.
        </p>
      </div>
    </div>
  );
};

SubmitPopup.propTypes = {
  setActive: PropTypes.func.isRequired,
};

export default SubmitPopup;
