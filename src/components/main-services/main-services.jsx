import { useState } from 'react';
import Slider from '../slider/slider';
import Dots from '../dots/dots';
import ServicesMenu from './services-menu/services-menu';
import Tabs1 from './tabs/tabs-1';
import Tabs2 from './tabs/tabs-2';
import Tabs3 from './tabs/tabs-3';
import Tabs4 from './tabs/tabs-4';

const MainServices = () => {
  const [isActive, setActive] = useState(0);

  const tabs = [<Tabs1 key={1} />, <Tabs2 key={2} />, <Tabs3 key={3} />, <Tabs4 key={4} />];

  return (
    <section id="services" className="page-main__services services">
      <ServicesMenu isActive={isActive} setActive={setActive} />
      <Slider
        name={`services-item`}
        isActive={isActive}
        setActive={setActive}
        slidesLength={tabs.length}>
        {tabs[isActive]}
      </Slider>
      <Dots isActive={isActive} setActive={setActive} array={tabs} name={`services__controls`} />
    </section>
  );
};

export default MainServices;
