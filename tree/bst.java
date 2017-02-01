/* Hidden stub code will pass a root argument to the function below. Complete the function to solve the challenge. Hint: you may want to write one or more helper functions.

The Node class is defined as follows:
    class Node {
        int data;
        Node left;
        Node right;
     }
*/
boolean checkBST(Node root) {
    return helper(root, Integer.MIN_VALUE, Integer.MAX_VALUE);
}

boolean helper(Node current, int min, int max) {
    if (current == null) {
        return true;
    }

    if (current.data > max || current.data < min) {
        return false;
    }

    return(helper(current.left, min, current.data - 1) && helper(current.right, current.data  + 1, max));
}
