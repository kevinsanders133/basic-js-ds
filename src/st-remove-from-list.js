const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

module.exports = function removeKFromList(l, k) {
  let prev = null;
  let actual = l;
  let next = null;
  for(;;) {
    if (actual.value === k) {
      if (prev !== null) {
        prev.next = next;
        actual = next;
        if (actual === null) break;
        next = actual.next;
      } else {
        l = actual.next;
        actual = l;
        if (actual === null) break;
      }
    } else {
      prev = actual;
      actual = prev.next;
      if (actual === null) break;
      next = actual.next;
    }
  }
  return l;
}
