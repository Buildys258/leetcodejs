/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let first = new ListNode(0) //新建一个节点，初始赋值，val为0,这样好遍历
    let pre = first //再定义一个变量遍历对比后的链表，这个就是最后合成的链表，但是这是单向链表，不能往前走，所以得定义两个，到时候用另一个表示
    while(l1 !== null && l2 !== null) {//两个中有一个为空，直接跳出循环，就不用对比了
        if(l1.val <= l2.val) {
            pre.next = l1
            l1 = l1.next
        } else {
            pre.next = l2
            l2 = l2.next
        }
        //向前走，拿到val
        pre = pre.next
    }
    //跳出循环判断有没有链表长度不一样，不一样就比较简单
    //只要指向未空的链表就行了
    //判断谁先空
    pre.next = l1 == null ? l2 : l1
    return first.next
};