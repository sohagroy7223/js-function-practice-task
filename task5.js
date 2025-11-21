function odd_even(number) {
    if (number % 2 === 0) {
        console.log(number);
        return "even";
    } else {
        console.log(number);
        return "odd";
    }
}
const valu = 20;
const result = odd_even(valu);
console.log(result);
console.log(odd_even(7));
