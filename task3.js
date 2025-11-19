function make_avg(numbers) {
    let sum = 0;
    for (const number of numbers) {
        // console.log(number);
        sum = sum + number;
    }
    const avarage = sum / numbers.length;
    return avarage;
}
const avg = make_avg([10, 32, 5, 74, 11, 13]);
console.log("total number is", avg);
