class Node {
  value = null;
  nextNode = null;

  constructor(value, nextNode) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  head = null;

  append(value) {
    if (this.head === null) {
      this.head = new Node(value, null);
    } else {
      let currentNode = this.head;

      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }

      currentNode.nextNode = new Node(value, null);
    }
  }

  prepend(value) {
    if (this.head === null) {
      this.head = new Node(value, null);
    } else {
      this.head = new Node(value, this.head);
    }
  }

  size() {
    if (this.head === null) {
      return 0;
    }

    let count = 1;
    let currentNode = this.head;

    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
      count += 1;
    }

    return count;
  }

  head() {
    return this.head;
  }

  tail() {
    if (this.head === null) {
      return this.head;
    }

    let currentNode = this.head;

    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  }

  at(index) {
    if (this.head === null) {
      throw new Error('Index out of bounds');
    }

    let currentIndex = 0;
    let currentNode = this.head;

    while (currentIndex < index) {
      if (currentNode.nextNode === null) {
        throw new Error('Index out of bounds');
      }
      currentIndex += 1;
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  }

  pop() {
    if (this.head === null) {
      throw new Error('Empty');
    }

    let previousNode = null;
    let currentNode = this.head;

    while (currentNode.nextNode !== null) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    if (previousNode instanceof Node) {
      previousNode.nextNode = null;
    } else {
      this.head = null
    }
    
    return currentNode;

  }

  contains(value) {
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }

    return false;
  }

  find(value) {
    let currentIndex = 0;
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return currentIndex;
      }
      currentIndex += 1;
      currentNode = currentNode.nextNode;
    }

    return null;
  }

  toString() {
    let listString = '';
    let currentNode = this.head;

    while (currentNode !== null) {
      listString += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }

    listString += null;
    return listString;
  }

  insertAt(value, index) {
    if (this.head === null) {
      throw new Error('Index out of bounds');
    }

    let currentIndex = 0;
    let previousNode = null;
    let currentNode = this.head;

    while (currentIndex < index) {
      if (currentNode.nextNode === null) {
        throw new Error('Index out of bounds');
      }
      currentIndex += 1;
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    previousNode.nextNode = new Node(value, currentNode);
  }

  removeAt(index) {
    if (this.head === null) {
      throw new Error('Index out of bounds');
    }

    let currentIndex = 0;
    let previousNode = null;
    let currentNode = this.head;

    while (currentIndex < index) {
      if (currentNode.nextNode === null) {
        throw new Error('Index out of bounds');
      }
      currentIndex += 1;
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    previousNode.nextNode = currentNode.nextNode;
  }
}