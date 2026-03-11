//largest number using default for loop
let nums = [5, 12, 8, 20, 3];
let large = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] > nums[i + 1]) {
    large = nums[i];
  }
}
console.log(large);

//using Math.max
let nums = [5, 12, 8, 20, 3];
let large = 0
for(let i = 0; i < nums.length; i++){
    large = Math.max(large, nums[i])
    
}console.log(large)

// filter using default for loop
let fruits = ["Apple", "Banana", "Mango", "Banana"];
let remainingFruits = []
for(let i = 0; i<fruits.length; i++){
    if(fruits[i] !== "Mango"){
        remainingFruits.push(fruits[i])
    }
    
}
console.log(remainingFruits)


