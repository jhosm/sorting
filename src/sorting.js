function insertionSort(array, trace) {
  for (var i = 1; i < array.length; i++) {
    var cur = array[i];
    var j = i;
    while(j >= 0 && array[j - 1] > array[j]) {
      var temp = array[j - 1];
      array[j - 1] = array[j];
      array[j] = temp;
      if(trace) trace(array);
      j--;
    }
  }
  return array;
};
