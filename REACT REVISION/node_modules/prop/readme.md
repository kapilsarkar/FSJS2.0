# prop

Functional method to get a property from an object.

## usage

``` javascript
var obj = {foo: 'bar'}
var result = prop('foo')(obj)

// Also with nested properties
var nested = { foo: { bar: "baz" }}
var result = prop("foo.bar")(nested)
```
## install

``` sh
npm install prop
```

## contribute

pull requests welcome

## license

MIT

## Thanks to

## Thanks to

- [functional-javascript](https://github.com/osteele/functional-javascript)
- [Christian Johansen](https://twitter.com/#!/cjno)

