class ListNode:
    def __init__(self, value):
        self.value = value
        self.next = None


def removeNthFromEnd(head, n):
    # 1. measure length
    on = head
    length = 1
    while on:
        length += 1
        on = on.next
    leftIndex = length - n - 1

    # 3. handle head deletion (edge case)
    if leftIndex == 0:
        return head.next

    # 2. point around n
    on = head
    while leftIndex > 1:
        leftIndex -= 1
        on = on.next
    on.next = on.next.next
