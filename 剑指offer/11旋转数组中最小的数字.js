/**
 * @param {number[]} numbers
 * @return {number}
 */

var minArray = function(numbers) {
    //因为该数组是片段递增的，只要跟第一个比较，找出第一个比第一个数字小的就行了，如果没找到，就返回第一个
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] < numbers[0])
            return numbers[i]
    }
            return numbers[0]
};