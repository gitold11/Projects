
function rec(arr) {
arr = arr.toString();
return arr.length === 0
    ? 0
    : +arr[0] + rec(arr.slice(1));
};
let arr = [12345];
console.log(rec(arr));
