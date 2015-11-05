/**
 * Created by walkthunder on 15/11/5.
 */

/**
 *
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].
 * Note:
 * You must do this in-place without making a copy of the array.
 * Minimize the total number of operations.
 *
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var originCount = nums.length;
    var count0 = 0;
    for(var i = 0; i < originCount-count0;) {
        //console.info('nums: ' + nums);
        //console.info(i);
        //console.info('count0: ' + count0);
        if(nums[i] === 0) {
            nums.splice(i,1);
            //console.info(nums);
            //console.info('changedCount: ' + (originCount-(count0)-1));
            nums[originCount-1] = 0;
            count0++;
            //console.info(nums);
        } else {
            i++
        }
    }

};
