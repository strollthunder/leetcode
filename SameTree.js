/**
 * Created by walkthunder on 15/11/5.
 */

/**
 *
 * Given two binary trees, write a function to check if they are equal or not.
 *
 * Two binary trees are considered equal if they are structurally identical and the nodes have the same value.
 *
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

var isSameTree = function(p, q) {
    //console.info('=====================');
    //console.info('p: ' + JSON.stringify(p) + '|| q: ' + JSON.stringify(q));

    if((p === undefined || p === null) && (q === undefined || q === null)) {
        //console.info('1 - true')
        return true;
    } else if((p === undefined || p === null) || (q === undefined || q === null)) {
        //console.info('2 - false')
        return false;
    }else if(p.val === q.val) {
        //console.info('3 - loop')
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    } else {
        //console.info('4 - false')
        return false;
    }
};