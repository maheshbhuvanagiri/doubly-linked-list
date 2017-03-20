const Node = require('./node');

class LinkedList {

    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;        
    }

    append(data) {
        var node = new Node(data,null,null);
        if(this.length == 0){
            this._head = node;
            this._tail = node;
        }else{
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {
         if (this.length == 0) {
            return null;
        }
        return this._head.data;
    }

    tail() {
         if (this.length == 0) {
            return null;
        }
        return this._tail.data;
    }

    at(index) {
        var currentNode = this._head,
            length = this.length,
            count = 0;
        
        while (count < index){
            currentNode = currentNode.next;
            count++;
        }
        return currentNode.data;
    }

    insertAt(index, data) {
        var current = this._head,
            previous = null,
            node = null;
            

        if (index > this.length-1 || index < 0){  
            return null;
        }

        for (var i = 0; i < index; i++) {
            current = current.next; 
        }
        
        previous = current.prev;
        node = new Node(data, current.prev, current);  
        current.prev = node;

        if (previous != null){         
            previous.next = node;
        }
        this.length++; 
        return this;     
    }

    isEmpty() {
        return this.length===0;
    }

    clear() {
        this.length = 0;
        this._head = null;
        this._tail = null;
        return this;
    }

    deleteAt(index) {
     if(index == -1 || index > this.length){
        return null;
     }else{
       var current = this._head;
        if (index === 0){
            this._head = current.next;  
            if (this.length===1){ 
                this._tail = null;
            } else {
                this._head.prev = null;
            }              
        } else if (index == this.length -1){
            current = this._tail;
            this._tail = current.prev;
            this._tail.next = null;
        } else {
            for (var i=0; i<index; i++) { 
                current = current.next;
            }
            current.prev.next = current.next;
        }
        this.length--;
        return this; 
    }  
  }

    reverse() {

    }

    indexOf(data) {
        var currentNode = this._head,
            length = this.length,
            index = 0;
            while(index < length){
                if(currentNode.data == data){
                    return index;
                }else{
                    currentNode = currentNode.next;
                }
                index ++;
            }
        return -1;
    }
}

module.exports = LinkedList;
