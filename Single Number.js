/**
 * Created by walkthunder on 15/10/30.
 */

/**
 * Given an array of integers, every element appears twice except for one. Find that single one.
 *
 * Note:
 * Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 *
 * Subscribe to see which companies asked this question
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var countStat = {onePos: 1.5, twoPos: 2.5, oneNeg: -1.5, twoNeg: -2.5, zero0: 0, zero1: 0.25, zero2:0.5, onePosOneNeg: 3.5, onePosTwoNeg: 4.5, twoPosOneNeg: 5.5, twoNegTwoPos: 6.5};
    var pointToIndex = null;
    //TODO: what if the nums contains some values more than 2 times
    for (var i = 0; i < nums.length; i++){
        //console.info('i : ' + i);
        if(!Number.isInteger(nums[i]))
            continue;
        //TODO: 0 case should be considered
        pointToIndex = Math.abs(nums[i]);
        if(pointToIndex < nums.length && pointToIndex > i) {
            makeRoomForCurrent(i)
                .then(function(result) {
                    if(result) {
                        moveValueTotheRightPlace(i);
                    }
                });
        } else {
            moveValueTotheRightPlace(i);
        }
    }

    for (var j = 0; j < nums.length; j++) {
        if(nums[j] === 1.5 || nums[j] == 4.5) {
            return j;
        } else if(nums[j] === -1.5 || nums[j] == 5.5) {
            return (-1)*j;
        }
    }
    //default value should be zero
    return 0;

    function moveValueTotheRightPlace(index) {
        var nextIndex = Math.abs(nums[index]);
        nums[nextIndex] = updateCountState(nums[nextIndex], nums[index]);
        /*nums[nextIndex] = (nums[nextIndex] === undefined || Number.isInteger(nums[nextIndex])) ? (0.0625 + (1 + (Math.sign(nums[index]))/2)/8):(nums[nextIndex] + (1 + (Math.sign(nums[index]))/2)/8);*/

        if(index !== nextIndex) {
            nums[index] = null;
        }
        nextIndex = null;
    }

    //TODO: This function should be implemented by state-flow
    function updateCountState(currentState, inputVal) {

        switch(currentState) {
            case undefined || Number.isInteger(currentState):
                if(inputVal>0) {
                    return 1.5;
                } else if(inputVal<0) {
                    return -1.5;
                } break;
            case 1.5:
                if(inputVal>0) {
                    return 2.5;
                } else if(inputVal<0) {
                    return 3.5;
                } break;
            case 2.5:
                if(inputVal<0) {
                    return 5.5;
                } break;
            case -1.5:
                if(inputVal<0) {
                    return -2.5;
                } else if(inputVal>0) {
                    return 3.5;
                } break;
            case -2.5:
                if(inputVal>0) {
                    return 4.5;
                } break;
            case 3.5:
                if(inputVal>0) {
                    return 5.5;
                } else if(inputVal<0) {
                    return 4.5;
                } break;
            case 4.5:
                if(inputVal>0) {
                    return 6.5;
                } break;
            case 5.5:
                if(inputVal<0) {
                    return 6.5;
                } break;
            case 0:
                if(inputVal === 0) {
                    return 0.25;
                } break;
            case 0.25:
                if(inputVal === 0) {
                    return 0.5;
                } break;
            default:
                return 0;
        }
    }

    function makeRoomForCurrent(index) {
        return new Promise(function(resolve, reject) {
            var tmp = null;
            var nextIndex = null;
            do {
                tmp = nums[index];

                if(!Number.isInteger(tmp)) {
                    nums[index] = null;
                    return resolve(false);
                }
                nextIndex = Math.abs(tmp);
                nums[index] = nums[nextIndex];
                nums[nextIndex] = (nums[nextIndex] === undefined || Number.isInteger(nums[nextIndex])) ? (0.0625 + (1 + (Math.sign(tmp))/2)/8):(nums[nextIndex] + (1 + (Math.sign(tmp))/2)/8);
            } while(Math.abs(nums[index]) < nums.length && Math.abs(nums[index]) >= index);
            resolve(true);
        });


    }
};



