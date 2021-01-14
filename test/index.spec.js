const assert = require('assert');
const { skipideletej } = require('../index');
const { LinkedList, ListNode, createLinkedList, toArray } = require('../linkedLists');

describe('skip i delete j tests', () => {
   it('test case #1 - i = 2, j = 2', () => {
      let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      let i = 2;
      let j = 2;
      let solution = [1, 2, 5, 6, 9, 10];
      let list = createLinkedList(arr);
      let output = skipideletej(list, i, j);
      assert.deepEqual(toArray(output), solution);
   });

   it('test case #2 - i = 2, j = 3', () => {
      let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10, 11, 12];
      let i = 2;
      let j = 3;
      let solution = [1, 2, 6, 7, 11, 12];
      let list = createLinkedList(arr);
      let output = skipideletej(list, i, j);
      assert.deepEqual(toArray(output), solution);
   });

   it('test case #3 - i = 2, j = 4', () => {
      let arr = [1, 2, 3, 4, 5];
      let i = 2;
      let j = 4;
      let solution = [1, 2];
      let list = createLinkedList(arr);
      let output = skipideletej(list, i, j);
      assert.deepEqual(toArray(output), solution);
   });

   it('test case #4 - i = 2, j = 0', () => {
      let arr = [1, 2, 3, 4, 5];
      let i = 2;
      let j = 0;
      let solution = [1, 2, 3, 4, 5];
      let list = createLinkedList(arr);
      let output = skipideletej(list, i, j);
      assert.deepEqual(toArray(output), solution);
   });
});