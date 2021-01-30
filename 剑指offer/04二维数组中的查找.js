/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    if(matrix.length < 1 || matrix[0].length < 1) {
        return false
    }
    let row = 0
    let col = matrix[0].length - 1 
    let corner//从第一排最后一个开始为corner 这样好对比 因为从左往右递增，从上往下递增
    while(row < matrix.length && col >= 0) { //开始查找 但是要有边界条件，边界条件是不出最后一行，不出第一列
        corner = matrix[row][col]
        if(target === corner) {
            return true
        } else if (target < corner) {
            col--
        } else {
            row++
        }
    }
    //都没有查找到 返回false
    return false
};