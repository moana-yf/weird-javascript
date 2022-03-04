class Node {
    Node next;
    Object element;

}

class Stack {
    Node next;

    int[] arr = {};

    public Stack() {
        this.next = null;
    }

    void push(Object x) {
        Node tmpNode = new Node();
        tmpNode.element = x;
        tmpNode.next = this.next;
        this.next = tmpNode;
    }

}