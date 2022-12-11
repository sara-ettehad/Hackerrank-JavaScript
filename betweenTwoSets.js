function getTotalX(a, b) {
    // Write your code here
    let count = 0;
    
    for(let i = a[a.length - 1] ; i <= b[0] ; i++){
        let j = 0;
        if(a.every((e) => i % e == 0) && b.every((el) => el % i == 0)){
            count++;
        }
    }
    return count;
}