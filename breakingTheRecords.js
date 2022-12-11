function breakingRecords(scores) {
    // Write your code here
    let result = [0,0];
    let min = scores[0];
    let max = scores[0];
    
    for(let i = 0 ; i < scores.length ; i++){
        if (scores[i] < min){
            min = scores[i];
            result[1] ++;
        }
        if (scores[i] > max){
            max = scores[i];
            result[0] ++;
        }
    }
    return result;
}
