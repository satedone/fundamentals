const triangleArea = (a, b, c) => {
    if (a + b > c && a + c > b && b + c > a) {
        let p = (a + b + c) / 2;
        let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
        return s.toFixed(3);
    } else {
        return "Incorrect data";
    }
}


// ТАSК 2

const filterMostOftenNumber = numsArr => {
    const frequencyMap = numsArr.reduce((map, num) => {
        map[num] = (map[num] || 0) + 1;
        return map;
    }, {});

    const mostOftenNumber = Object.keys(frequencyMap).reduce((a, b) => frequencyMap[a] > frequencyMap[b] ? a : b);

    const filteredArray = numsArr.filter(num => num !== parseInt(mostOftenNumber));

    return filteredArray;
}

console.log(filterMostOftenNumber([4, 5, 2, 1, 6, 5, 3, 5, 2, 5]));
console.log(filterMostOftenNumber([3, 3, 3, 3]));
console.log(filterMostOftenNumber([2, -1, 2]));
console.log(filterMostOftenNumber([1, 3, 5, 1, 8, 9, 6]));


