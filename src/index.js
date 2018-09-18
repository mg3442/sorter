class Sorter {
  constructor() {
    this.array = [];
    this.DefaultComparator = function(x,y){return x-y};
    this.compareFunction = this.DefaultComparator;
  }

  add(element) {
    this.array.push(element); 
  }

  at(index) {
    return this.array [index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    var temp =[];
    indices.sort(this.defaultCompareFunction);

    for (var i = 0; i < indices.length; i++) {
            temp.push(this.array[ indices[i] ]);
    }
    
    var tempLength = temp.length;
    temp.sort(this.compareFunction);
    
    for (var i = 0; i < tempLength; i++) {
        this.array[ indices[i] ] = temp.shift();
    };
  }

  setComparator(compareFunction) { 
      this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;