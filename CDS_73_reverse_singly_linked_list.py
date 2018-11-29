class Node:
    def __init__(self, value, prevNode = None):
        self.value = value
        if prevNode is not None:
            prevNode.nextNode = self
        self.nextNode = None

    def __str__(self):
        return '({},{})'.format(self.value, self.nextNode )

class SinglyLinkedList:
    def __init__(self, head = None):
        self.head = head
    
    def __str__(self):
        currentNode = self.head 
        string_output = ''

        while currentNode is not None:
            string_output += '{}\n'.format(currentNode)
            currentNode = currentNode.nextNode
        return string_output


first_node = Node('first')
singly_list_instance = SinglyLinkedList(first_node)

second_node = Node('Second', first_node)
third_node = Node('third', second_node)


def reverse_SinglyLinkedList(singlyListInstance):
    problemDescription = '''
    *problemDescription* \n
    This problem was asked by Google.

    Given the head of a singly linked list, reverse it in-place.
    '''
    print(problemDescription)
    current_node  = singlyListInstance.head
    
    while current_node is not None:
        next_node = current_node.nextNode
        
        if current_node == singlyListInstance.head:
            current_node.nextNode = None
        else:
            current_node.nextNode = prev_node
        prev_node = current_node
        current_node = next_node

    singlyListInstance.head = prev_node

reverse_SinglyLinkedList(singly_list_instance)

print(singly_list_instance)
print(singly_list_instance)
