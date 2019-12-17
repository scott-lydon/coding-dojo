// #1

function printUpTo(x){
    // your code here
    if (x < 0) {
      return false;
    }
    for(var i = 0; i <= x; i++) {
      console.log(i);
    }
    return true
}


printUpTo(1000); // should print all the integers from 1 to 1000
y = printUpTo(-10); // should return false
console.log(y); // should print false
  
// #2

function printSum(x){
    var sum = 0;
    //your code here
    for(var i = 0; i <= x; i++) {
      console.log(i);
      sum += i;
    }
    console.log(sum);
    return sum
}
y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
console.log(y) // should print 32640
  

  // #3

function printSumArray(x){
    var sum = 0;
    for(var i=0; i<x.length; i++) {
      sum += x[i];
    }
    return sum;
}
  console.log( printSumArray([1,2,3]) ); // should log 6
  

  // #4 

  function largestElement(x) {
    if (x.length < 1) {
        return "undefined";
    }
    var max = x[0];
    for (var i = 1; i < x.length; i++) {
        if (x[i] > max) {
            max = x[i];
        }
    }
    return max;
  }