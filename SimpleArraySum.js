function simpleArraySum(ar) {
    // Write your code here
    let result = 0;
    for(const i in ar){
        result += ar[i];
    }
    return result;
}