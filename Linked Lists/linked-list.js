class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.end = this.head;
        this.length = 0;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.end = newNode;
        } else {
            this.end.next = newNode;
            this.end = newNode;
        }
        this.length++;
    }

    getIndex(index) {
        let currentNode = this.head;
        let count = 0;
        while (count < index) {
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
    }

    insert(data, index) {
        const newNode = new Node(data);
        if (index >= this.length) {
            this.append(data);
        } else if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
            return this;
        } else {
            let previous = this.getIndex(index - 1);
            let temp = previous.next;
            previous.next = newNode;
            newNode.next = temp;
            this.length++;
            return this;
        }
    }

    delete(index) {
        if (index >= this.length) {
            //como el ultimo será borrado seteamos el penultimo como el ultimo de la lista
            let previous = this.getIndex(this.length - 2);
            previous.next = null;
            this.end = previous;
            this.length--;
            return this;
        } else if (index === 0) {
            this.head = this.head.next;
            this.length--;
            return this;
        } else {
            let previous = this.getIndex(index - 1);
            previous.next = previous.next.next;
            this.length--;
            return this;
        }
    }

    deleteDuplicates() {
        const set = new Set();
        let previous = null;
        let current = this.head;

        while (current.next !== null) {
            console.log(current.next);
            if (set.has(current.data)) {
                previous.next = current.next;
                current = current.next;
                this.length--;
            } else {
                set.add(current.data);
                if (current.next !== null) {
                    previous = current;
                    current = current.next;
                }
            }
        }
    }

    findKNode() {
        if (this.head === null) {
            return;
        }
        let firstPointer = this.head;
        let secondP = this.head;
        for (let i = 0; i < k; i++) {
            if (firstPointer === null) {
                return null
            } else {
                firstPointer = firstPointer.next;
            }
        }
        while (firstPointer !== null) {
            firstPointer = firstPointer.next;
            secondP = secondP.next;
        }
        return secondP;
    }
}

const list = new LinkedList();
list.append(4);
list.append(5);
list.append(9);
list.append(0);
list.append(5);
list.append(1);
list.append(2);
//list.insert(0,3)
//list.delete(7);
//list.deleteDuplicates();
//console.log(list);
console.log(list.deleteDuplicates(3));