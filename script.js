// console.log()

let c = console.log;

// random

let rombRed = document.querySelector(".circle-red");
let rombBlue = document.querySelector(".circle-blue");

setInterval(() => {
  let randomX = Math.floor(Math.random() * 100);
  let randomY = Math.floor(Math.random() * 100);

  rombRed.style.top = `${randomY}%`;
  rombRed.style.left = `${randomX}%`;
}, 8000);

setInterval(() => {
  let randomX = Math.floor(Math.random() * 100);
  let randomY = Math.floor(Math.random() * 100);

  rombBlue.style.top = `${randomY}%`;
  rombBlue.style.left = `${randomX}%`;
}, 7000);

//random number

let val = document.querySelector(".randon-text");
let btnRandom = document.querySelector(".btn-random");

btnRandom.onclick = function () {
  let randomNum = Math.floor(Math.random() * 5);

  // с(randomNum)

  switch (randomNum) {
    case 1:
      val.innerHTML = `${randomNum}. сделать слайдер`;
      break;
    case 2:
      val.innerHTML = `${randomNum}. сделать адаптив`;
      break;
    case 3:
      val.innerHTML = `${randomNum}. сделать анимацию`;
      break;
    case 4:
      val.innerHTML = `${randomNum}. сделать чеклист`;
      break;
    case 5:
      val.innerHTML = `${randomNum}. сделать валидацию`;
      break;
  }
};
