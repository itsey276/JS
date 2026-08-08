// calculate_b.js
// This script calculates b = y - a*x where y and x are integers and a can be a fractional value.
// It outputs the result b as a simplified fraction.

// Usage (via command line):
//   node calculate_b.js <y> <x> <a>
// where <a> can be an integer (e.g., 5) or a fraction (e.g., 3/4).
// Example:
//   node calculate_b.js 10 2 3/4
//   => b = 10 - (3/4)*2 = 10 - 3/2 = 17/2

const process = require('process');

function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}

function parseFraction(str) {
  // Parses a string that may be an integer or a fraction (e.g., "5", "-2", "3/4", "-7/2", "-3/4", "3/-4").
  // Remove whitespace to support inputs like " -3 / 4 "
  const cleaned = str.replace(/\s+/g, "");
  const parts = cleaned.split('/')
    .filter(p => p.length > 0);
  if (parts.length === 1) {
    // Integer
    const n = Number(parts[0]);
    if (!Number.isFinite(n)) throw new Error(`Invalid number: ${str}`);
    return { num: n, den: 1 };
  } else if (parts.length === 2) {
    let n = Number(parts[0]);
    let d = Number(parts[1]);
    if (!Number.isFinite(n) || !Number.isFinite(d) || d === 0) {
      throw new Error(`Invalid fraction: ${str}`);
    }
    // Ensure denominator is positive; transfer sign to numerator if needed
    if (d < 0) {
      n = -n;
      d = -d;
    }
    return { num: n, den: d };
  } else {
    throw new Error(`Unable to parse fraction: ${str}`);
  }
}

function simplify(num, den) {
  if (den === 0) throw new Error('Denominator cannot be zero');
  const sign = (den < 0) ? -1 : 1;
  den = Math.abs(den);
  num *= sign;
  const g = gcd(num, den);
  return { num: num / g, den: den / g };
}

function formatFraction({ num, den }) {
  if (den === 1) return `${num}`;
  return `${num}/${den}`;
}

function calculateB(x, y, aFrac) {
  // aFrac is {num, den}
  // b = y - a*x = (y*den - num*x) / den
  const numerator = y * aFrac.den - aFrac.num * x;
  const denominator = aFrac.den;
  return simplify(numerator, denominator);
}

function main() {
  const args = process.argv.slice(2);
  if (args.length !== 3) {
    console.error('Usage: node calculate_b.js <x> <y> <a>');
    console.error('  x and y are integers, a can be integer or fraction (e.g., 3/4)');
    process.exit(1);
  }
  const x = Number(args[0]);
  const y = Number(args[1]);
  if (!Number.isInteger(x) || !Number.isInteger(y)) {
    console.error('y and x must be integers');
    process.exit(1);
  }
  const aFrac = parseFraction(args[2]);
  const b = calculateB(x, y, aFrac);
  console.log(`b = ${formatFraction(b)}`);
}

if (require.main === module) {
  main();
}

// Export functions for potential reuse
module.exports = { parseFraction, calculateB, simplify, formatFraction };
