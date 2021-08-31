import { YMaps, Map, Placemark, ZoomControl, GeolocationControl } from 'react-yandex-maps';
import { PlaceMarkCords } from '../../const';

const MainContact = () => {
  return (
    <section className="page-main__contact contact">
      <div className="container">
        <h2 className="contact__title">Отделения Лига Банка</h2>
        <YMaps>
          <div className="contact__map map">
            <Map
              className="map__body"
              defaultState={{
                center: [56.86491379, 60.36021131],
                zoom: 5,
                controls: [],
              }}>
              <ZoomControl
                options={{
                  position: { right: `10px`, bottom: `120px` },
                }}
              />
              <GeolocationControl
                options={{
                  position: { right: `10px`, bottom: `80px` },
                }}
              />
              {PlaceMarkCords.map((mark, index) => (
                <Placemark
                  key={index}
                  geometry={mark}
                  options={{
                    iconLayout: `default#image`,
                    iconImageHref: `./img/location.svg`,
                    iconImageSize: [37, 42],
                    iconImageOffset: [-17, -42],
                  }}
                />
              ))}
            </Map>
          </div>
        </YMaps>
      </div>
    </section>
  );
};

export default MainContact;
