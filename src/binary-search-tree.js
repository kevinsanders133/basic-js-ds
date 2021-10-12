const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
    this.node = null;
  }

  root() {
    if (this.node === null) return null;
    return this.node;
  }

  add(data) {
    let copy = this.node;
    if (copy == null) {
      this.node = new Node(data);
    } else {
      for(;;) {
        if (data < copy.data) {
          if (copy.left === null) {
            copy.left = new Node(data);
            break;
          }
          copy = copy.left;
        } else {
          if (copy.right === null) {
            copy.right = new Node(data);
            break;
          }
          copy = copy.right;
        }
      }
    }
  }

  has(data) {
    let copy = this.node;
    if (copy === null) return false;
    if (copy.data === data) return true;
    for(;;) {
      if (data < copy.data) {
        if (copy.left === null) {
          return false;
        }
        if (copy.left.data === data) {
          return true;
        }
        copy = copy.left;
      } else {
        if (copy.right === null) {
          return false;
        }
        if (copy.right.data === data) {
          return true;
        }
        copy = copy.right;
      }
    }
  }

  find(data) {
    let copy = this.node;
    if (copy === null) return null;
    if (copy.data === data) return this.node;
    for(;;) {
      if (data < copy.data) {
        if (copy.left === null) {
          return null;
        }
        if (copy.left.data === data) {
          return copy.left;
        }
        copy = copy.left;
      } else {
        if (copy.right === null) {
          return null;
        }
        if (copy.right.data === data) {
          return copy.right;
        }
        copy = copy.right;
      }
    }
  }

  remove(data) {
    let copy = this.node;

    function removeNode(actual, toBeRemoved, which) {
      let toBeRemovedLeft = toBeRemoved.left;
      let toBeRemovedRight = toBeRemoved.right;
      if (toBeRemovedRight === null) {
        actual[`${which}`] = toBeRemovedLeft;
      } else {
        actual[`${which}`] = toBeRemovedRight;
        for(;;) {
          if (toBeRemovedRight.left === null) {
            toBeRemovedRight.left = toBeRemovedLeft;
            break;
          }
          toBeRemovedRight = toBeRemovedRight.left;
        }
      }
    }

    if (copy.data === data) {
      let toBeRemovedLeft = this.node.left;
      let toBeRemovedRight = this.node.right;
      if (toBeRemovedRight === null) {
        if (toBeRemovedLeft === null) {
          this.node.data = null;
        } else {
          this.node.left = toBeRemovedLeft;
        }
      } else {
        this.node = toBeRemovedRight;
        let actual = this.node;
        for(;;) {
          if (actual.left === null) {
            actual.left = toBeRemovedLeft;
            break;
          }
          actual = actual.left;
        }
      }
    }
    else {
      for(;;) {
        if (data < copy.data) {
          if (copy.left === null) {
            break;
          }
          if (copy.left.data === data) {
            let toBeRemoved = copy.left;
            removeNode(copy, toBeRemoved, 'left');
            break;
          }
          copy = copy.left;
        } else {
          if (copy.right === null) {
            break;
          }
          if (copy.right.data === data) {
            let toBeRemoved = copy.right;
            removeNode(copy, toBeRemoved, 'right');
            break;
          }
          copy = copy.right;
        }
      }
    }
  }

  min() {
    let copy = this.node;
    if (copy === null) return null;
    for(;;) {
      if (copy.left === null) return copy.data;
      copy = copy.left;
    }
  }

  max() {
    let copy = this.node;
    if (copy === null) return null;
    for(;;) {
      if (copy.right === null) return copy.data;
      copy = copy.right;
    }
  }

}