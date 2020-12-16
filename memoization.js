// Memoization is an optimization technique that speeds up applications by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

/* 
Memoization uses caching for storing results of function calls for quick and easy access later.

{{ A cache is simply a temporary data store that holds data so that future requests for that data can be served faster }}

*/

function memoize(func) {
    let cache = {};
    return function(n) {
        if(cache[n]) {
            return cache[n];
        } else{
            let result = func(n);
            cache[n] = result;
            return result;
        }
    }
}

/*
When to memoize a function ??

1. For expensive function calls i.e functions that carry out heavy computations.

2. For functions with a limited and highly recurring input range such that cached values don't just sit there and do nothing.

3. For recursive functions with recurring input values.

4. For pure functions i.e functions that return the same output each time they are called with a particular input.

*/
