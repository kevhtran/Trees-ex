/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;

    let total = this.root.val;

    function sumHelper(node) {
      // go through all the children for a Node

      for (let child of node.children) {
        // accumulate all values

        total += child.val;
        // if it has any children

        if (child.children.length > 0) {
          // recurse with the child as the root

          sumHelper(child);
        }
      }
    }
    sumHelper(this.root);
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */
  //  num % 2 === 0
  countEvens() {
    if (!this.root) return 0;
    // if returns 0, means its even so increase count by 1 else by 0.
    let counter = this.root.val % 2 === 0 ? 1 : 0;
    function countEvensHelper(node) {
      for (let child of node.children) {
        // if node value even increase counter
        if (child.val % 2 === 0) counter++;
        // recurse with child as root if any children
        if (child.children.length > 0) {
          countEvensHelper(child);
        }
      }
    }
    // call the helper function
    countEvensHelper(this.root);
    return counter
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  // Given a n-ary tree and a number x, find and return the number of nodes which are greater than x.


  // dont know how to do this?
  numGreater(lowerBound) {
    if (!this.root) return 0;

    let count = this.root.val > lowerBound ? 1 : 0;

    function countEvensHelper(node) {
      // go through all the children for a Node
      for (let child of node.children) {
        // count the child if the value is greater than lowerBound
        if (child.val > lowerBound) count++;
        // if it has any children
        if (child.children.length > 0) {
          // recurse with the child as the root
          countEvensHelper(child);
        }
      }
    }

    countEvensHelper(this.root);
    return count;
  }
}

module.exports = { Tree, TreeNode };
