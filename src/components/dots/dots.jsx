import PropTypes from 'prop-types';
import { Slides } from '../../const';

const Dots = props => {
  const { isActive, setActive } = props;

  const onButtonClickHandler = evt => {
    const currentSlide = parseInt(evt.target.dataset.number, 10) - 1;
    setActive(currentSlide);
  };

  return (
    <div className="slider__controls">
      <button
        className={`slider__btn button ${isActive === Slides.SLIDE1 && `active`}`}
        type="button"
        aria-label="Кнопка 1"
        data-number="1"
        onClick={onButtonClickHandler}
        disabled={isActive === Slides.SLIDE1}></button>
      <button
        className={`slider__btn button ${isActive === Slides.SLIDE2 && `active`}`}
        type="button"
        aria-label="Кнопка 2"
        data-number="2"
        onClick={onButtonClickHandler}
        disabled={isActive === Slides.SLIDE2}></button>
      <button
        className={`slider__btn button ${isActive === Slides.SLIDE3 && `active`}`}
        type="button"
        aria-label="Кнопка 3"
        data-number="3"
        onClick={onButtonClickHandler}
        disabled={isActive === Slides.SLIDE3}></button>
    </div>
  );
};

Dots.propTypes = {
  isActive: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default Dots;
