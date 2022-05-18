function multiply(n1, n2) {
    return n1 * n2;
}

multiply(2, 3);

//call()
multiply.call(window, 2, 3);

//apply()
multiply.apply(window, [2, 3]);

//object

const mockingbird = {
    title: 'to kill a mocking bird',
    describe: function () {
        console.log(`${this.title} is a classic novel`);
    }
};

mockingbird.describe();

const pride = {
    title: 'pride and prejudice'
};

//call()
mockingbird.describe.call(pride);

//apply()
mockingbird.describe.apply(pride);

const cat = {
    name: 'Bailey'
};

function sayHello(message) {
    console.log(`${message}, ${this.name}`);
}

sayHello.call(cat, 'Nice to meet you');

sayHello.apply(cat, ['hello']);

//bind()
const dog = {
    age: 5,
    growOneYear: function () {
        this.age += 1;
    }
};

function invokeTwice(cb) {
    cb();
    cb();
}

const myGrow = dog.growOneYear.bind(dog);
invokeTwice(myGrow);
dog.age;