import Comparator from './../interface/Comparator';
import Node from './../struct/Node';

/**
 * Node comparator that orders the nodes in an ascending order by its weight.
 * @author Aleksi Huotala
 */
class NodeComparator implements Comparator < Node > {
    compare(t1 : Node, t2 : Node) : number {
        return t1.weight - t2.weight;
    }
}

export default NodeComparator;