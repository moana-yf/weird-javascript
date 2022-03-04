class MyArray {
    constructor(length = 0) {
        this.length = length;
        for (let index = 0; index <= length; index++) {
            this[index] = 0;
        }
    }

    get(index) { return this[index]; }

    /**
     * traverse the array to find the target element
     * and then return its position
     * @param {target} target 
     */
    find(target) {
        
    }
}


const arr = new MyArray();