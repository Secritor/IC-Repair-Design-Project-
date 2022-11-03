const sliderImg = document.querySelector(".slider__img");
const sliderItems = Array.from(sliderImg.children);
//---------------------------------

const btnNext = document.querySelector("#btnNext");
const btnPrev = document.querySelector("#btnPrev");

//---------------------------------

const hover = document.querySelector(".slider__img__title");
const hoverItems = Array.from(hover.children);

//---------------------------------

const parameters = document.querySelector("#parameters");
const parametersItem = Array.from(parameters.children);

const dots = document.querySelector(".dots");
const dotItems = Array.from(dots.children);

// -------------------- слайдер с изображениями
sliderItems.forEach(function (slide, index) {
  // console.log(slide);

  /*скрываем все слайды кроме первого*/
  if (index !== 0) slide.classList.add("hidden");

  /*добавляем индексы*/

  slide.dataset.index = index;

  // добавляем data атрибут active для первого / активного слайда

  sliderItems[0].setAttribute("data-active", "");

  /*клик по слайду*/

  slide.addEventListener("click", function () {
    showNextSlide("next");
  });
});

function showNextSlide(direction) {
  // Скрываем текущий слайд
  const currentSlide = sliderImg.querySelector("[data-active]");
  const currentSlideIndex = +currentSlide.dataset.index;

  currentSlide.classList.add("hidden");
  currentSlide.removeAttribute("data-active");

  // Рассчитываем следующий индекс в зависимости от направления движения
  let nextSlideIndex;

  if (direction === "next") {
    nextSlideIndex =
      currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
  } else if (direction === "prev") {
    nextSlideIndex =
      currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
  }

  //Показываем следующий слайд
  const nextSlide = sliderImg.querySelector(`[data-index="${nextSlideIndex}"]`);
  nextSlide.classList.remove("hidden");
  nextSlide.setAttribute("data-active", "");
}

// -------------------- слайдер с параметрами

parametersItem.forEach(function (slide, index) {
  // console.log(slide);

  /*скрываем все слайды кроме первого*/
  if (index !== 0) slide.classList.add("hidden");

  /*добавляем индексы*/

  slide.dataset.index = index;

  // добавляем data атрибут active для первого / активного слайда

  parametersItem[0].setAttribute("data-active", "");

  /*клик по слайду*/

  slide.addEventListener("click", function () {
    showNextSlide("next");
  });
});

function showNextSlidePar(direction) {
  // Скрываем текущий слайд
  const currentSlide = parameters.querySelector("[data-active]");
  const currentSlideIndex = +currentSlide.dataset.index;

  currentSlide.classList.add("hidden");
  currentSlide.removeAttribute("data-active");

  // Рассчитываем следующий индекс в зависимости от направления движения
  let nextSlideIndex;

  if (direction === "next") {
    nextSlideIndex =
      currentSlideIndex + 1 === parametersItem.length
        ? 0
        : currentSlideIndex + 1;
  } else if (direction === "prev") {
    nextSlideIndex =
      currentSlideIndex === 0
        ? parametersItem.length - 1
        : currentSlideIndex - 1;
  }

  //Показываем следующий слайд
  const nextSlide = parameters.querySelector(
    `[data-index="${nextSlideIndex}"]`
  );
  nextSlide.classList.remove("hidden");
  nextSlide.setAttribute("data-active", "");
}

// -------------------- анимация подчеркивания
hoverItems.forEach(function (slide, index) {
  // console.log(slide);

  /*добавляем класс первому элементу*/
  if (index == 0) slide.classList.add("active__title");

  /*добавляем индексы*/

  slide.dataset.index = index;

  // добавляем data атрибут active для первого / активного слайда

  hoverItems[0].setAttribute("data-active", "");

  /*клик по слайду*/

  slide.addEventListener("click", function () {
    showNextSlide("next");
  });
});

function showNextHover(direction) {
  // Скрываем текущий слайд
  const currentSlide = hover.querySelector("[data-active]");
  const currentSlideIndex = +currentSlide.dataset.index;

  currentSlide.classList.remove("active__title");
  currentSlide.removeAttribute("data-active");

  // Рассчитываем следующий индекс в зависимости от направления движения
  let nextSlideIndex;

  if (direction === "next") {
    nextSlideIndex =
      currentSlideIndex + 1 === hoverItems.length ? 0 : currentSlideIndex + 1;
  } else if (direction === "prev") {
    nextSlideIndex =
      currentSlideIndex === 0 ? hoverItems.length - 1 : currentSlideIndex - 1;
  }

  //Показываем следующий слайд
  const nextSlide = hover.querySelector(`[data-index="${nextSlideIndex}"]`);
  nextSlide.classList.add("active__title");
  nextSlide.setAttribute("data-active", "");
}

// -------------------- анимация точек
dotItems.forEach(function (slide, index) {
  // console.log(slide);

  /*добавляем класс первому элементу*/
  if (index == 0) slide.classList.add("active__dots");

  /*добавляем индексы*/

  slide.dataset.index = index;

  // добавляем data атрибут active для первого / активного слайда

  dotItems[0].setAttribute("data-active", "");

  /*клик по слайду*/

  slide.addEventListener("click", function () {
    showNextSlide("next");
  });
});

function showNextDots(direction) {
  // Скрываем текущий слайд
  const currentSlide = dots.querySelector("[data-active]");
  const currentSlideIndex = +currentSlide.dataset.index;

  currentSlide.classList.remove("active__dots");
  currentSlide.removeAttribute("data-active");

  // Рассчитываем следующий индекс в зависимости от направления движения
  let nextSlideIndex;

  if (direction === "next") {
    nextSlideIndex =
      currentSlideIndex + 1 === dotItems.length ? 0 : currentSlideIndex + 1;
  } else if (direction === "prev") {
    nextSlideIndex =
      currentSlideIndex === 0 ? dotItems.length - 1 : currentSlideIndex - 1;
  }

  //Показываем следующий слайд
  const nextSlide = dots.querySelector(`[data-index="${nextSlideIndex}"]`);
  nextSlide.classList.add("active__dots");
  nextSlide.setAttribute("data-active", "");
}

// кнопки

btnNext.onclick = function () {
  showNextDots("next");
  showNextHover("next");
  showNextSlidePar("next");
  showNextSlide("next");
};

btnPrev.onclick = function () {
  showNextDots("prev");
  showNextHover("prev");
  showNextSlidePar("prev");
  showNextSlide("prev");
};

// чек боксы

const box = document.querySelector("#check__box");
const checkBox = document.querySelector("#check__data");

checkBox.onclick = function () {
  box.classList.toggle("active");
  console.log("push");
};

const requestBox = document.querySelector(".request__check__data");
const requestBoxItem = document.querySelector(".request__check__box");

requestBox.onclick = function () {
  requestBoxItem.classList.toggle("active");
  console.log("push");
};

const requestBox1 = document.querySelector("#request__check__data");
const requestBoxItem1 = document.querySelector("#request__check__box");

requestBox1.onclick = function () {
  requestBoxItem1.classList.toggle("active");
  console.log("push");
};
