function count_zero(str) {
    let count = 0;
    for (const zero of str) {
        if (zero === "0") {
            count++;
        }
    }
    return count;
}
const answer = count_zero("0,1,0,0,1,1,1,0");
console.log(answer);
