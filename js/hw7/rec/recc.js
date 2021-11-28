let arr = [1, 2, 3, 4,10];

function rec(action, arr) {
    let num = null;
    for ( i of arr) {
        num = action(num,i)
    }
    return num;

};
console.log(rec(function (num, arr) {
    return num + i
}, arr));

