def reverseList(head):
    on = head
    prev = None
    while on != None:
        temp = on.next
        on.next = prev
        prev = on