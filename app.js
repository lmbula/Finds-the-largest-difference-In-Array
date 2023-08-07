
function findDifferenceBetweenNumbers(numbers) {
  if (numbers.length === 0) {
    throw new Error("The array is empty");
  } else if (numbers.length < 2) {
    return 0;
  }
  const myDuplicates = [...new Set(numbers.map((num) => num))];//the set returns only the unique values in an array format the [] returns it to an array

  const maxNumber = Math.max(...myDuplicates);
  const minNumber = Math.min(...myDuplicates);

  return maxNumber - minNumber;
}
const listNumbers = [1, 90, 90, 91, 21, 0];
const results = findDifferenceBetweenNumbers(listNumbers);
console.log(results);
