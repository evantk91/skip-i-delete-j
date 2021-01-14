const { LinkedList, ListNode, createLinkedList, toArray } = require('./linkedLists');

function skipideletej(list, i, j) {
   //Given the head of a linked list and two integers, i and j. You have to retain the first i nodes and then delete the next j nodes. 
   //Continue doing so until the end of the linked list.

   let output = new LinkedList(null);

   if(!list.head) {
      return list;
   }

   let current = list.head;
   let counter = 0;

   while(current) {
      let nextNode = current.next;
      if(counter < i) {
         if(!output.head) {
            output.head = current;
            counter++;
         } else {
            output.append(current.value);
            counter++;
         }
      } else {
         counter++;
      }

      if(counter === i + j) {
         counter = 0;    
      }

      //update current node for next iteration
      current.next = null;
      current = nextNode; 
   }

   return output;
}

module.exports = {
    skipideletej,
}