var prop = require("..")

var list = [{
        foo: "1"
    }, {
        foo: "2"
    }, {
        bar: {
            baz: "3"
        }
    }, {
        bar: {}
    }, {
        bar: {
            baz: "4"
        }
    }]

console.log("foos", list.map(prop("foo")))
console.log("bazs", list.map(prop("bar.baz")))
