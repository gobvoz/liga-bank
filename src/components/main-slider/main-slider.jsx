import React, {useState, useEffect} from 'react';
import Dots from '../dots/dots';
import Slide1 from '../slide-1/slide-1';
import Slide2 from '../slide-2/slide-2';
import Slide3 from '../slide-3/slide-3';
import {SWIPE_SENS} from '../../const';

const MainSlider = () => {
  const [isActive, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const slides = [
    <Slide1 key={1}/>,
    <Slide2 key={2}/>,
    <Slide3 key={3}/>
  ];

  useEffect(() => {
    setInterval(() => {
      setActive((current) => {
        return current === slides.length - 1 ? 0 : current + 1;
      });
    }, 4000);
    return () => clearInterval();
  }, []);

  const handleTouchStart = (evt) => {
    setTouchStart(evt.targetTouches[0].clientX);
  };

  const handleTouchMove = (evt) => {
    setTouchEnd(evt.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > SWIPE_SENS) {
      if (isActive === slides.length - 1) {
        setActive(0);
      } else {
        setActive(isActive + 1);
      }
    }

    if (touchStart - touchEnd < -SWIPE_SENS) {
      if (isActive === 0) {
        setActive(slides.length - 1);
      } else {
        setActive(isActive - 1);
      }
    }
  };

  return (
    <section className="page-main__slider slider">
      <div
        className="slider__item"
        key={isActive}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides[isActive]}
      </div>
      <Dots isActive={isActive} setActive={setActive} />
    </section>
  );
};

export default MainSlider;
