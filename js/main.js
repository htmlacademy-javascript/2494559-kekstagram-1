// Кекстаграм

class CreateObj {
  constructor() {
    this.id = CreateObj.creatNoRepNum(25, 1, CreateObj.allId);
    this.url = `photos/${CreateObj.creatNoRepNum(25, 1, CreateObj.allUrl)}.jpg`;
    this.description = CreateObj.descrip.at(
      CreateObj.creatNum(1, CreateObj.descrip.length - 1)
    );
    this.likes = CreateObj.getLike(200, 15);
    this.comments = CreateObj.getDataComments();
  }

  static allId = new Set();
  static allUrl = new Set();
  static allIdCom = new Set();
  static descrip = [
    'Путешествие к закату: волшебство красок и теплых оттенков.',
    'Отражение приключений: встречайте новые горизонты.',
    'Дорога в никуда: искривленные перспективы и неизведанные возможности.',
    'Дыхание экзотики: наслаждайтесь ароматами и вкусами мира.',
    'Природа в объективе: величие и красота нашей планеты.',
    'Поднимаясь к вершинам: преодолевайте препятствия и достигайте целей.',
    'Суетливый город: ритм городской жизни в эмоциональном кадре.',
    'Мгновения спокойствия: уединение и покой в жизни на дороге.',
    'Красота разнообразия: откройте мир местных традиций и культур.',
    'Архитектурные шедевры: впитайте красоту исторических достопримечательностей.',
    'Вкус приключения: отличная еда и насыщенный вкус путешествий.',
    'Игра света и тени: преображение обыденных моментов в искусство.',
    'Морские приключения: синева моря и его волнующая мощь.',
    'Живописные виды: захватывающие пейзажи и их удивительная красота.',
    'Увлекательные улицы: культурные сокровища и колорит городских улочек.',
    'Взгляд в глубину: загадочность и тайна старинных замков и руин.',
    'Сохраните момент: уловите мелкие детали и крохотные радости на пути.',
    'Эмоции в движении: захватите энергию и динамику моментов в кадре.',
    'Плавание среди облаков: подарите себе удовольствие полета и взгляните на мир с высоты.',
    'Отражение культуры: погрузитесь в местные традиции и обычаи.',
    'В поисках приключений: покоряйте новые места и совершайте удивительные открытия.',
    'Симфония цветов и ароматов: увлекательные моменты в мире растений и цветов.',
    'Подводные чудеса: загадочный мир океанских глубин и его удивительные создания.',
    'Встречи в пути: познакомьтесь с потрясающими людьми и их историями.',
    'Время отдыха: расслабьтесь и наслаждайтесь моментом в тени пальмы или на берегу озера.',
  ];

  static creatNum(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
  }

  static creatNoRepNum(max, min, obj) {
    function check() {
      function random() {
        return Math.floor(Math.random() * (max - min + min)) + min;
      }

      const NUM = random();

      if (obj.has(NUM)) {
        return check();
      } else {
        obj.add(NUM);
        return NUM;
      }
    }
    return check();
  }

  static getLike(max, min) {
    return (this.likes = Math.floor(Math.random() * (max - min + min)) + min);
  }

  static getDataComments() {
    const NAMES = ['Реймонд', 'Майкл', 'Флетчер', 'Мэтью', 'Найджел', 'Мэйсон'];

    const MESSAGE = [
      'Всё отлично!',
      'В целом всё неплохо. Но не всё.',
      'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
      'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
      'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
      'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
    ];

    return {
      id: CreateObj.creatNoRepNum(999, 1, CreateObj.allIdCom),
      avatar: `img/avatar-${Math.floor(Math.random() * (6 - 1 + 1)) + 1}.svg`,
      message:
        MESSAGE[Math.floor(Math.random() * (MESSAGE.length - 1 - 1 + 1) + 1)],
      name: NAMES[Math.floor(Math.random() * (NAMES.length - 1) - 1 + 1)],
    };
  }
}

Array.from({ length: 25 }, () => new CreateObj());



// Кексобукинг

class CreateObjTwo {
  constructor() {
    this.author = CreateObjTwo.creatAuthor();
    this.offer = CreateObjTwo.creatOffer();
    this.location = CreateObjTwo.creatLocation();
  }

  static allAuthor = new Set();
  static allType = [
    'palace',
    'flat',
    'house',
    'bungalow',
    'hotel',
  ];

  static descrip = [
    'Продается уютный дом с современным дизайном и просторной террасой, идеальный для семейной жизни.',
    'Живописный загородный дом в окружении природы и свежего воздуха идеально подойдет для тех, кто ценит спокойствие.',
    'Продается роскошный особняк с прекрасным видом на море, собственным бассейном и доступом к пляжу.',
    'Удобный дом в экологически чистом районе с развитой инфраструктурой и хорошей транспортной доступностью.',
    'Просторный дом с большим участком земли и садом, идеальный для тех, кто любит заниматься садоводством.',
    'Продается уютное коттеджное поселение с обширной территорией для прогулок и отдыха на природе.',
    'Атмосферный дом в старинном стиле с камином и оригинальным декором - отличное предложение для ценителей исторического наследия.',
    'Идеальный выбор для инвесторов - недорогие дома в развивающемся районе с потенциалом для последующей перепродажи.',
    'Продается современный таунхаус с охраняемой территорией и удобным расположением рядом с городской инфраструктурой.',
    'Элитный дом премиум-класса с высокими потолками, эксклюзивной мебелью и роскошной обстановкой, подчеркнет статус его нового владельца.',
  ];

  static allFeatures = [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner',
  ];

  static allPhotos = [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
  ];

  static creatNum(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
  }

  static creatNoRepNum(max, min, obj) {

    function check() {
      function random() {
        return Math.floor(Math.random() * (max - min + min)) + min;
      }

      let num = random();

      if (obj.has(num)) {
        return check();
      } else {
        obj.add(num);
        return num;
      }
    }
    return check();
  }

  static creatAuthor() {
    let result = CreateObjTwo.creatNoRepNum(10, 1, CreateObjTwo.allAuthor);
    if (result < 10) {
      result = '0' + result;
    }
    return {
      avatar: `img/avatars/user${result}.png`,
    };
  }

  static creatArr(obj) {
    const ARR = [];

    const VALALLFEATURES = new Set();

    ARR.length = Math.floor(1 + Math.random() * (obj.length + 1 - 1));

    for (let i = 0; i <= ARR.length - 1; i++) {
      function check() {
        function random() {
          return Math.floor(Math.random() * (obj.length - 1 + 1));
        }

        const NUM = random();

        if (VALALLFEATURES.has(NUM)) {
          return check();
        } else {
          VALALLFEATURES.add(NUM);
          ARR[i] = obj.at(NUM);
        }
      }
      check();
    }
    return ARR;
  }

  static creatOffer() {
    return {
      title: CreateObjTwo.descrip.at(
        CreateObjTwo.creatNum(0, CreateObjTwo.descrip.length - 1)
      ),
      address: CreateObjTwo.creatLocation(),
      price: CreateObjTwo.creatNum(1, 1000000),
      type: CreateObjTwo.allType.at(
        CreateObjTwo.creatNum(0, CreateObjTwo.allType.length - 1)
      ),
      rooms: CreateObjTwo.creatNum(1, 10),
      guests: CreateObjTwo.creatNum(1, 10),
      checkin: `${CreateObjTwo.creatNum(12, 14)}:00`,
      checkout: `${CreateObjTwo.creatNum(12, 14)}:00`,
      features: CreateObjTwo.creatArr(CreateObjTwo.allFeatures),
      description: CreateObjTwo.descrip.at(
        CreateObjTwo.creatNum(0, CreateObjTwo.descrip.length - 1)
      ),
      photos: CreateObjTwo.creatArr(CreateObjTwo.allPhotos),
    };
  }

  static creatLocation() {

    return {
      lat: Number((Math.random() * (35.7 - 35.65) + 35.65).toFixed(5)),
      lng: Number((Math.random() * (139.8 - 139.7) + 139.7).toFixed(5)),
    };
  }
}
