function birthday(s, d, m) {
    // Write your code here
    let count = 0;
    let sum = 0;
    for(let i = 0; i < s. length; i++){
        sum = s[i];
        for(let j = 1; j < m; j++){
            sum += s[i+j];
        }
        if( sum == d ){
            count++;
            sum = 0;
        }
    }
    return count;
}