function diagonalDifference(arr) {
    // Write your code here
    let sumone = 0;
    let sumtwo = 0;
    
    arr.forEach((ele , ind, arr) => {
        sumone += ele[ind];
        sumtwo += ele[arr.length -1 -ind];
    })
    return Math.abs(sumone - sumtwo);

}