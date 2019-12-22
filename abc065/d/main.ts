{
  const main = (input: string): void | string | number => {
    const r = _reader(input)
    const N = r.n()
    const xy1 = r.nnls()
    const xy2 = xy1.concat()

    xy1.sort((a, b) => a[0] - b[0])
    xy2.sort((a, b) => a[1] - b[1])

    return
  }

  const _heap = <T>(
    eq: (a: T, b: T) => boolean = (a, b) => a === b,
    inCorrectOrder: (a: T, b: T) => boolean = (a: T, b: T) => a <= b
  ) => {
    // Array representation of the heap.
    const heapContainer: T[] = []

    const getLeftChildIndex = (parentIndex: number) => 2 * parentIndex + 1
    const getRightChildIndex = (parentIndex: number) => 2 * parentIndex + 2

    const getParentIndex = (childIndex: number) =>
      Math.floor((childIndex - 1) / 2)
    const hasParent = (childIndex: number) => getParentIndex(childIndex) >= 0

    const hasLeftChild = (parentIndex: number) =>
      getLeftChildIndex(parentIndex) < heapContainer.length
    const hasRightChild = (parentIndex: number) =>
      getRightChildIndex(parentIndex) < heapContainer.length
    const leftChild = (parentIndex: number) =>
      heapContainer[getLeftChildIndex(parentIndex)]
    const rightChild = (parentIndex: number) =>
      heapContainer[getRightChildIndex(parentIndex)]

    const parent = (childIndex: number) =>
      heapContainer[getParentIndex(childIndex)]

    const swap = (indexOne: number, indexTwo: number) => {
      ;[heapContainer[indexOne], heapContainer[indexTwo]] = [
        heapContainer[indexTwo],
        heapContainer[indexOne],
      ]
    }
    const peek = () => heapContainer[0] || null
    const poll = () => {
      const p = heapContainer.pop()
      const head = heapContainer[0]

      if (!p) return null
      if (!head) return p
      heapContainer[0] = p
      heapifyDown()

      return head
    }

    const add = item => {
      heapContainer.push(item)
      heapifyUp()
    }
    // return this;

    const remove = (item: T) => {
      // Find number of items to remove.
      const numberOfItemsToRemove = find(item).length

      for (
        let iteration = 0;
        iteration < numberOfItemsToRemove;
        iteration += 1
      ) {
        // We need to find item index to remove each time after removal since
        // indices are being changed after each heapify process.
        const indexToRemove = <number>find(item).pop()

        // If we need to remove last child in the heap then just remove it.
        // There is no need to heapify the heap afterwards.
        if (indexToRemove === heapContainer.length - 1) {
          heapContainer.pop()
        } else {
          // Move last element in heap to the vacant (removed) position.
          const p = heapContainer.pop()

          if (p) heapContainer[indexToRemove] = p

          // Get parent.
          const parentItem = parent(indexToRemove)

          // If there is no parent or parent is in correct order with the node
          // we're going to delete then heapify down. Otherwise heapify up.
          if (
            hasLeftChild(indexToRemove) &&
            (!parentItem ||
              inCorrectOrder(parentItem, heapContainer[indexToRemove]))
          ) {
            heapifyDown(indexToRemove)
          } else {
            heapifyUp(indexToRemove)
          }
        }
      }

      // return this
    }

    const find = (item: T) => {
      const foundItemIndices: number[] = []

      for (
        let itemIndex = 0;
        itemIndex < heapContainer.length;
        itemIndex += 1
      ) {
        if (eq(item, heapContainer[itemIndex])) {
          foundItemIndices.push(itemIndex)
        }
      }

      return foundItemIndices
    }

    const isEmpty = () => !heapContainer.length
    const toString = () => heapContainer.toString()

    const heapifyUp = (currentIndex = heapContainer.length - 1) => {
      // Take the last element (last in array or the bottom left in a tree)
      // in the heap container and lift it up until it is in the correct
      // order with respect to its parent element.

      while (
        hasParent(currentIndex) &&
        !inCorrectOrder(parent(currentIndex), heapContainer[currentIndex])
      ) {
        swap(currentIndex, getParentIndex(currentIndex))
        currentIndex = getParentIndex(currentIndex)
      }
    }

    const heapifyDown = (customStartIndex = 0) => {
      // Compare the parent element to its children and swap parent with the appropriate
      // child (smallest child for MinHeap, largest child for MaxHeap).
      // Do the same for next children after swap.
      let currentIndex = customStartIndex
      let nextIndex: number | null = null

      while (hasLeftChild(currentIndex)) {
        if (
          hasRightChild(currentIndex) &&
          inCorrectOrder(rightChild(currentIndex), leftChild(currentIndex))
        ) {
          nextIndex = getRightChildIndex(currentIndex)
        } else {
          nextIndex = getLeftChildIndex(currentIndex)
        }

        if (
          inCorrectOrder(heapContainer[currentIndex], heapContainer[nextIndex])
        ) {
          break
        }

        swap(currentIndex, nextIndex)
        currentIndex = nextIndex
      }
    }

    return { find, parent, swap, peek, poll, add, remove, isEmpty, toString }
  }

  const _priorityQueue = <T>(
    eq: (a: T, b: T) => boolean = (a, b) => a === b,
    inCorrectOrder: (a: T, b: T) => boolean = (a: T, b: T) => a <= b
  ) => {
    const priorities = new Map()
    const heap = _heap(eq, inCorrectOrder)

    const add = (item: T, priority = 0) => {
      priorities.set(item, priority)
      heap.add(item)
    }

    const remove = (item: T) => {
      heap.remove(item)
      priorities.delete(item)
    }

    const changePriority = (item: T, priority: number) => {
      remove(item)
      add(item, priority)
      // return this;
    }

    const findByValue = (item: T) => {
      return heap.find(item)
    }

    const hasValue = (item: T) => {
      return findByValue(item).length > 0
    }

    const comparePriority = (a: T, b: T): number => {
      if (priorities.get(a) === priorities.get(b)) {
        return 0
      }
      return priorities.get(a) < priorities.get(b) ? -1 : 1
    }

    const compareValue = (a: T, b: T) => {
      if (a === b) {
        return 0
      }
      return a < b ? -1 : 1
    }

    return Object.assign({}, heap, {
      add,
      remove,
      changePriority,
      findByValue,
      hasValue,
      comparePriority,
      compareValue,
    })
  }

  const _reader = (str: string, i = 0) => {
    const lines = str.trim().split('\n')
    const s = () => lines[i++] || ''
    const n = () => Number(s())

    const mn = (v: string[]) => v.map(Number)
    const sp = (v: string) => v.split(' ')
    const ss = () => sp(s())
    const nn = () => mn(ss())
    const nls = () => mn(lines.slice(i))
    const nnls = () => lines.slice(i).map(v => mn(sp(v)))

    return { lines, s, n, ss, nn, nls, nnls }
  }

  const _getInput = () => require('fs').readFileSync('/dev/stdin', 'utf8')
  const _res = main(_getInput())

  if (typeof _res === 'number' || typeof _res === 'string') console.log(_res)
}
