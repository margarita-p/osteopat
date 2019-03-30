const mapСontent = document.querySelector("#map");

if (mapСontent) {
  ymaps.ready(function () {
    const map = new ymaps.Map('map', {
      center: [44.582369, 33.519233],
      zoom: 16,
      scrollZoom: false,
      controls: []
    }, {
      searchControlProvider: 'yandex#search'
    }),
    Placemark = new ymaps.Placemark([44.582369, 33.519233], {
      balloonContent: 'г. Севастополь, пр. Генерала Острякова, 15, оф., 41'
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'assets/images/icon.png',
      iconImageSize: [40, 40],
      iconImageOffset: [-20, -20],
    });

    map.geoObjects.add(Placemark);
    map.behaviors.disable('scrollZoom');
    map.controls.add('zoomControl');
    const roadcontrolState = map.controls.get('zoomControl').state.get('size');
    map.controls.get('zoomControl').options.set('size', 'small');
  });
};
