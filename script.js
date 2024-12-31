// console.log()

let c = console.log;

// random

class Random {
  constructor({ time, blCircle }) {
    this.time = time;
    this.blCircle = blCircle;

    this.random();
  }

  random() {
    setInterval(() => {
      let randomX = Math.floor(Math.random() * 100);
      let randomY = Math.floor(Math.random() * 100);

      this.blCircle.style.top = `${randomY}%`;
      this.blCircle.style.left = `${randomX}%`;
      
    }, this.time);
  }
}

new Random({
  time: 5000,
  blCircle: document.querySelector(".circle-red"),
});

new Random({
  time: 6000,
  blCircle: document.querySelector(".circle-blue"),
});

new Random({
  time: 7000,
  blCircle: document.querySelector(".circle-green"),
});

