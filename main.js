const triangleArea = (a, b, c) => {
    if (a + b > c && a + c > b && b + c > a) {
        let p = (a + b + c) / 2;
        let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
        return s.toFixed(3);
    } else {
        return "Incorrect data";
    }
}


