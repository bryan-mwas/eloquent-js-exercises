/**
 * A simple program that displays numbers 0 through 100
 * Numbers divisible by 3 display 'Fizz'
 * Numbers divisible by 5 display 'Buzz'
 * Numbers divisible by both 3 and 5 display 'FizzBuzz'
 */
for(let i = 0; i <= 100; i++) {
    let output = '';
    if(i % 3 == 0) output += 'Fizz';
    if(i % 5 == 0) output += 'Buzz';
    console.log(output || i);  // short-circuiting of logical operator, if output is empty displays the number.
}

/**
 * My initial not so clever attempt
 */
for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && !(i % 5 == 0)) {
        console.log("Fizz");
        continue;
    }
    else if (i % 5 == 0 && !(i % 3 == 0)) {
        console.log("Buzz");
        continue;
    }
    else if (i % 5 == 0 && i % 3 == 0) {
        console.log("FizzBuzz");
        continue;
    }
    else {
        console.log(i);
    }
}