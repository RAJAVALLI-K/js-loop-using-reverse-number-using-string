// reverse number using string

let value = parseInt(prompt("Enter a the number:"));
let num = 0;
while (value !== 0) {
    let sum = value % 10;
    value = (value - sum) / 10;
    num = num * 10 + sum;
    // console.log(num);

    if (sum == 1) {
        console.log(+sum + 'one');
    }
    else if (sum == 2) {
        console.log(+sum + 'two');
    }
    else if (sum == 3) {
        console.log(+sum + 'three');
    }
    else if (sum == 4) {
        console.log(+sum + 'four');
    }
    else if (sum == 5) {
        console.log(+sum + 'five');
    }
    else if (sum == 6) {
        console.log(+sum + 'six');
    }
    else if (sum == 7) {
        console.log(+sum + 'seven');
    }
    else if (sum == 8) {
        console.log(+sum + 'eight');
    }
    else if (sum == 9) {
        console.log(+sum + 'nine');
    } else if (sum == 0) {
        console.log(+sum + 'zero');
    }
}