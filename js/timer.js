import refs from './refs.js';
const { daysC, hoursC, minsC, secondsC } = refs;

class CountdownTimer {
  constructor(targetTimer) {
    const {targetDate, selector} = targetTimer
    this.targetDate = targetDate;
    this.intID = null;
    this.deltaTime = 0;
  }
  start() {
      
    this.intID = setInterval(() => {
      let currentTime = Date.now();
      this.deltaTime = this.targetDate - currentTime;

      const days = this.pad(Math.floor(this.deltaTime / (1000 * 60 * 60 * 24)));
      const hours = this.pad(Math.floor((this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const mins = this.pad(Math.floor((this.deltaTime % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = this.pad(Math.floor((this.deltaTime % (1000 * 60)) / 1000));

      daysC.textContent = days
      hoursC.textContent = hours
      minsC.textContent = mins
      secondsC.textContent = secs
    }, 1000);
  }
  
  pad(value) {
    return String(value).padStart(2, '0')
  }
}
  

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jan 01, 2022'),

  });
  
  timer.start()
  
