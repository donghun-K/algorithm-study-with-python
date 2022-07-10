# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        root = prev = ListNode(None)
        prev.next = head
        
        while head and head.next:
            temp = head.next
            head.next = temp.next
            temp.next = head
            
            prev.next = temp
            
            head = head.next
            prev = prev.next.next
            
        return root.next
    
            