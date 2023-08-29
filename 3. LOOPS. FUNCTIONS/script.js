// ****************** TASK 1 ***********************

function createArray(start, end) {
    let arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}

console.log(createArray(2, 9)); 

// ****************** TASK 2 ***********************

function printNumbers(a, b) {
    let result = [];

    for (let i = a; i <= b; i++) {
        for (let j = 0; j < i - a + 1; j++) {
            result.push(i);
        }
    }

    return result.join(',');
}

console.log(printNumbers(2, 5)); 

// ****************** TASK 3 ***********************

function randArray(k) {
    let result = [];
    
    for (let i = 0; i < k; i++) {
        let randomNumber = Math.floor(Math.random() * 500) + 1;
        result.push(randomNumber);
    }
    
    return result;
}

console.log(randArray(5)); 

// ****************** TASK 4 ***********************

function compact(arr) {
    return arr.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
}

console.log(compact([5, 3, 4, 5, 6, 7, 3])); 

// ****************** TASK 5 ***********************

function separateTypes(arr) {
    const result = [];
    const resultStrings = [];
    const resultOthers = [];

    for (const element of arr) {
        if (Array.isArray(element)) {
            resultOthers.push(...element);
        } else if (typeof element === "number") {
            result.push(element);
        } else if (typeof element === "string") {
            resultStrings.push(element);
        }
    }

    return [result, resultStrings.concat(resultOthers)];
}

const arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
const arrNew = separateTypes(arr);
console.log(arrNew);

// TASK 6

function calc(a, b, op) {
    switch (op) {
        case 1:
            return a - b;
        case 2:
            return a * b;
        case 3:
            return a / b;
        default:
            return a + b;
    }
}

console.log(calc(10, 3, 1));
console.log(calc(5, 2, 2));  
console.log(calc(8, 4, 3)); 
console.log(calc(3, 7, 4)); 

// TASK 7

function findUnique(arr) {
    // Створюємо об'єкт для відстеження кількості входжень кожного елемента
    const countMap = {};
    
    // Проходимо по елементам масиву та рахуємо їх кількість
    for (const num of arr) {
        if (countMap[num]) {
            countMap[num]++;
        } else {
            countMap[num] = 1;
        }
    }
    
    // Перевіряємо, чи всі елементи є унікальними
    for (const num in countMap) {
        if (countMap[num] > 1) {
            return false;
        }
    }
    
    return true;
}

console.log(findUnique([1, 2, 3, 5, 3]));  // false
console.log(findUnique([1, 2, 3, 5, 11])); // true
console.log(findUnique([2, 2, 2, 2, 2]));  // false
