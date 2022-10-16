const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.head = null;
  }

  root() {
    //throw new NotImplementedError('Not implemented');
    return this.head;
  }

  add(data) {
    //throw new NotImplementedError('Not implemented');
    this.head = addNode(this.head, data);
    function addNode(node, data){
      if(!node) return new Node(data);
      if(node.data === data) return data;

      if(data < node.data) node.left = addNode(node.left, data);
      else node.right = addNode(node.right, data);

      return node;
    } 
  }

  has(data) {
    //throw new NotImplementedError('Not implemented');
    return !!this.find(data)
  }
  find(data) {
    //throw new NotImplementedError('Not implemented');
    let findNode = this.head;
    while (findNode){
      if (findNode.data === data) return findNode;
    if (data > findNode.data) {
      findNode = findNode.right
    } else if (data < findNode.data) {
      findNode = findNode.left
    } 
  }
      return null;
  }

  remove(data) {
    //throw new NotImplementedError('Not implemented');
    function removeNode(node, data){
      if(!node) return null;
      if(data < node.data){
        node.left = removeNode(node.left, data);
        return node;
      } else if(data > node.data){
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if(!node.left && !node.right){
          return null;
        }
        if(!node.left){
          node = node.right;
          return node;
        }
        if(!node.right){
          node = node.left;
          return node;
        }

        let maxFromLeft = node.left;
        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right;
        }
        node.data = maxFromLeft.data;
        node.left = removeNode(node.left, maxFromLeft.data);
        return node;
      }
    }

    this.head = removeNode(this.head, data);
  }

  min() {
    //throw new NotImplementedError('Not implemented');
    let minNode = this.head;
      while (minNode.left){
        minNode = minNode.left;
      }
      return minNode.data;
  }

  max() {
    //throw new NotImplementedError('Not implemented');
    let maxNode = this.head;
      while (maxNode.right){
        maxNode = maxNode.right;
      }
      return maxNode.data;
    } 
}

module.exports = {
  BinarySearchTree
};