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
      if (isActive === slidesLength - 1) {
        setActive(0);
      } else {
        setActive(isActive + 1);
      }
    }

    if (touchStart - touchEnd < -SWIPE_SENS) {
      if (isActive === 0) {
        setActive(slidesLength - 1);
      } else {
        setActive(isActive - 1);
      }
    }
  };

  return (
    <div
      className={name}
      key={isActive}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}>
      {children}
    </div>
  );
};

Slider.propTypes = {
  isActive: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  slidesLength: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Slider;
