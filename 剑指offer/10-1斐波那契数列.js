/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n <= 1) return n
    //第一次循环肯定要求出f(1) 设置三个数 0 1 0 初始 然后求得 f(2)c = f(0)a + f(1)b 
    //然后往后循环
    let a = 0, b = 1, c = 0
    while(n > 0) {
        n--
        a = b
        b = c
        c = (a + b) % 1000000007
    }
    return c
};