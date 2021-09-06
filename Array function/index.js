//Array.find(..) ES2015

//Array.includes(..) was introduced in 2016

//Array.find accepts a function and the function was return boolean type.
// based on the boolean value, the object from the array would be returned.


var arr = [ { a:1}, {a:2} ];

arr.find(function match(v){
    return v && v.a > 1;
});

// In the above example, here value of a > 1  is 2. Therefore, the second element from the array is returned.


// Second example, 
// Consider the sample array with arr as the variable name.
arr.find(function match(v){
    return v && v.a > 10;
});

// in this case, no object element has value greater than 10, therefore undefined type is returned.

// Problem
// If we have a different function for the Array.find and that would return a element that is present in the array, the element
// present is undefined. We are not sure now, whether the element was present in the array and that's why it return undefined
// or whether the element was not present and the function return false and it then return undefined.


//2. Array.findIndex
// findIndex is similar to find function. Only difference is when the function return true for the given function logic 
// it would return index of the element (for the first match)
// for no match, it would give you an -1.
arr.findIndex(function match(v){
    return v && v.a > 10;
});


//3. Array.indexOf
// indexOf checks for the given element and if the element is present it would return its element's index
// or else it would return -1
var sinleArr = [10,20, NaN, 30, 40, 50];

singleArr.indexOf(30) != -1;  // true

singleArr.indexOf(20); // this would return 1

singleArr.indexOf(NaN); // this would return -1, indicating this value is not an array.
// but to make this correct, we need to add ~
~singleArr.indexOf(NaN); // this would return a falsy value.

//let's consider second example with tilda
~singleArr.indexOf(20);
// now the value is present, so it would return 1 adding "~" it would return -2
//which is a truthy 
// This way we would make the -1 to be made into truthy or falsey value.

if(singleArr.indexOf(30) != -1){

}

// to check whether the NaN is present in the array or not.
if(singleArr.indexOf(NaN) != -1 ) {

} // this would be false all the time
// therefore, we would add ~
if(~singleArr.indexOf(NaN) != -1 ) {

}

//From 2016, we have actual method which would give true or false if the elment exist in the array.
// that is "includes function"

// consider this example
var secondArr = [10, 20, NaN, 30, 40, 50];

secondArr.includes(20);// returns true
secondArr.includes(NaN);// this will return true, since NaN exist in the array

secondArr.includes(60); // return false

secondArr.includes(20,1);// this would check that the 20 is present in the array and whether it is present 
//in index 1 ?
// since the 20 element is present in 1, it would return true or else false.

secondArr.includes(20, 3); //this would return false, since there is no 20 element in index 3.

// we can also provide the index check from reverse.

secondArr.includes(30,-3); // it will check from reverse, taking 50 as in -5 location index.
// 40 in -4
// 30 in -3


secondArr.includes(20,-1) // this would return true.
secondArr.includes(20,-5) // this would return false.







