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
list.append(9);
list.append(1);
list.append(2);
console.log(list.deleteDuplicates(3));