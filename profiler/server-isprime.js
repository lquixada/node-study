const crypto = require('crypto');
const express = require('express');
const app = express();

/**
 * Big Prime Numbers
 * - 8191
 * - 131071
 * - 524287
 * - 6700417
 * - 2147483647 <- good for test
 */

function isPrimeMinus(n) {
  n = parseInt(n, 10);
  for (let i=2; i<n-1; i++) {
    if (n%i===0) {
      console.log(i);
      return false;
    }
  }

  return true;
}

function isPrimeRoot(n) {
  for (let i=2; i<=Math.sqrt(n); i++) {
    if (n%i===0) {
      console.log(i);
      return false;
    }
  }

  return true;
}

app.get('/minus', (req, res) => res.send(isPrimeMinus(req.query.n)+'\n'));

app.get('/root', (req, res) => res.send(isPrimeRoot(req.query.n)+'\n'));

app.listen(8000, () => console.log('Example app listening on port 8000!'))