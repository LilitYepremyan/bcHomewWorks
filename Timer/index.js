class Timer {
  constructor(time) {
    this.time = time;
    this.intervalId = "";
  }
  startTimer() {
    setInterval(() => {
      this.minutes = parseInt(this.time / 60, 10);
      this.seconds = parseInt(this.time % 60, 10);
      this.minutes < 10 ? `0${this.minutes}` : this.minutes;
      this.seconds < 10 ? `0${this.seconds}` : this.seconds;
      if (--this.time < 0) {
        console.log("The end");
        clearInterval(this.intervalId)
      }
      console.log(`${this.minutes}-${this.seconds}`);
    }, 1000);
  }
  pouseTimer() {
    clearInterval(this.intervalId);
  }
  resetTimer() {
    clearInterval(this.intervalId);
    this.time = 0;
    this.seconds = "00";
    this.minutes = "00";
  }
}
let firstTimer = new Timer(20)
firstTimer.startTimer()