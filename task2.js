function multiOrDiv(number) {
    if (number % 2 === 1) {
        const multiply = number * 2;
        return multiply;
    } else {
        const div = number / 2;
        return div;
    }
}
const result = multiOrDiv(243);
console.log(result);
