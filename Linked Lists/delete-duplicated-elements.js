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
}

const list = new LinkedList();
list.append(4);
list.append(5);
list.append(9);
list.append(0);
list.append(5);
list.append(9);
list.append(1);
list.append(2);
list.deleteDuplicates();
console.log(list);