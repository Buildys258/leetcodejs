/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    //用对象的key是唯一的这一特性
    let obj = {}
    for(let item of nums) {
        if(item in obj) {
            return item
        } else {
            obj[item] = item
        }
    }
};