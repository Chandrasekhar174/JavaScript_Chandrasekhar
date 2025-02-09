function counterFactory() {
    // Return an object that has two methods called `increment` and `decrement`.
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.

    let count=0;
    return {
        increment:function()
        {
            count++;

        },
        decrement:function(){
            if(count!=0)
            {
                count--;
            }
            
        }
    }

  }
  
  function limitFunctionCallCount(cb, n) {
    // Should return a function that invokes `cb`.
    // The returned function should only allow `cb` to be invoked `n` times.
    // Returning null is acceptable if cb can't be returned

    let count = 0; 

    return function (...args) {
        if (count < n) {
            count++;
            return cb(...args);
        } else {
            return null; 
        }
    };
  }
  
  function cacheFunction(cb) {
    // Should return a function that invokes `cb`.
    // A cache (object) should be kept in closure scope.
    // The cache should keep track of all arguments have been used to invoke this function.
    // If the returned function is invoked with arguments that it has already seen
    // then it should return the cached result and not invoke `cb` again.
    // `cb` should only ever be invoked once for a given set of arguments.

    const cache = {}; // Cache object stored in closure

    return function (...args) {
        const key = JSON.stringify(args); // Convert arguments into a string key

        if (cache.hasOwnProperty(key)) {
            console.log("Fetching from cache:", key);
            return cache[key]; // Return cached result
        } else {
            console.log("Computing and caching:", key);
            const result = cb(...args); // Call original function
            cache[key] = result; // Store result in cache
            return result;
        }
    };
  }

  export{

    counterFactory,
    limitFunctionCallCount,
    cacheFunction
  }
