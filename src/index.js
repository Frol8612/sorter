class Sorter {
  constructor() {
    // your implementa
    this.mass = new Array();
    this.compareFunction = function (x, y) {
      return x - y;
    };
  }

  add(element) {
    // your implementation
    this.mass.push(element);
  }

  at(index) {
    // your implementatio
    return this.mass[index];
  }

  get length() {
    // your implementation
    return this.mass.length;
  }

  toArray() {
    // your implementation
    return this.mass;
  }

  sort(indices) {
    // your implementation
    let sor = this.mass.filter((elem, pos) => indices.includes(pos)).sort(this.compareFunction);

    this.mass.forEach((elem, pos) => {
      if (indices.includes(pos)) {
        this.mass[pos] = sor.shift();
      }
    });
  }

  setComparator(compareFunction) {
    // your implementation
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;