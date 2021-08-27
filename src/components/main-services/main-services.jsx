import { useState } from 'react';
import Dots from '../dots/dots';
import { SWIPE_SENS } from '../../const';
import ServicesMenu from './services-menu/services-menu';
import Tabs1 from './tabs/tabs-1';
import Tabs2 from './tabs/tabs-2';
import Tabs3 from './tabs/tabs-3';
import Tabs4 from './tabs/tabs-4';

const MainServices = () => {
  const [isActive, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const tabs = [<Tabs1 key={1} />, <Tabs2 key={2} />, <Tabs3 key={3} />, <Tabs4 key={4} />];

  const handleTouchStart = evt => {
    setTouchStart(evt.targetTouches[0].clientX);
  };

  const handleTouchMove = evt => {
    setTouchEnd(evt.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > SWIPE_SENS) {
      if (isActive === tabs.length - 1) {
        setActive(0);
      } else {
        setActive(isActive + 1);
      }
    }

    if (touchStart - touchEnd < -SWIPE_SENS) {
      if (isActive === 0) {
        setActive(tabs.length - 1);
      } else {
        setActive(isActive - 1);
      }
    }
  };

  return (
    <section className="page-main__services services">
      <ServicesMenu isActive={isActive} setActive={setActive} />
      <div
        className="services__item"
        key={isActive}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}>
        {tabs[isActive]}
      </div>
      <Dots isActive={isActive} setActive={setActive} array={tabs} name={`services__controls`} />
    </section>
  );
};

export default MainServices;
