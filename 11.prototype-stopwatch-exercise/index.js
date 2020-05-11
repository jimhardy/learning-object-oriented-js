function Stopwatch() {
  let duration = 0;
  let running = false;
  let startTime;
  Object.defineProperty(this, 'running', {
    get: function () {
      return running;
    },
  });
  Object.defineProperty(this, 'duration', {
    get: function () {
      return duration;
    },
    set: function () {
      return duration;
    },
  });
  Object.defineProperty(this, 'startTime', {
    get: function () {
      return startTime;
    },
  });
}

Stopwatch.prototype.start = function () {
  if (this.running) {
    throw new Error('stopwatch already running');
  }
  this.running = true;
  const timestamp = new Date();
  this.startTime = timestamp.getTime() / 1000;
  console.log('starts counting');
};

Stopwatch.prototype.stop = function () {
  if (!this.running) {
    throw new Error('stopwatch already stopped');
  }
  const timestamp = new Date();
  const endTime = timestamp.getTime() / 1000;
  this.running = false;
  this.duration += Math.round((endTime - this.startTime) * 100) / 100;
  console.log('stops counting');
  console.log(`total time: ${this.duration}`);
};

Stopwatch.prototype.reset = function () {
  console.log('reset timer');
  this.running = false;
  this.duration = 0;
};

const sw = new Stopwatch();

//! optimizing this actually breaks abstraction rules. Don't add to prototype unless you really need to.
