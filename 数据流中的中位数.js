class MedianFinder {
  constructor() {
    this.stream = []
  }

  addNum(num) {
    let i = this.stream.length - 1

    for (; i >= 0; i--) {
      if (this.stream[i] > num) {
        this.stream[i + 1] = this.stream[i]
      } else {
        break
      }
    }

    this.stream[i + 1] = num
  }

  findMedian() {
    let mid = this.stream.length >> 1
    
    if (this.stream.length % 2 == 0) {
      return (this.stream[mid - 1] + this.stream[mid]) / 2
    } else {
      return this.stream[mid]
    }
  }
}
