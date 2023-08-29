// ************************************
// ************** Task 1 **************
// ************************************

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

// ************************************
// ************** Task 2 **************
// ************************************

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

// ************************************
// ************** Task 3 **************
// ************************************

function calcRectangleArea(width, height) {
  if (typeof width !== 'number' || typeof height !== 'number') {
    throw new Error('Both width and height should be numbers');
  }

  return width * height;
}

try {
  const widthInput = prompt('Enter the width of the rectangle:');
  const heightInput = prompt('Enter the height of the rectangle:');

  const width = parseFloat(widthInput);
  const height = parseFloat(heightInput);

  const area = calcRectangleArea(width, height);
  alert(`The area of the rectangle is: ${area}`);
} catch (error) {
  alert(`Error: ${error.message}`);
}

// ************************************ 
// ************** Task 4 **************
// ************************************

class MonthException extends Error {
  constructor(message) {
    super(message);
    this.name = 'MonthException';
  }
}

function showMonthName(month) {
  const monthNames = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  if (month < 1 || month > 12) {
    throw new MonthException('Incorrect month number');
  }

  return monthNames[month - 1];
}

try {
  console.log(showMonthName(5));  
  console.log(showMonthName(14));
} catch (error) {
  console.log(`${error.name} ${error.message}`);
}

// ************************************
// ************** Task 5 **************
// ************************************

function showUser(id) {
    if (id < 0) {
      throw new Error('ID must not be negative');
    }
  
    return { id };
  }
  
  function showUsers(ids) {
    const validUsers = [];
  
    for (const id of ids) {
      try {
        const user = showUser(id);
        validUsers.push(user);
      } catch (error) {
        console.log(error.message);
      }
    }
  
    return validUsers;
  }
  
  const users = showUsers([7, -12, 44, 22]);
  console.log(users);
  



