const arr = [
  21, 40, 88, 52, 93, 91, 31, 17, 28, 4, 37, 99, 88, 87, 20, 32, 4, 59, 70, 14,
  37, 7, 98, 44, 62, 45, 96, 24, 33, 53, 50, 71, 44, 77, 15, 74, 67, 100, 36, 8,
  23, 20, 96, 65, 93, 96, 91, 67, 30, 94, 92, 31, 33, 80, 92, 38, 96, 51, 66,
  84, 2, 45, 36, 47, 21, 92, 40, 15, 21, 91, 8, 93, 89, 21, 46, 32, 16, 53, 56,
  93, 10, 38, 56, 23, 23, 72, 19, 26, 81, 78, 73, 1, 29, 49, 6, 83, 6, 8, 88,
  24,
];

const linearSearch = (arr, target) => {
  let count,
    attempts = 0;

  while (count <= arr.length) {
    attempts++;

    if (arr[count] === target) {
      console.log(`value: ${target}, attempts ${attempts}`);
      return;
    }

    count++;
  }
};

const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  let attempts = 0;

  const normalizedArr = normalize(arr);

  while (start <= end) {
    let middle = Math.floor((end + start) / 2);
    let el = normalizedArr[middle];
    attempts++;

    if (el === target) {
      console.log(`value: ${target}, attempts ${attempts}`);
      return;
    }

    if (el > target) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }

    return null;
  }
};

//*-------------

function normalize(arr) {
  const unique = [...new Set(arr)];
  return unique.sort((a, b) => a - b);
}

//*-------------

binarySearch(arr, 100);
linearSearch(arr, 100);
