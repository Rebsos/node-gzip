# node-gzip
> Gzip and ungzip in Node.js

Tiny and easy to use wrapper around [zlib.gzip](https://nodejs.org/api/zlib.html#zlib_zlib_gzip_buffer_options_callback) and [zlib.gunzip](https://nodejs.org/api/zlib.html#zlib_zlib_gunzip_buffer_options_callback) to support promises.

```js
let compressed = await gzip('Hello World');
```

## Install
```sh
npm install node-gzip --save
```



## Examples

#### With Promises

```js
const {gzip, ungzip} = require('node-gzip');

gzip('Hello World')
  .then((compressed) => {
    return ungzip(compressed);
  })
  .then((uncompressed) => {
    console.log(uncompressed.toString());     //Hello World
  });
```

#### With async / await

```js
const {gzip, ungzip} = require('node-gzip');

let compressed = await gzip('Hello World');

let uncompressed = await ungzip(compressed);

console.log(uncompressed.toString());        //Hello World
```




## Options

Pass options just like with [Zlib](https://nodejs.org/api/zlib.html). See all [options](https://nodejs.org/api/zlib.html#zlib_class_options).

```js
await gzip('Hello World', {...});
```

## Description

#### gzip(input[,options])

* input: `Buffer | TypedArray | DataView | ArrayBuffer | string`
* returns: `Buffer`

#### ungzip(input[,options])

* input: `Buffer | TypedArray | DataView | ArrayBuffer | string`
* returns: `Buffer`

Use `toString()` after `ungzip` to convert the Buffer into a string.

Supports Node.js version 0.12 and higher.

---

### License

node-gzip is [MIT licensed](./LICENSE).
