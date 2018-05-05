///////////////////////////////////////
// CODING CHALLENGE 2

/*
1. Create an array with some years where persons were born
2. Create an empty array (just [] )
3. Use a loop to fill the array with the ages of the persons
4. Use another loop to log into the console whether each person is of full age (18 or older), as well as their age

5. Finally, create a function called printFullAge which receives the array of years as an argument, executes the steps 2., 3. and 4. and returns an array of true/false boolean values: true if the person is of full age (>= 18 years) and false if not (< 18 years)
6. Call the function with two different arrays and store the results in two variables: full_1 and full_2

Example input:  [1965, 2008, 1992]
Example output: [true, false, true]

Hint: you can use a loop not only to read from an array, like y[i], but also to set values in an array, like y[i] = ... You can also use the specific array methods.
*/

var empty = [];
var years = [1999,1995,1996,1997,1994,1992,1993];

function printFullAge(years) {
    var ages = [];
    var fullAges = [];
    
    for (var i = 0; i < years.length; i++) {
        ages[i] = 2018 - years[i];
    }

    for (i = 0; i < ages.length; i++) {
        if (ages[i] > 17) {
            console.log('This person is ' + ages[i] + ' years old, and is older than 18.');
            fullAges.push(true);
        } else {
            console.log('This person is ' + ages[i] + ' years old, and is below the full age limit.');
            fullAges.push(false);
        }
    }
    
    return fullAges;
}

var full_1 = printFullAge(years);
var full_2 = printFullAge([1999, 1915, 1988]);



