//Array.flat(..)
//Array.flatMap(..)

var nestedArray = [1, [2,3], [[]], [4,[5]],6];

//flat is used to to flatten the nested array.
// the question is what degree of nested is flattend ?
// the flat accpets parameter
// this parameter is used to determine the degree of flattens of the nested array.

nestedArray.flat(0); //[ 1, [ 2, 3 ], [ [] ], [ 4, [ 5 ] ], 6 ] no flatting

nestedArray.flat(1); // only flattin of inner array
[ 1,  2, 3,[], 4, [ 5 ], 6 ]

nestedArray.flat(2); // the inner array is removed [ 1,  2, 3, 4, 5 , 6 ]; because there was 2 degree of flatness applied to the array.


//We also have flatMap
//before that let's checkout map function

[1,2,3].map(function remap(v){
    return [ v*2, String(v*2)];
});
// map would run the function for each element and then return the value.
//[[2,"2"], [4,"4"], [6, "6"]];

// from the above function, we can see nested array, but we need to remove the nestedness.

[1,2,3].map(function remap(v){
    return [ v*2, String(v*2) ];
}).flat();
// Here the mapping is done
// and the returned array is later flattend
// by default if no parameter is given, by default 1 is considered as default parameter

[1,2,3].flatMap(function remap(v){
    return [v*2, String(v*2)];
});
// The main advantage is on performance
// it would flaten as it maps.
// and not a mapping and the flating the array.
//this would return [2,"2",]

// flatmap will also have effect of adding and removing to the returning array.

[1,2,3,4,5,6].flatMap(function dobuleOnlyEvens(v){
    if(v % 2 == 0) {
        return [v, v *2];
    }
    else {
        return [];
    }
});

// in the above example, here the each array element is given to the dobuleOnlyEvens function
// and if it is even, then it would consider to be doubled and add in the array and then flatten it. This has an effect of addition of element
// if not an even number, then it would return an empty array, which has an effect of removal of the element from the returning array.
// this example would result in 
// [2, 4, 4, 8, 6, 12]