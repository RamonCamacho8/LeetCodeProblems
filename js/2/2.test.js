const {addTwoNumbers, ListNode} = require('./2');

test('Test case 1', () => {
    const l1 = ListNode.nodeFromList([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
    const l2 = ListNode.nodeFromList([5,6,4]);
    const expected = ListNode.nodeFromList([6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
    expect(addTwoNumbers(l1, l2)).toEqual(expected);
});