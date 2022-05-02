const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 let chainMaker = {
  str: '',

  arr: [],

  getLength: function(){
      return this.arr.length;
  },

  addLink: function(value) {
    if (value === undefined) {
      this.arr.push('');
    } else {
      this.arr.push(value);
    }
    return this;
  },

  removeLink: function(position) {
    if (typeof position !== 'number' || position > this.arr.length || position < 1) {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.arr.splice(position - 1, 1)
    return this;
  },

  reverseChain: function() {
    this.arr.reverse();
    return this;
  },
  
  finishChain: function() {
    let str = '';
    for (let i = 0; i < this.arr.length; i++) {
        str += `~( ${this.arr[i]} )~`;
    }
    str = str.slice(1, str.length - 1);
    this.arr = [];
    return str;
  },
};

module.exports = {
  chainMaker
};
