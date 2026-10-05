// ==============================
// Task 1 — Interactive Counter
// ==============================

let count = 0;

const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

increase.addEventListener("click", function () {
    count++;
    number.textContent = count;
});

decrease.addEventListener("click", function () {
    if (count > 0) {
        count--;
        number.textContent = count;
    }
});


// ==============================
// Task 2 — Mini To-Do List
// ==============================

const todoInput = document.getElementById("todoInput");
const addTodo = document.getElementById("addTodo");
const todoList = document.getElementById("todoList");

addTodo.addEventListener("click", function () {
    const text = todoInput.value.trim();

    if (text === "") {
        return;
    }

    const li = document.createElement("li");

    li.textContent = text;

    todoList.appendChild(li);

    todoInput.value = "";
});


// Bonus: Remove a to-do item when clicked

todoList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.remove();
    }
});


// ==============================
// Task 3 — Fetch Users
// ==============================

async function loadUsers() {
    const userList = document.getElementById("userList");
    const userMessage = document.getElementById("userMessage");

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to load users.");
        }

        const users = await response.json();

        userList.innerHTML = "";

        users.forEach(function (user) {
            const li = document.createElement("li");

            li.textContent = user.name;

            userList.appendChild(li);
        });

        userMessage.textContent = "Users loaded successfully.";
    } catch (error) {
        userMessage.textContent = "Failed to load users.";
    }
}

loadUsers();