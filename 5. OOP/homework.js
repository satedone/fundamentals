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


class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        return this.surname + ' ' + this.name;
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    getFullName(middleName) {
        return this.surname + ' ' + this.name + ' ' + middleName;
    }

    getCourse() {
        const currentYear = new Date().getFullYear();
        const course = currentYear - this.year + 1;
        return Math.max(1, Math.min(6, course)); // обмежуємо курс від 1 до 6
    }
}

const stud1 = new Student("Petro", "Petrenko", 2019);
console.log(stud1.getFullName("Petrovych"));
console.log("Current course: " + stud1.getCourse());

const person = new Person('John', 'Doe');
const result = person.getFullName();
console.log(result);


// QUESTION 4

// Write class Marker that describes a simple marker. The instances of this class should have the following components:

// Private field that stores the color of the marker and only getter color for this field, we set color by parameter in constructor.
// Private field that stores the amount of ink in the marker (in percentage), marker creating with 100% of ink and only getter ink for this field.
// Public method print(text) that call console.log with letters from text one by one, and write in console as long as there is ink in the marker; one non-whitespace character is 10% of the ink in the marker.
// Implement a class that describes a RefillableMarker inherited from a Marker and adding a method refill which add ink to 100%.

class Marker {
    #color;
    #ink;
    constructor(color) {
        this.#color = color; // Задаємо колір маркера при створенні об'єкта
        this.#ink = 100; // Встановлюємо початковий запас чорнила в 100%
        
        // Забороняємо виводити властивості _color і _ink при виклику Object.keys()
        Object.defineProperty(this, '_color', { enumerable: false });
        Object.defineProperty(this, '_ink', { enumerable: false });
    }

    get color() {
        return this.#color;
    }

    get ink() {
        return this.#ink; 
    }
    set ink(value) {
        this.#ink = value;
    }
    
    print(text) {
        for (let i = 0; i < text.length; i++) {
            const character = text[i];
            if (this.#ink > 0) {
                if (character !== ' ') {
                    console.log(character); // Друкуємо символ
                    this.#ink -= 10; // Зменшуємо залишок чорнила
                } else {
                    console.log(character); // Друкуємо пробіл
                }
            } else {
                break;
            }
        }
    }
}

class RefillableMarker extends Marker {
    constructor(color) {
        super(color); 
    }

    refill() {
       this.ink = 100; 
    }
}



// Створюємо маркер та виводимо текст
// const marker = new Marker("red");
// marker.print("Hello World!");

// Створюємо маркер, підзаряджаємо його і виводимо текст
const marker = new RefillableMarker("red");
marker.print("Lorem ipsum dolor sit amet");
marker.print("Lorem ipsum dolor sit amet");
marker.refill();
marker.print("Lorem ipsum dolor sit amet");


// QUESTION 5


class Worker {
    #fullName;
    #dayRate;
    #workingDays;
    #experience;

    constructor(fullName, dayRate, workingDays, experience) {
        this.#fullName = fullName;
        this.#dayRate = dayRate;
        this.#workingDays = workingDays;
        this.#experience = experience;
    }

    get fullName() {
        return this.#fullName;
    }

    get dayRate() {
        return this.#dayRate;
    }

    set dayRate(value) {
        this.#dayRate = value;
    }

    get experience() {
        return this.#experience;
    }

    set experience(value) {
        this.#experience = value;
    }

    get workingDays() {
        return this.#workingDays;
    }

    addWorkingDays(n) {
        this.#workingDays += n;
    }

    getSalary() {
        return this.#dayRate * this.#workingDays;
    }

    getSalaryWithExperience() {
        return this.#dayRate * this.#workingDays * this.#experience;
    }

    static sortBySalary(workers) {
        return workers.slice().sort((a, b) => a.getSalary() - b.getSalary());
    }
}