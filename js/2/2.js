
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }

    static nodeFromList(list) {
        let head = new ListNode(list[0]);
        let current = head;
        for (let i = 1; i < list.length; i++) {
            current.next = new ListNode(list[i]);
            current = current.next;
        }
        return head;
    }

    toList() {
        let list = [this.val];
        let current = this;
        while (current.next !== null) {
            current = current.next;
            list.push(current.val);
        }
        return list;
    }

    print() {
        let current = this;
        let str = '';
        while (current.next !== null) {
            str += current.val + ' -> ';
            current = current.next;
        }
        str += current.val;
        console.log(str);
    }

    reverse () {
        let current = this;
        let prev = null;
        let next = null;
        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return prev;
    }


}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */ 
var addTwoNumbers = function(l1, l2) {
    
    let carry = 0;
    let current = null;

    while (!(l1.next === null && l2.next === null)) {
        
        const l1val = l1.val || 0;
        const l2val = l2.val || 0;
        console.log(l1val, l2val);
        const sum = l1val + l2val + carry;
        carry = sum > 9 ? 1 : 0;
        current = new ListNode(sum % 10, current);

        if (l1.next === null) {
            l1.next = new ListNode(0);
        }
        if (l2.next === null) {
            l2.next = new ListNode(0);
        }

        l1 = l1.next;
        l2 = l2.next;
    }

    const sum = l1.val + l2.val + carry;
    carry = sum > 9 ? 1 : 0;
    current = new ListNode(sum % 10, current);
    if(carry > 0) {
        current = new ListNode(carry, current);
    }
    return current.reverse();
};

/* const l1 = ListNode.nodeFromList([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
const l2 = ListNode.nodeFromList([5,6,4]); */

/* console.log(addTwoNumbers(l1, l2).toList()); */

const l1 = ListNode.nodeFromList([2, 4, 3]);
const l2 = ListNode.nodeFromList([5, 6, 4]);

addTwoNumbers(l1, l2).print();

module.exports = {addTwoNumbers, ListNode};