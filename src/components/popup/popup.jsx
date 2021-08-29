import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { KeyName } from '../../const';

const Popup = props => {
  const { active, setActive, handleClose, children } = props;

  const onKeydown = evt => {
    switch (evt.key) {
      case KeyName.ESC:
        setActive(false);
        break;
      default:
    }
  };

  useEffect(() => {
    document.addEventListener(`keydown`, onKeydown);
    return () => document.removeEventListener(`keydown`, onKeydown);
  });

  return (
    <section
      className={`page-login login-popup popup ${active ? `active` : ``}`}
      onClick={() => handleClose(setActive)}>
      {children}
    </section>
  );
};

Popup.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
export default Popup;
