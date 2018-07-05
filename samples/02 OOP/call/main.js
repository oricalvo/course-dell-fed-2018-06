"use strict";

function g() {
    console.log(this);
}

// g(); --> undefined

// new g(); --> the newly created instance

// g.call(123); --> 123

var f = g.bind(456);
f(); // --> 456

