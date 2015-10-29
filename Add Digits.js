/**
 * Created by walkthunder on 15/10/29.
 */
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num === 0) {
        return 0;
    } else {
        return (num-(9*Math.floor((num-1)/9)));
    }
};