import { TABS_MENU } from '../../../const';
import PropTypes from 'prop-types';

const ServicesMenu = props => {
  const { isActive, setActive } = props;

  const onMenuClickHandler = evt => {
    const currentSlide = parseInt(evt.target.dataset.number, 10);
    setActive(currentSlide);
  };
  return (
    <div className="services__menu tabs-menu">
      <div className="container">
        <ul className="tabs-menu__list">
          {TABS_MENU.map((item, index) => (
            <li key={index} className="tabs-menu__item">
              <button
                className={`tabs-menu__btn ${isActive === index && `active`}`}
                type="button"
                data-number={`${index}`}
                onClick={onMenuClickHandler}
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
  isActive: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default ServicesMenu;
