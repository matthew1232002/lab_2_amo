export function heapSort(arr) {
  if (arr.length === 0) return [];

  var n = arr.length, Count = [], B = [];
  for (var i = 0; i < n; i++) Count[ i ] = 0;
  for (var i = 0; i < n-1; i++)
  { for (var j = i+1; j < n; j++)
  { if (arr[ i ] < arr[j]) Count[j]++;
  else Count[ i ]++;
  }
  }
  for (var i = 0; i < n; i++) B[Count[ i ]] = arr[ i ];
  return B;
}