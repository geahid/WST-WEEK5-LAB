// ==========================================
// Task 1 — Wire it up and prove it runs
// ==========================================

const name = "Geahid";

const greeting = `Hello, ${name}!`;

console.log(greeting);

// Error caused during testing: SyntaxError


// ==========================================
// Task 2 — A grade reporter
// ==========================================

let score = 88;

if (score >= 90) {
    console.log("Excellent");
} else if (score >= 75) {
    console.log("Passed");
} else {
    console.log("Needs improvement");
}

// Ternary: true when the score is 75 or higher
console.log(`Passed: ${score >= 75}`);


// Test values: 95, 88, 75, 74, and 0

const testScores = [95, 88, 75, 74, 0];

testScores.forEach(function (score) {
    if (score >= 90) {
        console.log(score, "Excellent");
    } else if (score >= 75) {
        console.log(score, "Passed");
    } else {
        console.log(score, "Needs improvement");
    }

    console.log(`Passed: ${score >= 75}`);
});


// ==========================================
// Task 3 — Reproduce the coercion bug
// ==========================================

const qty = "5";
const price = 20;

console.log(qty + price);

// Because qty is a string, + joins the values as text.
// The result is "520", not 100.

const total = Number(qty) * price;

console.log(total);

// == allows type coercion, so this is true.
console.log(qty == 5);

// === checks both value and type, so this is false.
console.log(qty === 5);

// Use === because it checks both the value and the data type
// and avoids unexpected type coercion.