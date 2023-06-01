
// Two Sum
// HIDE QUESTION
// Have the function TwoSum(arr) take the array of integers stored in arr, and determine
// if any two numbers(excluding the first element) in the array can sum up to the first
// element in the array.For example: if arr is[7, 3, 5, 2, -4, 8, 11], then there are 
// actually two pairs that sum to the number 7: [5, 2] and[-4, 11].Your program should
// return all pairs, with the numbers separated by a comma, in the order the first number
// appears in the array.Pairs should be separated by a space.So for the example above,
// your program would return: 5, 2 - 4, 11
// If there are no two numbers that sum to the first element in the array, return -1
// Once your function is working, take the final output string and combine it with your ChallengeToken, both in reverse order and separated by a colon.

// Your ChallengeToken: ibsftmc17

// array : [4,3,2,7,-5,1]
// target = 4 // let target = 4
//length = 5
code: //driver function
var twoSum = function (nums) {

    let target = nums[0];  //target = 4

    //make a map 
    let mp = new Map();
    //check if the pair have the sum equal to target or not
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]; 

        // this condition is for checking wether the element is present already in the map or not
        if (mp.has(diff)) {
            return [mp.get(diff), i];
        }
        
        //setting the values
        mp.set(nums[i], i)
        console.log(mp)
    }
} 
const nums = [4,3,2,7,-5,1]
//calling the function
twoSum(nums);
