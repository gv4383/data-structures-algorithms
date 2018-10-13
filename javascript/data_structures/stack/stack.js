class Stack {
  constructor() {
    this._storage = {};
    this._length = 0;
  }

  /*
  * Adds a new value at the end of the stack
  * @param {*} value - the value to push
  */
  push(value) {
    // DOESN'T account for type checking
    // Needs to check if there's an actual argument
    this._storage[this._length] = value;
    this._length++;
  }

  /*
  * Removes the value at the end of the stack and returns it
  * @return {*} the last and newest value in the stack
  */
  pop() {
    if (this._length) {
      const lastVal = this._storage[this._length - 1];
      this._storage[this._length - 1] = undefined;
      this._length--;

      return lastVal;
    } else {
      // if the stack is empty, throw error, return nothing, etc.
    }
  }

  /*
  * Returns the value at the end of the stack without removing it
  * @return {*} the last and newest value in the stack
  */
  peek() {
    if (this._length) {
      return this._storage[this._length - 1];
    } else {
      // if the stack is empty, throw error, retunr nothing, etc.
    }
  }
}
