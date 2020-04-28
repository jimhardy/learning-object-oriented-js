//todo
//* duration - property starts at 0
//* start
//* stop
//* reset

class Stopwatch {
  constructor() {
    this.duration = 0;
    let running = false;
    let startTime;
  }
  start() {
    if (running) {
      throw new Error('stopwatch already running');
    }
    running = true;
    const timestamp = new Date();
    this.startTime = timestamp.getTime() / 1000;
    console.log('starts counting');
  }

  stop() {
    if (!running) {
      throw new Error('stopwatch already stopped');
    }
    const timestamp = new Date();
    const endTime = timestamp.getTime() / 1000;
    running = false;
    this.duration += Math.round((endTime - this.startTime) * 100) / 100;
    console.log('stops counting');
    console.log(`total time: ${this.duration}`);
  }

  reset() {
    console.log('reset timer');
    running = false;
    this.duration = 0;
  }
}

const sw = new Stopwatch();
