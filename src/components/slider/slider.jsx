import { useState } from 'react';
import PropTypes from 'prop-types';
import { SWIPE_SENS } from '../../const';

const Slider = props => {
  const { isActive, setActive, slidesLength, name, children } = props;
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = evt => {
    setTouchStart(evt.targetTouches[0].clientX);
  };

  const handleTouchMove = evt => {
    setTouchEnd(evt.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > SWIPE_SENS) {
      setActive(isActive === slidesLength - 1 ? 0 : (isActive + 1) % slidesLength);
    }
    if (touchStart - touchEnd < -SWIPE_SENS) {
      setActive(isActive === 0 ? slidesLength - 1 : (isActive - 1) % slidesLength);
    }
  };

  return (
    <div
      className={`${name} slider`}
      key={isActive}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}>
      {children}
    </div>
  );
};

Slider.propTypes = {
  isActive: PropTypes.number.isRequired,
  setActive: PropTypes.func.isRequired,
  slidesLength: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Slider;
