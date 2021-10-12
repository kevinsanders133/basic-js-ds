const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {

  constructor() {
    this.node = null;
  }

  getUnderlyingList() {
    return {
      value: this.node.value,
      next: this.node.next
    };
  }

  enqueue(value) {
    let copy = this.node;
    if (copy === null) {
      this.node = new ListNode(value);
    } else {
      for(;;) {
        if (copy.next === null) {
          copy.next = new ListNode(value);
          break;
        }
        copy = copy.next;
      }
    }
  }

  dequeue() {
    let copy = this.node;
    if (this.node === null) return 1;
    if (this.node.next === null) {
      this.node = null;
      return copy.value;
    }
    this.node = this.node.next;
    return copy.value;
  }

}
