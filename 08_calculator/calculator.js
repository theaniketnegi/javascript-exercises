const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  let res = 0;
  for(let i = 0; i<arr.length; i++){
    res+=arr[i];
  }
  return res;
};

const multiply = function() {
  let res = 1;
  for(let i = 0; i<arguments.length; i++){
    res*=arguments[i];
  }
  return res;
};

const power = function(a,b) {
  let temp;
  if(b===0)
    return 1;
  temp = power(a,b/2);
  if(!(b&1))
    return temp*temp;
  return a*temp*temp;
};

const factorial = function(a) {
	if(a==0)
    return 1;
  return factorial(a-1)*a;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
