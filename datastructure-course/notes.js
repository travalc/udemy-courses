// Section 2

// Intro to Arrays

/*
  Array: container of elements that allows users to
  group elements together.

  arrays are objects in javascript
  push - add element to end of array
  pop - remove last element
  indexOf - returns index

  map returns new array

  reduce returns a value
*/

//Intro to Linked Lists

/*
  definition: linear list of individual elements, collection of individual nodes.
  2 components:
    data: stores data represented by the list
    next: points to the next node in the list.
      last node points to null indicating no more nodes.
  Linked lists must be traversed sequentially in order to find the node we want
    *longer the list, the longer it takes to find the node.


  Benefits:
    1.Allocates a single node at a time
      *Only take up as much memory as needed
    2.Memory location is not important
    3.Efficient insertion/removal from the middle
      *insert node after changing next attributes
    4.Javasscript arrays have similar benefits to linked Lists

    Operations:

    ADD
      *adds new element to linked list
  */
      //ex:
         var friends = new LinkedList();
            var samira = friends.add('Samira');
            friends.add('Juliano');
            friends.add('Luci', samira);
          // friends outputs [{data: 'Luci'}, {data: 'Samira'}, {data: 'Juliano'}]
  /*
    DELETE rmeoves last element of list and reduces length of list by one
  */
          friends.delete();
          //length of friends is now 2
          //reference can be used in argument to delete specific node
              //friends.delete(someFriend);

  //CLEAR - removes all nodes, length is now 0

          friends.length; //outputs 2
          friends.clear();
          friends.length; //outputs 0

  //HAS - determines if node exists in a list, similar to Array.indexOf, but returns boolean

  var friends = new LinkedList()
  friends.has('Mara'); //returns false


  //ITERATING
    var list = new LinkedList();
    list.add('rodrigo');
    list.add('mara');
    list.add('samira');
    list.add('juliano');

    //list.head - first item of list, as long as next component isn't null, iterate to next object.

    for (var node = list.head; node !== null; node = node.next) {
      //node
      // 1. {data: 'rodrigo', next: [object]}
      // 2. data: mara, next: object
      // 3. data: samira, next: object
      // 4. data: juliano, next: null
      // END iteration
    }

//Implementation of LinkedList Class in JS

  function Node(data) {
    this.data = data;
    this.next = null;
  }

  function LinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  LinkedList.prototype.add = function(data) {
    var node = new Node(data);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    }
    this.tail.next = node;
    this.tail = node;
    this.length += 1;

    return node;
  }

  // Sets

  /*
    Definition: A collection of unique objects, objects can be anything
    ES6 operations on sets: add, delete, clear, has, values, forEach
      var mySet = new Set();
  */
