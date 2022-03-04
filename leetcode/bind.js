// Implement Function.prototype.bind()

/*
    const foo = function() {
        console.log(this.bar);
    }

    let baz = foo.bind({bar: 'hello'});

    baz(); // Hello
*/


Function.prototype.bind = function(context) {
    const fn = this;

    return function() {
        fn.call(context);
    }
}

// OR

function bind(fn, context) {
    return function() {
        fn.call(context);
    }
}

// OR if you want to pass arguments

function bindd(fn, context) {
    return function() {
        fn.apply(context, [...args]);
    }
}

