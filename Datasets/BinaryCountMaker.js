require('mathjs');
function bitLength(x) {
    if (x < 1) {
        return 1;
    } else {
        return Math.floor(Math.log(x)/Math.log(2))+1;
    }
}
function numberToBinary(x,size) {
    let value = x;
    let sample = value.toString(2);
    let arr = [];
    let k = bitLength(x)-1;
    for (let i = size-1; i >= 0; i--) {
        let char = sample.charAt(k);
        if (char == '') {
            arr[i] = 0;
        } else {
            arr[i] = JSON.parse(char);
        }
        k--;
    }
    return arr;
}
function makeData(bitsize) {
    let data = [];
    let elementslength = Math.pow(2,bitsize);
    let size = bitLength(bitsize)
    for (let i = 0; i < Math.pow(2,bitsize)-1; i++) {
        let obj = {
            input: numberToBinary(i,bitsize),
            target: numberToBinary(i+1,bitsize)
        }
        data.push(obj);
    }
    return data;
}
module.exports = {
    makeData: makeData
}
