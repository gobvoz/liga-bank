import { useState, useEffect } from 'react';
import Slider from '../slider/slider';
import Dots from '../dots/dots';
import Slide1 from '../slide-1/slide-1';
import Slide2 from '../slide-2/slide-2';
import Slide3 from '../slide-3/slide-3';

const MainHeader = () => {
  const [isActive, setActive] = useState(0);

  const slides = [<Slide1 key={1} />, <Slide2 key={2} />, <Slide3 key={3} />];

  useEffect(() => {
    setInterval(() => {
      setActive(current => {
        return current === slides.length - 1 ? 0 : current + 1;
      });
    }, 4000);
    return () => clearInterval();
  }, []);

  return (
    <section className="page-main__header main-header">
      <Slider
        name={`main-header__item`}
        isActive={isActive}
        setActive={setActive}
        slidesLength={slides.length}>
        {slides[isActive]}
      </Slider>
      <Dots
        isActive={isActive}
        setActive={setActive}
        array={slides}
        name={`main-header__controls`}
      />
    </section>
  );
};

export default MainHeader;
