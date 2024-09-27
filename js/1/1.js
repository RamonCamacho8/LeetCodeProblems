/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        const diffIndex = nums.slice(i+1).indexOf(diff) + i + 1;

        if (diffIndex !== -1 && diffIndex !== i) {
            return [i, diffIndex];
        }
    }
};

module.exports = twoSum;