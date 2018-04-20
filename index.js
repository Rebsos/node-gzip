'use strict';

const zlib = require('zlib');

module.exports = {
  gzip: (input, options) => {
    const promise = new Promise(function(resolve, reject) {
      zlib.gzip(input, options, function (error, result) {
        if(!error) resolve(result);
        else reject(Error(error));
      });
    });
    return promise;
  },
  ungzip: (input, options) => {
    const promise = new Promise(function(resolve, reject) {
      zlib.gunzip(input, options, function (error, result) {
        if(!error) resolve(result);
        else reject(Error(error));
      });
    });
    return promise;
  },
}
