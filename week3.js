
function FirstReverse(str) { 
    let strArr = str.split("");
    str = strArr.reverse().join("");
    return str;
    }
    console.log(firstReverse("codebyte"));