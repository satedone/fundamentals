// ************** Task 1 **************

function hasNonNumericValue(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      return true; 
    }
  }
  return false; 
}

function sumSliceArray(arr, first, second) {
  if (!Array.isArray(arr)) {
    throw new Error('Input should be an array');
  }

  if (hasNonNumericValue(arr)) {
    throw new Error('Array contains non-numeric values');
  }

  if (typeof first !== 'number' || typeof second !== 'number') {
    throw new Error('Indexes should be numbers');
  }

  if (first < 0 || second < 0 || first >= arr.length || second >= arr.length) {
    throw new Error('Indexes are out of range');
  }

  return arr[first] + arr[second];
}

console.log(sumSliceArray([1, 2, 3, 4, 5], 2, 4)); // 8
console.log(sumSliceArray([1, "fff", 3, 4, 5], 2, 4)); // Array contains non-numeric values
console.log(sumSliceArray([1, 2, 3, 4, 5], 2, 7)); // Indexes are out of range


// ************** Task 2 **************


function checkAge() {
    try {
      const name = prompt('Please enter your name:');
      if (!name) {
        throw new Error('The field is empty! Please enter your name');
      }
  
      const age = parseInt(prompt('Please enter your age:'));
      if (isNaN(age)) {
        throw new EvalError('Age should be a number');
      }
  
      if (age < 18 || age > 70) {
        throw new RangeError('You must be between 18 and 70 years old to watch the movie');
      }
  
      const status = prompt('Please enter your status (admin, moderator, user):');
      if (status !== 'admin' && status !== 'moderator' && status !== 'user') {
        throw new EvalError('Invalid status');
      }
  
      alert('You have access to watch the movie!');
    } catch (error) {
      alert(`Error: ${error.name}\n${error.message}`);
    }
  }
  
  checkAge();
  
// ************** Task 3 **************


