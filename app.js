// ==========================================
// Task 1 — A reusable function
// ==========================================

function transmute(score) {
    if (score >= 90) {
        return "Excellent";
    } else if (score >= 75) {
        return "Passed";
    } else {
        return "Needs improvement";
    }
}

console.log(transmute(95));
console.log(transmute(88));
console.log(transmute(75));
console.log(transmute(74));
console.log(transmute(0));


// Arrow function version

const transmuteArrow = (score) => {
    if (score >= 90) {
        return "Excellent";
    } else if (score >= 75) {
        return "Passed";
    } else {
        return "Needs improvement";
    }
};

console.log(transmuteArrow(95));
console.log(transmuteArrow(88));
console.log(transmuteArrow(75));
console.log(transmuteArrow(74));
console.log(transmuteArrow(0));


// Confirm both versions give the same results

console.log(
    transmute(95) === transmuteArrow(95)
);

console.log(
    transmute(88) === transmuteArrow(88)
);

console.log(
    transmute(75) === transmuteArrow(75)
);

console.log(
    transmute(74) === transmuteArrow(74)
);

console.log(
    transmute(0) === transmuteArrow(0)
);


// ==========================================
// Task 2 — Work a class list
// ==========================================

const classList = [
    {
        name: "Ana",
        score: 88,
        section: "3-A"
    },
    {
        name: "Ben",
        score: 92,
        section: "3-B"
    },
    {
        name: "Carla",
        score: 74,
        section: "3-A"
    },
    {
        name: "Daniel",
        score: 81,
        section: "3-B"
    },
    {
        name: "Ella",
        score: 70,
        section: "3-A"
    }
];


// All names — map

const allNames = classList.map(student => student.name);

console.log("All names:", allNames);


// Only students who passed — filter

const passedStudents = classList.filter(
    student => student.score >= 75
);

console.log("Passed students:", passedStudents);


// Section 3-A — filter then map

const section3A = classList
    .filter(student => student.section === "3-A")
    .map(student => `${student.name} — ${student.score}%`);

console.log("Section 3-A:", section3A);


// Class average — reduce and toFixed(2)

const totalScore = classList.reduce(
    (total, student) => total + student.score,
    0
);

const classAverage = (
    totalScore / classList.length
).toFixed(2);

console.log("Class average:", classAverage);


// Prove original array is unchanged

console.log("Original class list:", classList);


// ==========================================
// Task 3 — Prove the reference trap
// ==========================================

// This does NOT create a new array.
// Both variables point to the same array.

const copy = classList;

copy[0].score = 100;

console.log("Original after changing copy:", classList);

// The original changed because copy and classList
// refer to the same array and the same student objects.


// Restore the original score for the rest of the demonstration.

classList[0].score = 88;


// Proper independent copy

const protectedCopy = classList.map(student => ({
    ...student
}));

protectedCopy[0].score = 100;

console.log("Protected copy:", protectedCopy);

console.log(
    "Original after changing protected copy:",
    classList
);

// const prevents reassignment of the variable name,
// but it does not make the array or its objects immutable.