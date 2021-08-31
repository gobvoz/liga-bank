import { TABS_MENU } from '../../../const';
import PropTypes from 'prop-types';

const ServicesMenu = props => {
  const { isActive, setActive } = props;

  const onMenuClickHandler = index => {
    setActive(index);
  };
  return (
    <div className="services__menu tabs-menu">
      <div className="container">
        <ul className="tabs-menu__list">
          {TABS_MENU.map((item, index) => (
            <li key={index} className="tabs-menu__item" onClick={() => onMenuClickHandler(index)}>
              <button
                className={`tabs-menu__btn ${isActive === index && `active`}`}
                type="button"
                disabled={isActive === index}>
                {item.icon}
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

ServicesMenu.propTypes = {
  isActive: PropTypes.number.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default ServicesMenu;
