

// 1) задание

let arr = [8, 3, 0.6, null, 2, 0.8, 67,undefined, ];
let zerocount = 0;
let numbercount = 0;
let evencount = 0;
let oddcount = 0;
const getType=()=>{
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" || !isNaN(arr[i])) {
        ++numbercount ;
        if (arr[i] === 0) {
            ++zerocount;
        } else if (arr[i] % 2 === 0) {
            ++evencount ;
        } else {
            ++oddcount;
        }
    }
}
console.log(`В массиве: ${numbercount} цифр, ${zerocount} нулей, ${evencount} чётных, ${oddcount} нечётных!`);
}
getType()










