/**
 * Created by tix on 6/6/17.
 */
(function () {
  'use strict';

  angular
    .module('touristMapReviewFrontend')
    .factory('dummyData', getDummyData);
  /** @ngInject */
  function getDummyData() {

    var singleMarker = {
      img: '/assets/images/olga.jpg',
      title: 'Храм Ольги та Єлижбети',
      description: 'В останній половині ХІХ століття в Європі дуже інтенсивно почали розвиватися шляхи сполучення, а особливо залізничний транспорт. В західній частині Львова був споруджений залізничний вокзал з інфраструктурою та почалася забудова навколишньої місцевості будинками помешкань для залізничників, так звані „коліївки”. Населення цього району міста прибувало з центральних районів Польщі та околиць Львова. Великі темпи приросту, особливо польськомовних мешканців, вимагали задоволення їхніх релігійних потреб. Чому в основному польськомовного населення? В ці часи українці не могли одержати на теренах Західної України освіту необхідну для обслуговування залізничного транспорту, а етнічні поляки мали можливість одержувати її в навчальних закладах Німеччини та Австро-Угорщини. Крім того, залізниця в усі часи вважалася стратегічною галуззю, і туди з певних міркувань не пускали грекокатоликів та православних. Місцем спорудження обрали площу Солярні, обабіч вулиці Городоцької. Вибір було зроблено так, щоб споруда костелу закривала від головного вокзалу вид на Собор св. Юра, який був грекокатолицьким, і нагадував всім прибуваючим до Львова залізницею, що тут живуть українці. Будувався костьол за кошти залізничників для їхньої парафії. Був проведений конкурс проектів, в якому взяло участь 19 учасників, серед яких найкращим був визнаний проект під девізом «Тріо», виконаний професором Львівського політехнічного інституту Теодором Тальовським (1857–1910) – відомим архітектором свого часу, вихованцем політехніки Відня та Львова, учнем львівського архітектора Юліана Захарієвича. Під час проектування споруда костелу була введена в уже існуючий архітектурний ансамбль. Архітектори та будівничі прийняли єдино правильне рішення – спорудити майбутній храм в традиціях готичної архітектури. Будівництво костьолу розпочалося восени 1904 р. під керівництвом інженера Кароля Ріхтмана з закладання фундаментів, спочатку планувалося завершити будівництво в 1907 р.',
      location: [49.836907, 24.004869],
      short_description: "Неоготичний храм у Львові, на площі Кропивницького. Костел збудовано на пам'ять про популярну імператрицю Єлизавету Баварську, відому як Сісі, — дружину цісаря Австро-Угорщини Франца-Йосифа I",
      propositions: [
        {img: 'assets/images/yura.jpg', title: 'Храм св. Юра'},
        {img: 'assets/images/bandera.jpg', title: "Пам'ятник Бандері"},
        {img: 'assets/images/cyrk.jpg', title: 'Цирк'}
      ],
      comments: [
        {
          user: 'Roman',
          text: "Зовні казковий храм, в середині світлий чистий, дуже просторий . Дуже красиві служби ,інколи мурашки бігають по шкірі. А ще оглядовий майданчик з якого видно гарну панораму міста."
        },
        {
          user: 'Олег',
          text: 'Перше "вау!" від когось з друзів,коли привожу їх вперше до Львова адресується цьому Храму.А як ще й вночі,то взагалі...:)'
        },
        {
          user: 'Тарас',
          text: 'Цей Храм одне із перших, що кидається в очі по приїзді у місто, мабуть тому що знаходиться неподалік вокзалу. Є однією з візитівок міста Лева. Вражає своєю архітектурною довершеністю і величчю, дуже красивий також і в середині.'
        }
      ]
    };
    var multiMarkers = [
      {
        img: '/assets/images/bandera.jpg',
        title: "Пам'ятник Бандері",
        location: [49.835969, 24.005816],
        short_description: "Пам'ятник Степа́нові Банде́рі у Льво́ві на площі Кропивницького знаходиться біля Собору святих Єлизавети і Ольги. "

      },
      {
        img: '/assets/images/cyrk.jpg',
        title: 'Цирк',
        location: [49.839978, 24.013623],
        short_description: "Львівський державний цирк — цирк у Львові за адресою вулиця Городоцька, 83, біля підніжжя Святоюрської гори. Будинок цирку збудований у 1969 році за проектом архітекторів Адольфа Бахматова і Михайла Каневського."
      },
      {
        img: '/assets/images/olga.jpg',
        title: 'Храм Ольги та Єлижбети',
        location: [49.836907, 24.004869],
        short_description: "Неоготичний храм у Львові, на площі Кропивницького. Костел збудовано на пам'ять про популярну імператрицю Єлизавету Баварську, відому як Сісі, — дружину цісаря Австро-Угорщини Франца-Йосифа I"
      },
      {
        img: '/assets/images/vokzal.jpg',
        title: 'Залізничний вокзал',
        location: [49.839742, 23.994172],
        short_description: "Головни́й залізни́чний вокза́л — вокзал станції Львів. Головний вокзал Львова та Львівської залізниці. Історично, це перший вокзал на території сучасної України."
      },
      {
        img: '/assets/images/yura.jpg',
        title: 'Собор св. Юра',
        location: [49.838537, 24.0129069],
        short_description: "Архикафедра́льний собо́р свято́го Ю́ра у Львові — собор Галицької митрополії УГКЦ, до 1817 при монастирі Чину св. Василія Великого, бароково-рококовий монументальний архітектурний ансамбль з виразними національними рисами (1744–1762), "
      },
      {
        img: '/assets/images/politech.jpg',
        title: 'Львівська Політехніка',
        location: [49.835301, 24.014378],
        short_description: "Націона́льний університе́т «Льві́вська політе́хніка» — найстаріший вищий технічний навчальний заклад України та Східної Європи, заснований 1816 року як Реальна школа, коли австрійський імператор Франц І дозволив відкрити у Львові Реальну школу."
      },
      {
        location: [49.839593, 24.099346],
        img: '/assets/images/prov.jpeg',
        title: "Відпочинок біля озера Провесінь",
        short_description: "Чудове місце для відпочинку з дітьми у прохолоді біля озера"
      }
    ];


    return {
      marker: singleMarker,
      markers: multiMarkers
    }
  }
})();
