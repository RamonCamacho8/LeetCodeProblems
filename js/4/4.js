/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    
    const totalLen = nums1.length + nums2.length;

    if(totalLen === 0) return 0;
    if(totalLen === 1) {
        return nums1.length === 1 ? nums1[0] : nums2[0];
    }
    if(totalLen === 2) {
        if(nums1.length === 1 && nums2.length === 1) return ((nums1[0] + nums2[0] ) / 2)
        else return nums1.length === 2 ? ((nums1[0] + nums1[1] ) / 2) : ((nums2[0] + nums2[1] ) / 2)
    }

    const isEven = totalLen % 2 === 0 ? true : false;

    let median = 0;

    let i = 0;
    let j = 0;

    if (isEven) {

        let currentNumber = 0;

        for (let t = 0; t <= totalLen / 2; t++) {
            median = currentNumber;

            const n1 = nums1[i] ;
            const n2 = nums2[j] ;

            if (n2 === undefined) {
                currentNumber = n1;
                i++;
                continue;
            }
            if (n1 === undefined) {
                currentNumber = n2;
                j++;
                continue;
            }


            if (n1 <= n2) {
                currentNumber = n1;
                i++;
            } else {
                currentNumber = n2;
                j++;
            }
        }

        median = (currentNumber + median) / 2;


    } else {

        let currentNumber = 0;

        for (let t = 0; t < totalLen / 2; t++) {

            const n1 = nums1[i];
            const n2 = nums2[j];

            if (n2 === undefined) {
                currentNumber = n1;
                i++;
                continue;
            }
            if (n1 === undefined) {
                currentNumber = n2;
                j++;
                continue;
            }

            if (n1 <= n2) {
                currentNumber = n1;
                i++;
            } else {
                currentNumber = n2;
                j++;
            }
            median = currentNumber;
        }

        
    }
    return median;
};

const numbers_2 = [0 , 0];
const numbers_1 = [0 , 0];

console.log(findMedianSortedArrays(numbers_1, numbers_2));
