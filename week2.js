const minMax = (arr) =>{
    let output=[]
    arr.sort(function(a,b){return a - b});
    output.push(arr[0]);
    output.push(arr[arr.length-1]);
return output
}

console.log(minMax([1,2,3,4,5,6,7]));
console.log(minMax([897766667778,5]));
console.log(minMax([1]));