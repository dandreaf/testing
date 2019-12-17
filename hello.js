console.log("Hello, world");

for (var x = 1, i = 0; i <= 32; i += 1) {
  console.log(x);
  x += x;
}

/*
 * An application that writes the first 16 rows of Pascal's Triangle.
 */

var LIMIT = 16;

// The triangle will be an array of rows.  Each row will be an array.
var triangle = [];

// Fill in the triangle using the well-known formula.
for (var row = 0; row < LIMIT; row += 1) {
  triangle.push([]);
  for (var column = 0; column <= row; column += 1) {
    if (column === 0 || column === row) {
      triangle[row][column] = 1;
    } else {
      triangle[row][column] =
        triangle[row - 1][column - 1] + triangle[row - 1][column];
    }
  }
}

// Display the data, row by row.
for (var row = 0; row < triangle.length; row += 1) {
  console.log(triangle[row].join(" "));
}

/*
 * An application that displays a random 5-card poker hand, by "dealing out"
 * five random cards from a deck.  This is a very sloppy script that we will
 * refactor later to use modules.
 */

// Create a deck of cards sorted by suit then rank.  The first card (at index
// 0) is the ace of spades (A♠), and the last (at index #51) is the king of
// clubs (K♣).
var deck = [];
"♠♡♢♣".split("").forEach(function(suit) {
  "A 2 3 4 5 6 7 8 9 10 J Q K".split(" ").forEach(function(rank) {
    deck.push(rank + suit);
  });
});

// Create a hand by successively removing a random card from the deck
// and adding it to the hand.
var hand = [];
for (var i = 0; i < 5; i += 1) {
  hand.push(deck.splice(Math.floor(Math.random() * deck.length), 1));
}

// Display the hand.
console.log(hand.join(" "));

var fs = require("fs");

if (process.argv.length !== 3) {
  console.error("Exactly one argument required");
  process.exit(1);
}

var input = process.argv[2];
var output = input + ".w";

// Read the entire file asynchronously, with a callback to replace the r's and l's
// with w's then write the result to the new file.
fs.readFile(input, "utf-8", function(err, text) {
  if (err) throw err;
  var fuddified = text.replace(/[rl]/g, "w").replace(/[RL]/g, "W");
  fs.writeFile(output, fuddified, function(err) {
    if (err) throw err;
  });
});
