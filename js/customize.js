// -----  基本功能開關   ---------------------------------------------------
window.addEventListener('load', () => {
  topNav(); // 手機版顯示nav選單
  //navSticky(); // 捲動時固定主選單
  xSlider('.language button', '.language ul'); //語系
  fontSize(); // 全站字體
  //fatFooter(); // fatFooter是否要展開
  scrollTables('.tableWrapper'); // table捲動功能

  webSearch();

  // search tab
  tabFunction({
    target: '.searchTab',
    openFirst: false, // 預設先展開所有內容，鍵盤的自動開合功能無效
    openSwitch: true, // 是否可開合/切換
    autoClose: true, // 自動關閉其他開啟內容
    modeSwitch: false, // 預設模式自動切換，尺寸以上tab功能，尺寸以下手風琴功能
    width: 767, // 尺寸以上tab功能，尺寸以下手風琴功能
    index: 0, // 預設開啟第幾個
  });

  //主題/新書展示 tab
  tabFunction({
    target: '.bookListsTab',
    openFirst: false, // 預設先展開所有內容，鍵盤的自動開合功能無效
    openSwitch: true, // 是否可開合/切換
    autoClose: true, // 自動關閉其他開啟內容
    modeSwitch: true, // 預設模式自動切換，尺寸以上tab功能，尺寸以下手風琴功能
    width: 767, // 尺寸以上tab功能，尺寸以下手風琴功能
    index: 0, // 預設開啟第幾個
  });

  // 最新消息 tab
  tabFunction({
    target: '.newsTab',
    openFirst: false, // 預設先展開所有內容，鍵盤的自動開合功能無效
    openSwitch: true, // 是否可開合/切換
    autoClose: true, // 自動關閉其他開啟內容
    modeSwitch: true, // 預設模式自動切換，尺寸以上tab功能，尺寸以下手風琴功能
    width: 767, // 尺寸以上tab功能，尺寸以下手風琴功能
    index: 0, // 預設開啟第幾個
  });

  tableAddDataAttributes({
    elemClass: '.tableList', // 目標table
    dataName: 'title', // tableList樣式 加上 data-title
  });

  // 手風琴功能
  accordionFunction({
    target: '.accordion',
    openFirst: false, // 預設先展開所有內容，鍵盤的自動開合功能無效
    autoClose: true, // 點擊時自動關閉已展開的項目，若需要此功能需要關閉openFirst
    openSwitch: true, // 是否可開合
    index: 0, // 預設開啟第幾個
    info: {
      open: '展開', // 收合時顯示
      close: '收合', // 展開時顯示
    },
  });
});
// -----  基本功能開關   ---------------------------------------------------

// 自行加入的JS請寫在這裡
(function () {
  //cp輪播
  const cpSwiper = new Swiper('.cpSlider .swiper', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: false,
    // 切換點
    pagination: {
      el: '.cpSlider .swiperDots',
      bulletElement: 'button',
      clickable: true,
    },
    // 切換箭頭
    navigation: {
      nextEl: '.cpSlider .nextSlider', //自行設定樣式
      prevEl: '.cpSlider .prevSlider', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    breakpoints: {
      100: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 4,
      },
    },
  });

  const albumSwiper = new Swiper('.albumSlider .swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: false,
    // 切換點
    pagination: {
      el: '.albumSlider .swiperDots',
      bulletElement: 'button',
      clickable: true,
    },
    // 切換箭頭
    navigation: {
      nextEl: '.albumSlider .nextSlider', //自行設定樣式
      prevEl: '.albumSlider .prevSlider', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    breakpoints: {
      100: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
    },
  });

  //大圖輪播
  let mpSliderItem = document.querySelectorAll('.mpSlider .swiper-slide');
  let mpSliderPagination = [];
  mpSliderItem.forEach((item, index) => {
    mpSliderPagination.push(item.dataset.title);
  });
  const mpSlider = new Swiper('.mpSlider .swiper', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    // 切換點
    pagination: {
      el: '.mpSlider .swiperDots',
      bulletElement: 'button',
      clickable: true,
      renderBullet: function (index, className) {
        return `<button class="${className} noFonts" aria-label="${mpSliderPagination[index]}">${mpSliderPagination[index]}</button>`;
      },
    },
    // 切換箭頭
    navigation: {
      nextEl: '.mpSlider .nextSlider', //自行設定樣式
      prevEl: '.mpSlider .prevSlider', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
  });

  //廣告輪播
  const adSwiper = new Swiper('.adSlider .swiper', {
    slidesPerView: 5,
    spaceBetween: 15,
    loop: false,
    // 切換點
    pagination: {
      el: '.adSlider .swiperDots',
      bulletElement: 'button',
      clickable: true,
    },
    // 切換箭頭
    navigation: {
      nextEl: '.adSlider .nextSlider', //自行設定樣式
      prevEl: '.adSlider .prevSlider', //自行設定樣式
      disabledClass: '.adSlider swiperArrow-disabled', //不可點選樣式
    },
    breakpoints: {
      100: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 5,
      },
    },
  });

  //書籍輪播
  const bookSwiper = new Swiper('.bookSlider .swiper', {
    slidesPerView: 5,
    //centeredSlides: true,
    spaceBetween: 25,
    loop: false,
    autoplay: {
      delay: 5000,
    },
    // 切換點
    pagination: {
      el: '.bookSlider .swiperDots',
      bulletElement: 'button',
      clickable: true,
    },
    // 切換箭頭
    navigation: {
      nextEl: '.bookSlider .nextSlider', //自行設定樣式
      prevEl: '.bookSlider .prevSlider', //自行設定樣式
      disabledClass: '.bookSlider swiperArrow-disabled', //不可點選樣式
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 5,
      },
    },
  });

  //cp_photo
  const navSlider = new Swiper('.navSlider .swiper', {
    lazy: true, // lazy load
    preloadImages: false, // 多筆設定lazy時須設定
    centeredSlides: false, // 多筆設定lazy時須設定
    slidesPerView: 4,
    // watchSlidesProgress: true,
    navigation: {
      nextEl: '.navSlider .nextSlider', //下一張class，無障礙設定關係需要增加.nextSlider
      prevEl: '.navSlider .prevSlider', //前一張class，無障礙設定關係需要增加.prevSlider
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    breakpoints: {
      100: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
  });

  const sliderFor = new Swiper('.sliderFor .swiper', {
    slidesPerView: 1, //顯示張數
    effect: 'fade', //淡入
    fadeEffect: {
      crossFade: true, //上一張淡出，false上一張不淡出，下一張疊在上方
    },
    pagination: {
      el: '.sliderFor .pagination',
      type: 'fraction', //顯示分頁
    },
    lazy: true,
    thumbs: {
      swiper: navSlider, //設定指向到哪個swiper，使用另一個設定的參數
    },
  });

  function readerArea() {
    var readerLogins = document.querySelectorAll('.readerLogin');

    readerLogins.forEach(function (readerLogin) {
      readerLogin.addEventListener('click', function (e) {
        var readerBlock = this.closest('.readerBlock');
        if (readerBlock) {
          readerBlock.classList.toggle('open');
        }
      });
    });
  }

  readerArea();

  //GASP設定
  const tl_booksfly = gsap.timeline({
    scrollTrigger: {
      trigger: '.main',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.5,
    },
  });

  tl_booksfly
    .to('.bookfly01', {
      scale: 1.1,
      x: '-20%',
      y: '30%',
    })
    .to(
      '.bookfly02',
      {
        scale: 1.1,
        x: '20%',
        y: '30%',
      },
      '<'
    )
    .to(
      '.bookfly03',
      {
        scale: 1.1,
        x: '-20%',
        y: '40%',
      },
      '<'
    );

  const tl_topBookFly = gsap.timeline({
    default: {},
  });
  tl_topBookFly.from('.bookfly04', {
    x: 250,
    y: -200,
    delay: 0.5,
    duration: 3,
    ease: Power1.easeInOut,
    scale: 0,
  });
  tl_topBookFly.from(
    '.bookfly05',
    {
      x: 350,
      y: -200,
      duration: 3,
      ease: Power1.easeInOut,
      scale: 0,
    },
    '<=0.5'
  );

  const tl_topBookMove = gsap.timeline({
    scrollTrigger: {
      trigger: '.wrapper',
      start: 'top center',
      end: 'bottom center',
      scrub: true,
    },
  });

  tl_topBookMove
    .fromTo(
      '.bookfly04',
      {
        xPercent: 10,
        yPercent: -10,
      },
      {
        xPercent: -40,
        yPercent: 40,
      }
    )
    .fromTo(
      '.bookfly05',
      {
        xPercent: 10,
        yPercent: -10,
      },
      {
        xPercent: -40,
        yPercent: 40,
      },
      '<'
    );
  const tl_branchBookfly = gsap.timeline({
    scrollTrigger: {
      trigger: '.branchInfo',
      start: 'top top',
      end: 'bottom centet',
      scrub: 0.5,
    },
  });
  tl_branchBookfly
    .to('.bookfly06', {
      duration: 1.5,
      scale: 1,
      opacity: 1,
      xPercent: -120,
      yPercent: 230,
    })
    .to(
      '.bookfly07',
      {
        duration: 2,
        scale: 1,
        opacity: 1,
        xPercent: 20,
        yPercent: 260,
      },
      '<'
    );
})();
