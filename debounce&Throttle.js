/*
Throttling is a technique in which, no matter how many times the user fires the event, the attached function will be executed only once in a given time interval.

In the debouncing technique, no matter how many times the user fires the event, the attached function will be executed only after the specified time once the user stops firing the event.

The main difference between throttling and debouncing is that throttling executes the function at a regular interval, while debouncing executes the function only after some cooling period

Example use cases
- Throttling a button click so we can’t spam click
- Throttling an API call
- Throttling a mousemove/touchmove event handler
- Debouncing a resize event handler
- Debouncing a scroll event handler
- Debouncing a save function in an autosave feature
*/

const debounce = (func, delay) => {
    let inDebounce;
    return function(){
        const context = this;
        const args = arguments;
        clearTimeout(inDebounce);
        inDebounce = setTimeout(()=> func.apply(context, args), delay)
    }
}

/* debounce == If we are invoking for the first time, our function will execute at the end of our delay. If we invoke and then invoke again before the end of our delay, the delay restarts

 If the callback is executed within a certain time period, it cancels the previous setTimeout that was going to be run soon and creates a new one. So if you keep pressing the keyboard fast enough, your callback would never be run.


-----------------------------------------------------
*/

const throttle = (func, delay) => {
    let inThrottle = false; 
    return function(){
        const context = this;
        const args = arguments;
        
        if(inThrottle){
            return;
        }
        inThrottle = true;
        func.apply(context, args);
        setTimeout(()=> {inThrottle = false;}, delay);
    }
}

/* Throttle == The first call to our function will execute and sets the limit period inThrottle. We can call our function during this period but it will not fire until the throttle period has passed. Once it has passed, the next invocation will fire and the process repeats.

When this function is called for the first time, inThrottle is assigned to false. Then once the returned function is called again, inThrottle is set to true and the callback function (fn) is executed. Then inThrottle becomes false again in delay ms. In the meantime, while inThrottle is true, none of the execution of the returned function from throttle can be executed.
*/

