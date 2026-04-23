//console.log("%cHello, World", "color: blue; font-size: 40px");
//console.log(8/1);
console.log(3>2);   
var mon = 1;
var tue = 2;
var wed = 1;
var thu = 2;
var fri = 3;
console.log(mon + tue + wed + thu + fri);
var overtime = 1;
overtime += 2;
overtime += 1;
overtime += 2;
overtime += 3;
console.log(overtime);
var score = 8;
console.log( "Mid-level skills:", 10>8 && 0<8)
var timeremaining = 0;
var energy = 10;
console.log("Game over:", timeremaining == 0 || energy ==0)
var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;
console.log("is", num1, "an even nunmber?", result1)
console.log("is", num2, "an even nunmber?", result2)
console.log(5+10)
var now = "now in "
var three =  3
var d = "D!"
console.log(now + three+ d)     
var counter = 0;
counter += 5;
counter += 3;
console.log(counter)
var age = 10;
if(age >= 65) {
    console.log( "You get your income from your pension")
} else if (age < 65 >= 18) {
    console.log("Each month you get a salary")
} else if (age < 18) {
    console.log("You get an allowance")
} else {
    //this block will run if no condition matches
    console.log("The value of the age variable is not numerical");
}
for 
function addTwoNums(a,b) {
    console.log(a + b) //display the result
}function addTwoNums(a,b) {
    console.log(a + b)
}
addTwoNums(5, "5") // "55"
function addTwoNums(a,b) {
    try {
        console.log(a + b)
    } catch(err) {
        console.log(err)
    }
}function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log(err)
    }
}function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log("Error!", err)
    }
}function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log("Error!", err)
    }
}
addTwoNums(5, "5")
console.log("It still works")
function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2; //if the word is a string and the length is greater than or equal to 2
    var condition2 = typeof(match) == 'string' && match.length == 1; //if the match is a string and the length is equal to 1
    if(condition1 && condition2) { //if both condition matches
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //check if the character at this i position in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        //if the requirements don't match
        console.log("Please pass correct arguments to the function")
    }
}
letterFinder([],[])
letterFinder("cat","c")

class Bird {
    useWings() {
        console.log("Flying!");
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings();
        console.log("Barely flapping!");
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!");
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"




class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}
// cllass 
class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);

var train4 = new Train('red', false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.

// lab exM to go again when free did not understand anything
// Base Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    doSomethingFun() {
        this.energy -= 10;
    }
}

// Task 1 & 2: Define the Worker class
class Worker extends Person {
    constructor(name, age, energy, xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }

    goToWork() {
        this.xp += 10;
    }
}

// Task 3: Code an Intern Object
function intern() {
    // Step 1: Instantiate the Worker object
    let internObj = new Worker("Bob", 21, 110, 0, 10);
    
    // Step 2: Call goToWork()
    internObj.goToWork();
    
    // Step 3: Return the object
    return internObj;
}

// Task 4: Code a Manager Object
function manager() {
    // Step 1: Instantiate the Worker object
    let managerObj = new Worker("Alice", 30, 120, 100, 30);
    
    // Step 2: Call doSomethingFun()
    managerObj.doSomethingFun();
    
    // Step 3: Return the object
    return managerObj;
}{
    const animal = {
        canJump: true
    };

    const bird = Object.create(animal);
    bird.canFly = true;
    bird.hasFeathers = true;

    function animalCan() {
        for (const key in bird) {
            // Note: Use bird[key] to get the value in a for...in loop
            console.log(`${key}: ${bird[key]}`);
        }
    }

    animalCan();
}// look in to thsi later and unsderatnd


const h2 = document.createElement('h2')
undefined
h2.innerText = "this is an h2 heading"
'this is an h2 heading'
h2.setAttribute('id','sub heading')
undefined
h2.setAttribute('class','secondary')
undefined
h2
<h2 id=​"sub heading" class=​"secondary">​this is an h2 heading​</h2>​
document.body.appendChild(h2)
<h2 id=​"sub heading" class=​"secondary">​this is an h2 heading​</h2>​

//dom for live pages nanipulate websites