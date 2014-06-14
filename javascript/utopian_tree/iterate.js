#!/usr/bin/env node

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf8');

var input = '';

process.stdin.on('data', function(data) {

  input += data;

});

process.stdin.on('end', function() {

  var tests = input.split('\n'),
      numberOfTests = tests.shift(),
      getHeight;

  getHeight = function(gc) {

    var height = 1;

    for (var i = 0; i < gc; i++) {

      if (i % 2 === 0) {
        height = height * 2;
      } else {
        height += 1;
      }

    }

    return height;

  };

  tests.forEach(function(gc) {

    process.stdout.write(getHeight(gc).toString() + '\n');

  });

});