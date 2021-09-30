// When we say "sort", the idea is to re-arrange the elements such that they are in ascending order.

// Bubble_Sort concept
// [1] Starting with the first element, compare the current element with the next element of the array.

// [2] If the current element is greater than the next element of the array, swap them.

// [3] If the current element is less than the next element, just move to the next element.

// [4] Start again from Step 1.


// Mutable objects are objects whose value can change once created, 
//while immutable objects are those whose value cannot change once created.
// JavaScript has the [Object.freeze() function]. 
//Calling the function after creating your objects marks all the properties of the object immutable.

//READ FROM FILE
// var fs = require('fs');
// var numbers = fs.readFileSync('data.txt', 'utf8');

let numbers = [
    5,
    8,
    0,
    1,
    9,
    11,
    15,
    16
];
console.log("Original numbers list: ", numbers);


for(let i = 0 ; i < numbers.length ; i++)
{
    for(let j = 0 ; j < numbers.length; j++) //we have to rech the end of array (correct)
    {
        if(numbers[j] > numbers[j + 1])// we have to compare between the element and the next one(correct)
        {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1]
            numbers[j + 1] = temp;
        }
    }
}

console.log("Numbers list After sorting: ", numbers)

for(let i = 0 ; i < numbers.length ; i++)
{
    for(let j = 0 ; j < numbers.length; j++)//we have to rech the end of array (correct)
    {
        if(numbers[j] < numbers[j + 1])// we have to compare between the element and the next one(correct)
        {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1]
            numbers[j + 1] = temp;
        }
    }
}

console.log("Numbers list After Desc sorting: ", numbers)

