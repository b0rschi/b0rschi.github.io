const response = {
    coords: [55.75807190173886,37.613490808593724],
    zoom: '12',
    placemarks: [
      {
        coords: [55.75739358901164,37.56702860197952],
        flatsCounter: '3',
        title: 'ЖК Премиум-квартал JAZZ',
        img: 'img/house.jpg',
        area: 'Марьина роща',
        walkTime: '2 минуты пешком',
        address: 'Марьина роща, ул. Сущевский вал, 49',
        price1: '6 900 000 р.',
        price2: 'от 22 900 000 р.',
        price3: 'от 17 400 000 р.',
        price4: 'от 63 200 000 р.',
        stage: 'На заселении',
        mortgage: 'Есть',
        finish: 'Возможна',
        show: '#'
      },
      {
        coords: [55.76002667023116,37.63255928357306],
        flatsCounter: '7',
        title: 'ДОМ «Флагман»',
        img: 'img/house.jpg',
        area: 'Выхино',
        walkTime: '10 минут на транспорте',
        address: 'Московская область, г. Долгопрудный, ул. Набережная',
        price1: 'от 3 239 397 р.',
        price2: 'от 4 734 000 р.',
        price3: 'от 6 512 440 р.',
        price4: 'от 63 200 000 р.',
        stage: 'Введен в эксплуатацию',
        mortgage: 'Есть',
        finish: 'Возможна',
        show: '#'
      },
      {
        coords: [55.7346585914766,37.63393257458868],
        flatsCounter: '11',
        title: 'Микрорайон Некрасовка',
        img: 'img/house.jpg',
        area: 'Марьина роща',
        walkTime: '2 минуты пешком',
        address: 'Марьина роща, ул. Сущевский вал, 49',
        price1: '8 900 000 р.',
        price2: 'от 20 400 000 р.',
        price3: 'от 18 400 000 р.',
        price4: 'от 65 300 000 р.',
        stage: 'На заселении',
        mortgage: 'Нет',
        finish: 'Возможна',
        show: '#'
      }
    ]
  }



  ymaps.ready(init);


  function init(){
    var map = new ymaps.Map('map', {
      center: response.coords,
      zoom: response.zoom,
      controls: [],
      behaviors: ['drag']
    });

    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div class="map__marker-content">$[properties.iconContent]</div>'
        );

        for(let i=0; i<response.placemarks.length; i++){

          var placemark = new ymaps.Placemark(response.placemarks[i].coords, {
      iconContent: response.placemarks[i].flatsCounter,
      hintContent: response.placemarks[i].title,
      balloonContent: [
              "<div class='house'>",
              "<div class='house__look'>",
              "<img src='" + response.placemarks[i].img +"' alt='' class='house__image'>",
              "</div>",
              "<div class='house__info'>",
              "<h5 class='house__cap'>" + response.placemarks[i].title + "</h5>",
              "<p class='house__adr'>",
              "<span class='house__metro house__metro--green'>"+ response.placemarks[i].area +"</span>",
              "<span class='house__time'>"+ response.placemarks[i].walkTime +"</span>",
              "<span class='house__fulladr'>"+response.placemarks[i].address +"</span>",
              "</p>",
              "<div class='house__rooms'>",
              "<p class='house__flat'>",
              "<span class='house__room'>1-комнатные от 30 м² </span><span class='house__flat-price'>"+response.placemarks[i].price1+"</span>",
              "</p>",
              "<p class='house__flat'>",
              "<span class='house__room'>1-комнатные от 75 м²</span> <span class='house__flat-price'>"+response.placemarks[i].price2+"</span>",
              "</p>",
              "<p class='house__flat'>",
              "<span class='house__room'>3-комнатные от 74 м²</span> <span class='house__flat-price'>"+response.placemarks[i].price3+"</span>",
              "</p>",
              "<p class='house__flat'>",
              "<span class='house__room'>4-комнатные от 177 м²</span> <span class='house__flat-price'>"+response.placemarks[i].price4+"</span>",
              "</p>",
              "</div>",
              "<div class='house__adds'>",
              "<p class='house__opt'>",
              "<span class='house__option'>Стадия готовности:</span><span class='house__opt-value'>"+response.placemarks[i].stage+"</span>",
              "</p>",
              "<p class='house__opt'><span class='house__option'>Ипотека:</span><span class='house__opt-value'>"+response.placemarks[i].mortgage+"</span></p>",
              "<p class='house__opt'><span class='house__option'>Отделка:</span><span class='house__opt-value'>"+response.placemarks[i].finish+"</span></p>",
              "</div>",
              "<a href='"+response.placemarks[i].show+"' class='house__btn btn'>Заказать просмотр</a>",
              "</div>",
              "</div>"
              ].join(''),

    },
    {
      balloonMaxWidth: 530,
      balloonMaxHeight: 430,
      iconLayout: 'default#imageWithContent',
      iconImageHref: 'img/marker.svg',
      iconImageSize: [40, 48],
      iconImageOffset: [-24, -47],
      iconContentOffset: [12, 12],
      iconContentLayout: MyIconContentLayout

    }

    );

    map.geoObjects.add(placemark);

        }

  }
