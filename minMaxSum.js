function miniMaxSum(arr) {
    // Write your code here
    let sortarr = arr.sort();
    let min = 0;
    let max = 0;
    
    for(let i = 0 ; i < arr.length-1 ; i++){
        min += sortarr[i];
    }
    for(let j = arr.length-1 ; j > 0 ; j--){
        max += sortarr[j];
    }
    console.log(min + " " + max);

    }