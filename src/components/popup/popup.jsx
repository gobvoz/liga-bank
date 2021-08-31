import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { KeyName } from '../../const';
import { popupCloseHandler } from '../../utils';

const Popup = props => {
  const { name, active, setActive, children } = props;

  const onKeydown = evt => {
    switch (evt.key) {
      case KeyName.ESC:
        popupCloseHandler(setActive);
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
      className={`${name}__popup popup ${active ? `active` : ``}`}
      onClick={() => popupCloseHandler(setActive)}>
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
