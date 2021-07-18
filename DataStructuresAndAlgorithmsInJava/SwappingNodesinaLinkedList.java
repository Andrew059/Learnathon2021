public class SwappingNodesinaLinkedList {
    public static ListNode getKNodeEnd(ListNode head, int k){
        ListNode curr = head;
        ListNode temp =head;
        int r =k;
        while(r-->0){
            temp = temp.next;
        }
        while(temp!=null){
            curr = curr.next;
            temp= temp.next;
        }
        return curr;
        
    }
    public ListNode swapNodes(ListNode head, int k) {
        ListNode end = getKNodeEnd(head, k);
        k=k-1;
        ListNode curr = head;
        while(k-->0){
            curr = curr.next;
        }
        int temp = curr.val;
        curr.val = end.val;
        end.val  = temp;
        return head;
    }
    
    }
}
