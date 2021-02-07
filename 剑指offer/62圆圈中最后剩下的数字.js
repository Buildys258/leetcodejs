/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
    /*  //利用数组模拟
     let arr = []
     for(let i = 0; i < n; i++) {
         arr.push(i)
     }
     let index = 0
     while( n > 1) {//数组长度 //n--不能乱用，看下面有没有用到n
     index = (index + m - 1) % n
     arr.splice(index,1)
     n--
     }
     return arr[0] */
         let result = 0;
             for(let i = 2; i <= n; i++) {
                 result = (m + result) % i;
             }
             return result
 
        
             
 };