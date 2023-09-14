module.exports = {
  calculateSqure: (num) => {
    return num * num;
  },
  calculateRect: (w, l) => {
    return w * l;
  },
  calculateCircle: (r) => {
    let pi = 3.14;
    return r * r * pi;
  },
  bufferClass: () => {
    console.log(`Buffer Length: ${Buffer.alloc(12)}`);
  },
  BufferToString() {
    return `Buffer to String: ${this.bufferClass().toString()}`;
  },
};
