import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { KeyName } from '../../const';
import { popupCloseHandler } from '../../utils';

const Popup = props => {
  const { name, active, setActive, children } = props;

  const onKeydown = evt => {
    if (evt.key === KeyName.ESC) {
      popupCloseHandler(setActive);
    }
  };

  useEffect(() => {
    document.addEventListener(`keydown`, onKeydown);
    return () => document.removeEventListener(`keydown`, onKeydown);
  });

  return (
    <section
      className={`${name}__popup popup ${active ? `active` : ``}`}
      onClick={() => popupCloseHandler(setActive)}>
      <h3 className="popup-title visually-hidden">Модальное окно</h3>
      {children}
    </section>
  );
};

Popup.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Popup;
