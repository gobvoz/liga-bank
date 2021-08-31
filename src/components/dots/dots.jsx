import PropTypes from 'prop-types';

const Dots = props => {
  const { isActive, setActive, array, name } = props;

  const onButtonClickHandler = evt => {
    const currentSlide = parseInt(evt.target.dataset.number, 10);
    setActive(currentSlide);
  };

  return (
    <div className={`${name} dots`}>
      {array.map((item, index) => (
        <button
          key={index}
          className={`dots__btn button ${isActive === index && `active`}`}
          type="button"
          aria-label={`Кнопка-${index}`}
          data-number={`${index}`}
          onClick={onButtonClickHandler}
          disabled={isActive === index}></button>
      ))}
    </div>
  );
};

Dots.propTypes = {
  isActive: PropTypes.number.isRequired,
  setActive: PropTypes.func.isRequired,
  array: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};

export default Dots;
