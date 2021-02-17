/* 
    Write your own Event Emitter
*/

class MyEventEmitter {
  constructor() {
    this.events = [];
  }

  addListener(eventName, fn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
    return this;
  }

  on(eventName, fn) {
    return this.addListener(eventName, fn);
  }

  off(eventName, fn) {
    return this.removeListener(eventName, fn);
  }

  removeListener(eventName, fn) {
    if (!this.events[eventName]) return this;
    const filteredListeners = (listener) => listener !== fn;
    this.events[eventName] = this.events[eventName].filter(filteredListeners);
    return this;
  }

  emit(eventName, data) {
    if (!this.events[eventName]) {
        throw new Error(`Can't emit an event. Event ${eventName} doesn't exists. `)
    }
    const fireCallbacks = (callback) => {
      callback(data);
    };

    this.events[eventName].forEach(fireCallbacks);
  }

  once(eventName, fn) {
    this.events[eventName] = this.events[eventName] || [];
    const onceWrapper = () => {
      fn();
      this.off(eventName, onceWrapper);
    }
    this.events[eventName].push(onceWrapper);
    return this;
  }

  eventsCount(eventName) {
    let fns = this.events[eventName] || [];
    return fns.length;
  }

  rawListeners(eventName) {
    return this.events[eventName];
  }
}

// Usage
const myEventEmitter = new MyEventEmitter();
const handleMyEvent = (data) => {
  console.log("Was fired: ", data);
};

myEventEmitter.on("testEvent", handleMyEvent);
myEventEmitter.emit("testEvent", "Hi"); // Was fired: trigger
myEventEmitter.emit("testEvent", "trigger"); // Was fired: trigger
myEventEmitter.emit("testEvent", "again");
// myEventEmitter.emit('fakeEvent', {});
myEventEmitter.removeListener("testEvent", handleMyEvent);
myEventEmitter.emit("testEvent", "again");
