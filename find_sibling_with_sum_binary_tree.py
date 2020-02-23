# binry tree data structure

class Node(object):
    """
    class for binary node
    """
    
    def __init__(self, val, left=None, right=None):
        self.value = val
        self.left = left
        self.right = right
    
    def __repr__(self):
        return "Node(%d)" % self.value
    
    def __str__(self):
        return "%s - %s - %s" % (self.left, self.value, self.right) 

    
class BinaryTree(object):
    """
    class for binary tree
    """
    
    def __init__(self, root=None):
        self.root = root
    
    def find_sibling_with_sum(self, value, node = None):
        """
        find sibling
        """
        if node:
            if node.value == value:
                return (node, None)
            elif node.right and node.right.value == value:
                return (None, node.right)
            elif node.left and node.left.value == value:
                return (node.left, None)
            elif node.left and node.right and node.left.value + node.right.value == value:
                return (node.left, node.right)

            res = self.find_sibling_with_sum(value, node.left)
            
            if res:
                return res

            res = self.find_sibling_with_sum(value, node.right)
            return res
            

print("""
Problem Definition:
This problem was asked by Google.

Given the root of a binary search tree, and a target K, return two nodes in the tree whose sum equals K.

For example, given the following tree and K of 20 /n""")
node1 = Node(5)
node2 = Node(6, node1)
node3 = Node(7)
node4 = Node(8)
node5 = Node(10, node2)
node6 = Node(9, node4, node3)
node7 = Node(13, node5, node6)

print(str(node7))
tree = BinaryTree(node7)
print(tree.find_sibling_with_sum(5, node7))