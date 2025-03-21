const nums = [3, 8, 2, 6, 7];
const nums2 = [1, 2, 3, 4, 5];
let max = nums[0]
let min = nums[0]
let grid = []
let receiver = []
let target = 10;
let count = 0;
let a = 0;
let b = 0;
let c = 0;

function findMaxMin(){
for(let i = 0; i < nums.length; i++){
    if(nums[i] < min) {
        min = nums[i]
    }
    if(nums[i] > max) {
        max = nums[i]
    }
}
console.log(`Maior número: ${max}\nMenor número: ${min}`)
}

function finSum(){
for(let i = 0; i < nums.length; i++){
    console.log(`Indice I : ${nums[i]}`)
    for(let j = 0; j < nums2.length; j++){
        console.log(`Indice J : ${nums2[j]}`)
        if(nums[i] + nums2[j] === target){
            grid.push([nums[i], nums2[j]])
        }
    }
}
console.table(grid)
}

function all() {
    for(let i = 0; i < nums.length; i++){
        count = count + nums[i]
    }
    console.log(count)
    for(let i = 0; i < nums2.length; i++){
        count = count + nums2[i]
    }
    console.log(count)
}

function average() {
    for(let i = 0; i < nums.length; i++ ){
        a = a + nums[i]
    }
    console.log(`Média do primeiro array: ${a / nums.length}`)
    for(let i = 0; i < nums2.length; i++){
        b = b + nums2[i]
    }
    console.log(`Média do segundo array: ${b / nums2.length}`)
    console.log(`Soma dos dois arrays: ${a / nums.length + b / nums2.length}`)
    console.log(`Média dos dois arrays: ${(a + b) / (nums.length + nums2.length)}`)
}

function duplicates(){
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums2.length; j++){
            if(nums[i] === nums2[j]){
            receiver.push(nums[i])
            }
        }
    }
    console.table(receiver)
}

function oneMoreAll(){
    for(let i = 0; i < nums.length; i++){
        receiver = []
        for(let j = 0; j < nums2.length; j++){
            receiver.push(nums[i] + nums2[j])
        }
        grid.push(receiver)
    }
    console.table(grid)
}

function index(){
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums2.length; j++){
            if(nums[i] === nums2[j]){
                receiver.push(`Index ${i} numero ${nums[i]}`)
            }
        }
    }
    console.log(receiver)
}

//#region  bubble sort and search binary

function binarySerach(array, target) {
    let left = 0;
    let right = array.length -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if(array[mid] === target){
            return mid
        }

        if(array[mid] < target){
            left = mid + 1;
        } else{
            right = mid - 1;
        }
    }
    return -1
}

function ordenatetobinarysearch(array) {
    console.log("Array original:", array);

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }

    console.log("Array ordenado:", array);
    return array;
}

ordenatetobinarysearch(nums);

//#endregion