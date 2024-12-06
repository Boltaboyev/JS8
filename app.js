// Filter -------------------------------------------------------------------------------

// let arr = ['apple', 'apple', 'banana', 'mango']

// Array.prototype.customFilter = (str) => {
//     let res = []

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == str) {
//             res.push(arr[i])
//         }
//     }
//     return res
// }

// let newArr = arr.customFilter('apple')
// console.log(newArr)

// Some ---------------------------------------------------------------------------------
// let arr = ['apple', 'apple', 'banana', 'mango'];

// Array.prototype.customSome = (value) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === value) {
//             return true;
//         }
//     }
//     return false;
// };

// let result = arr.customSome('banna');
// console.log(result);

// Every -----------------------------------------------------------------------------------
// let arr = ['apple', 'apple', 'apple', 'apple'];

// Array.prototype.customSome = (value) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== value) {
//             return false;
//         }
//     }
//     return true;
// };

// let result = arr.customSome('apple');
// console.log(result);

// Map ---------------------------------------------------------------------------------
// let arr = [1, 2, 3, 4, 5, 6]

// Array.prototype.customMap = function(callback) {
//     let newArr = []
//     for (let i = 0; i < this.length; i++) {
//         newArr.push(callback(this[i], i , this));
//     }
//     return newArr;
// }

// let newArr = arr.customMap((value) => value * value)

// console.log(newArr);
