function compareTriplets(a, b) {
    // Write your code here
    let alicpoint = 0;
    let bobpoint = 0;
    for(const i in a,b){
        if(a[i] > b[i]){
            alicpoint++;
        }
        if(a[i] < b[i]){
            bobpoint++;
        }
    }
        let result = [alicpoint,bobpoint];

    return result;
}