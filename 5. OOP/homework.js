// QUESTION 1

// Write class Circle with next functional:

// The constructor takes as input center point {x:number, y:number} and radius.
// Method getLength for obtain length of circle (L = 2 * Pi * R).
// Static method getLengthFromRadius for obtain length of circle with corresponding radius r (L = 2 * Pi * r).
// Method getCopy which return copy of this object.
// Static method createCircle(x, y, r) which obtain as input x, y - coordinates of center and r - circle radius, create nad return new Circle wit this parameters.
// Method checkPointInside(point) which obtain as parametes point = {x:namber, y:number} and return bollean response of whether the point is inside the circle.
// Override method toString to return description of circle object as string as in examples.

class Circle {
    constructor(center, radius) {
        this.center = center;
        this.radius = radius;
    }

    getLength() {
        return 2 * Math.PI * this.radius;
    }

    static getLengthFromRadius(r) {
        return 2 * Math.PI * r;
    }

    getCopy() {
        return new Circle(this.center, this.radius);
    }

    static createCircle(x, y, r) {
        return new Circle({ x, y }, r);
    }

    checkPointInside(point) {
        // const distance = Math.sqrt((point.x - this.center.x) ** 2 + (point.y - this.center.y) ** 2);
        const distance = Math.sqrt(Math.pow(point.x - this.center.x, 2) + Math.pow(point.y - this.center.y, 2));
        return distance <= this.radius;
    }

    toString() {
        return `Circle with center in ${this.center.x},${this.center.y} and radius ${this.radius}`;
    }
}

const circle1 = new Circle({ x: 1, y: 1 }, 2);
console.log(String(circle1));

const circle2 = Circle.createCircle(10, 15, 34);
console.log(String(circle2));

const circle3 = new Circle({ x: 1, y: 1 }, 5);
console.log(circle3.getLength().toFixed(1));
console.log(Circle.getLengthFromRadius(10).toFixed(1));

const circle4 = new Circle({ x: 2, y: 2 }, 20);
const pointInside = { x: 3, y: 3 };
console.log(circle4.checkPointInside(pointInside));


// QUESTION 2

// Write the function propsCount(currentObject) which obtain as input object currentObject and return the number of its properties.

function propsCount(currentObject) {
    return Object.keys(currentObject).length;
}

const mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development"
};

console.log(propsCount(mentor));


// QUESTION 3

// Write class Person with constructor which obtain name and surname as parameters and create object with this public fields, also in Person sefine public method getFullName which returns the string with surname and name are written with a spaces
// Write class Student which is inherited from Person but its constructor obtain also year as parameter. year is year of entry to the university. In class Student owerride method getFullName(middleName) so that this method return string surname, name and middleName are written with a spaces. Write method getCourse() which return the student's current course (from 1 to 6). The value of the course will be determined as the difference between the current year (to be determined independently) and the year of entry to the university.


