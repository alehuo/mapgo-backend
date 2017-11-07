class Tuple < T,
K > {

    public arg1 : T;
    public arg2 : K;

    constructor(arg1 : T, arg2 : K) {
        this.arg1 = arg1;
        this.arg2 = arg2;
    }

    public getFirst() : T {return this.arg1;}

    public getSecond() : K {return this.arg2;}
}

export default Tuple;