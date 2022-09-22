function* MergeSort(array) {
  if (array.length > 1) {
    const mid = parseInt(array.length / 2),
      n = array.length;
    let left = [],
      right = [];
    for (let i = 0; i < n; i++) {
      if (i < mid) {
        left[i] = array[i];
      } else {
        right[i - mid] = array[i];
      }
    }
    MergeSort(left);
    MergeSort(right);

    let i = 0,
      j = 0,
      k = 0;
    while (i < mid && j < n - mid) {
      if (left[i] < right[j]) {
        array[k] = left[i];
        i++;
      } else {
        array[k] = right[j];
        j++;
      }
      yield({i, j, arr:array.slice()});
      k++;
    }

    while (i < mid) {
      array[k] = left[i];
      i++;
      k++;
      yield({i, j:i, arr:array.slice()});
    }

    while (j < n - mid) {
      array[k] = right[j];
      j++;
      k++;
      yield({i:j, j, arr:array.slice()});
    }
    console.log(array);
  }
}

export default MergeSort;
