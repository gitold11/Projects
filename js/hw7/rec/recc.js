
function rec(arr,lenght) {
if (lenght <= 0){
    return 0;
}else return (rec(arr,lenght - 1)+ arr[lenght -1]);
};
let arr = [1, 2, 3, 4,5,10];
let lenght = arr.length;
console.log(rec(arr, lenght));
