#!/usr/bin/env node

process.stdin.resume();
process.stdin.setEncoding('utf8');

var input = '';

process.stdin.on('data', function(data) {

  input += data;

});

process.stdin.on('end', function() {

  var numbers = input.split('\n'),
      total = 0;

  numbers.forEach(function(n) {

    total += parseInt(n, 10);

  });

  process.stdout.write(total.toString());

});