class Node<TElement> {
    public next: Node<TElement> | null = null;
    public prev: Node<TElement> | null = null;
    public element: TElement;
    constructor(element: TElement) {
        this.element = element;
    };
};

export class LinkedList<TElement> {

    public head: Node<TElement> | null = null;

    public push(element: TElement) {
        if (!this.head) {
            this.head = new Node(element);
            return;
        };
        let current = this.head;
        while (current.next) {
            current = current.next;
        };
        current.next = new Node(element);
        current.next.prev = current;
    };

    public pop(): TElement {
        if (!this.head) {
            throw new Error('The list is empty');
        };
        let current = this.head;
        while (current.next) {
            current = current.next;
        };
        const element = current.element;
        if (current.prev) {
            current.prev.next = null;
        } else {
            this.head = null;
        };
        return element;
    };

    public shift(): TElement {
        if (!this.head) {
            throw new Error('The list is empty');
        };
        const element = this.head.element;
        this.head = this.head.next;
        return element;
    };

    public unshift(element: TElement): void {
        const node = new Node(element);
        node.next = this.head;
        this.head = node;
        if (node.next) {
            node.next.prev = node;
        };
    };

    public delete(element: TElement): void {
        if (!this.head) {
            throw new Error('The list is empty');
        };
        let current = this.head;
        while (current && current.element !== element) {
            current = current.next as Node<TElement>;
        };
        if (!current) {
            return;
        };
        if (current.prev) {
            current.prev.next = current.next;
        } else {
            this.head = current.next;
        };
        if (current.next) {
            current.next.prev = current.prev;
        };
    };

    public count(): number {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        };
        return count;
    };
};
