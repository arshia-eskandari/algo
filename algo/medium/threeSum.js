function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  const triples = [];

  for (let i = 0; i < array.length - 2; i++) {
    let l = i + 1;
    let r = array.length - 1;

    while (l < r) {
      const currSum = array[i] + array[l] + array[r];

      if (currSum < targetSum) {
        l++;
      } else if (currSum > targetSum) {
        r--;
      } else {
        triples.push([array[i], array[l], array[r]]);
        l++;
        r--;
      }
    }
  }

  return triples;
}
