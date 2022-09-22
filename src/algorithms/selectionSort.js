function* SelectionSort(array) {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (array[min] > array[j]) {
        min = j;
      }
      yield { i: min, j, arr: array.slice() };
    }
    let temp = array[i];
    array[i] = array[min];
    array[min] = temp;
    yield { i, j: min, arr: array.slice() };
    console.log(array);
  }
}

export default SelectionSort;
