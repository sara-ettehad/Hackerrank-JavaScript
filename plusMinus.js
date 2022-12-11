function plusMinus(arr) {
    // Write your code here
    let positives = 0, negatives = 0, zeros = 0;
    
    arr.map((ele, ind, arr) =>{
        if (ele > 0){
            positives++;
        } else if (ele < 0){
            negatives++;
        } else {
            zeros++;
        }
        return ele;
    });
    
    console.log(positives/arr.length);
    console.log(negatives/arr.length);
    console.log(zeros/arr.length);
}