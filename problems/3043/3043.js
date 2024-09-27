const fs = require('fs');
const a_data = fs.readFileSync('3043/3043_a.txt', 'utf8');
const b_data = fs.readFileSync('3043/3043_b.txt', 'utf8');

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function (arr1, arr2) {
    let longest = 0;
    let iterations = 0;

    // Determine the smaller and larger array
    let [smallerArr, largerArr] = arr1.length <= arr2.length ? [arr1, arr2] : [arr2, arr1];

    for (let i = 0; i < smallerArr.length; i++) {
        const pivot1 = smallerArr[i].toString();

        // Skip if the pivot's length is already less than or equal to the current longest prefix
        if (pivot1.length <= longest) continue;

        for (let j = 0; j < largerArr.length; j++) {
            const pivot2 = largerArr[j].toString();
            let prefixLength = 0;
            const maxLength = Math.min(pivot1.length, pivot2.length);

            // Skip if the maximum possible length is less than or equal to current longest prefix
            if (maxLength <= longest) continue;

            // Compare the characters one by one
            while (prefixLength < maxLength && pivot1[prefixLength] === pivot2[prefixLength]) {
                prefixLength++;
                iterations++;
            }

            // Update the longest found prefix length
            if (prefixLength > longest) {
                longest = prefixLength;
            }

            iterations++;
        }
    }
    console.log("Result:", longest + " iterations:", iterations);
    return longest;
};

var longestCommonPrefixGPT = function (arr1, arr2) {
    let longest = 0;
    let iterations = 0;

    // Determine the smaller and larger array
    let [smallerArr, largerArr] = arr1.length <= arr2.length ? [arr1, arr2] : [arr2, arr1];

    // Convert all elements to strings once
    smallerArr = smallerArr.map(item => item.toString());
    largerArr = largerArr.map(item => item.toString());

    // Use a set to track checked prefixes for optimization
    let checkedPrefixes = new Set();

    for (let i = 0; i < smallerArr.length; i++) {
        const pivot1 = smallerArr[i];

        // Skip if the pivot's length is already less than or equal to the current longest prefix
        if (pivot1.length <= longest || checkedPrefixes.has(pivot1)) {
            console.log("Skipping", pivot1);
            continue;
        };

        for (let j = 0; j < largerArr.length; j++) {
            const pivot2 = largerArr[j];
            let prefixLength = 0;
            const maxLength = Math.min(pivot1.length, pivot2.length);

            // Skip if the maximum possible length is less than or equal to current longest prefix
            if (maxLength <= longest) continue;

            // Compare the characters one by one
            while (prefixLength < maxLength && pivot1[prefixLength] === pivot2[prefixLength]) {
                prefixLength++;
                iterations++;
            }

            // Update the longest found prefix length
            if (prefixLength > longest) {
                longest = prefixLength;
                // Store the new longest prefix in the set to avoid redundant checks
                checkedPrefixes.add(pivot1);
            }

            iterations++;
        }
    }
    console.log("Result:", longest + " iterations:", iterations);
    return longest;
};

/* const a = [657,1916,3207,555,701,657,1312,3209,2601,1319,4988,4131,4072,2084,576,581,2955,2539,4809,2579,1761,3231,1400,4359,60,1058,2801,1126,2660,154,515,3321,1040,397,2427,4127,4725,804,707,1960,3956,2583,4333,4796,3286,2772,4126,2470,1683,2991];
const b = [1724,1423,3422,210,484,491,796,246,3577,38,4639,3456,2857,299,1486,4928,3738,1285,3849,4837,2278,754,2272,1359,2821,3027,89,1164,2859,449,3436,125,688,2707,4401,2511,1636,4214,4209,3431,850,4044,4571,1454,3188,1432,4150,2105,4196,821]; */
//read from a txt file comma separated ignore first bracket and last bracket that are 
const a = a_data.trim()             // Remove any extra spsaces or newlines
    .replace(/[\[\]]/g, '')           // Remove square brackets
    .split(',')                       // Split by commas
    .map(Number);
const b = b_data.trim()             // Remove any extra spsaces or newlines
    .replace(/[\[\]]/g, '')           // Remove square brackets
    .split(',')                       // Split by commas
    .map(Number);

longestCommonPrefixGPT(a, b)