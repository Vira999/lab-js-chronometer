class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    
  }

  start(printTimeCallback) {
    
    this.currentTime++;
    const callbackFunction = function () {
      console.log(currentTime);
      this.currentTime++;
      let timeoutId =  setInterval(callbackFunction, 1000);
    // ... your code goes here
     

  }}
  

  

  getMinutes() {
    return  this.currentTime  ;
    return Math.floor(this.currentTime / 60);
    // ... your code goes here
  }

  getSeconds() {
    return this.currentTime % 60;// ... your code goes here
  }

  computeTwoDigitNumber(value) {
    return value < 10 ? '0' + value : String(value);// ... your code goes here
  }

  stop() {
    clearInterval(this.intervalId);// ... your code goes here
  }

  reset() {
    this.currentTime = 0;// ... your code goes here
  }

  split() {
    let time = "mm:ss";
if (time.match(/\d+\d/)) {
    // time is valid
}
return time;// ... your code goes here
  }
}if (typeof module !== 'undefined') module.exports = Chronometer;
