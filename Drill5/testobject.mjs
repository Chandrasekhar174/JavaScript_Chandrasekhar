export const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" }; // use this object to test your functions

// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.
// Check and use MDN as well
// PROJECT RESTRICTION: You can't use the built in Object methods.  Only use native JavaScript for loops. No other types of loops are allowed.
// PROJECT RESTRICTION: You can't use the underscore library or any other external library.

function keys(obj) {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  var arr=[];
  for(let key in obj)
  {
     arr.push(key);
  }
  return arr;
}

function values(obj) {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  var arr=[];
  for(var value in obj)
  {
    arr.push(obj[value]);
  }
  return arr;
}


function mapObject(obj, cb) {
  // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
  // http://underscorejs.org/#mapObject

  const result={};
  for(const key in obj)
  {
    if(obj.hasOwnProperty(key))
    {
        result[key]=cb(obj[key],key,obj);
    }
  }
  return result;
}

function pairs(obj) {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  var _keys = keys(obj);
  var length = _keys.length;
  var pairs = Array(length);
  for (var i = 0; i < length; i++) {
    pairs[i] = [_keys[i], obj[_keys[i]]];
  }
  return pairs;

}


/* STRETCH PROBLEMS */

function invert(obj) {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  var result = {};
  var _keys = keys(obj);
  for (var i = 0, length = _keys.length; i < length; i++) {
    result[obj[_keys[i]]] = _keys[i];
  }
  return result;
}

function defaults(obj, defaultProps) {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
   for (const key in defaultProps) 
    {
    if (obj[key] === undefined) 
    {
      obj[key] = defaultProps[key];
    }
  }
  return obj;
}

export{
    keys,
    values,
    mapObject,
    pairs,
    invert,
    defaults
}
