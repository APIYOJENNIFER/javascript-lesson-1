const duck = {
    hasQuail: true,
    feetType: 'orange'
}

const beaver = {
    hasTail: true
}

const otter = {
    hasFur: true,
    feetType: 'webed'
}

const platypus = Object.assign(duck, beaver, otter);

// console.log(platypus);


//module pattern

let myModule = (function () {
    function privateMethod(message) {
        console.log(message);
    }
    function publicMethod(message) {
        privateMethod(message);
    }
    return {
        publicMethod: publicMethod
    };
})();

myModule;