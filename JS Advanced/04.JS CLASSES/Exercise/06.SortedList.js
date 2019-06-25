class List {
    constructor() {
        this.innerList = [];
        this.size = 0;
    };

    add(number) {
        this.innerList.push(Number(number));
        this.innerList = this.innerList.sort((a,b) => {
            return a-b;
        });
        this.size++;
    };

    remove(index) {
        if (Number(index) > -1 && Number(index) < this.size){
            this.innerList.splice(index,1);
            this.size--;
        }
    };

    get(index) {
        if (Number(index) > -1 && Number(index) < this.size){
            return this.innerList[Number(index)];
        }
    };
}
