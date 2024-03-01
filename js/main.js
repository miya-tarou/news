// 自由に記述してかまいません
// スマホメニュー

const open = document.querySelector('#open');
const close = document.querySelector('#close');
const overlay = document.querySelector('.overlay');

open.addEventListener('click', () => {
  overlay.classList.add('show');
  open.classList.add('hide');
});
close.addEventListener('click', () => {
  overlay.classList.remove('show');
  open.classList.remove('hide');
});

// 広告カルーセル

const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const ul = document.querySelector('.container-2 ul');
const slides = ul.children;
const dots = [];
let currentIndex = 0;

function updateButtons() {
  prev.classList.remove('hidden');
  next.classList.remove('hidden');
  if (currentIndex === 0) {
    prev.classList.add('hidden');
  }

  if (currentIndex === slides.length - 1) {
    next.classList.add('hidden');
  }
}

function moveslides() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
}

function setupDots() {
  for (let i = 0; i < slides.length; i++) {
    const button = document.createElement('button');
    button.addEventListener('click', () => {
      currentIndex = i;
      updateDots();
      updateButtons();
      moveslides();
    });
    dots.push(button);
    document.querySelector('nav').appendChild(button);
  }

  dots[0].classList.add('current');
}
function updateDots() {
  dots.forEach(dot => {
    dot.classList.remove('current');
  });
  dots[currentIndex].classList.add('current');
}

updateButtons();
setupDots();

next.addEventListener('click', () => {
  currentIndex++;
  updateButtons();
  updateDots();
  moveslides();
});
prev.addEventListener('click', () => {
  currentIndex--;
  updateButtons();
  updateDots();
  moveslides();
});

window.addEventListener('resize', () => {
  moveSlides();
});

// ハートアイコン

let n = 0;

const heart = document.querySelectorAll('.bi-suit-heart-fill');
const counter = document.querySelectorAll('.counter');
heart.forEach((heart) => {
  heart.addEventListener('click', () => {
    n++;
    if (n > 10) {
      heart.classList.add('large');
    }
    counter.forEach((counter) => {
      counter.textContent = n;
    });
  });
});
