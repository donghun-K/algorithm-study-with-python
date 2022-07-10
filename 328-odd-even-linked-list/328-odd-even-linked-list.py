# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def oddEvenList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        odd_root = odd = ListNode(None)
        even_root = even = ListNode(None)
        
        i = 1
        
        while head:
            if i % 2 == 0:
                even.next = head
                even = even.next
            else:
                odd.next = head
                odd = odd.next
            i += 1
            head = head.next
        
        even.next = None
        odd.next = even_root.next
        
        return odd_root.next
        