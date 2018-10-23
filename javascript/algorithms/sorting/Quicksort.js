function quicksort(arr, leftIndex, rightIndex) {
  let pivotIndex;
  let partitionIndex;

  if (arr.length <= 1) {
    return arr;
  }

  if (leftIndex < rightIndex) {
    pivotIndex = rightIndex;
    partitionIndex = partition(arr, pivotIndex, leftIndex, rightIndex);

    quicksort(arr, leftIndex, partitionIndex - 1);
    quicksort(arr, partitionIndex + 1, rightIndex);
  }

  return arr;
}

function partition(arr, pivotIndex, leftIndex, rightIndex) {
  let partitionIndex = leftIndex;
  let pivotValue = arr[pivotIndex];

  for (let i = leftIndex; i < rightIndex; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex += 1;
    }
  }

  swap(arr, partitionIndex, rightIndex);

  return partitionIndex;
}

function swap(arr, indexA, indexB) {
  let temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
}
