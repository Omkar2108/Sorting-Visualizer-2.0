function* InsertionSort(array) {
  const n = array.length;
  for (let i = 1; i < n; i++) {
    let j = i - 1,
      key = array[i];
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      yield { i: j, j: j + 1, arr: array.slice() };
      j--;
    }
    array[j + 1] = key;
    yield { i, j: j + 1, arr: array.slice() };
  }
}

export default InsertionSort;
