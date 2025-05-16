// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("dark-mode");
  document.querySelector("header").classList.toggle("dark-mode");
  document.getElementById("hero-section").classList.toggle("dark-mode");
  darkModeToggle.innerHTML = isDarkMode ? "Light Mode 🔦" : "Dark Mode 🌙";

  // Optional: Save theme preference in localStorage
  localStorage.setItem("darkMode", isDarkMode);
});

// Load Dark Mode Preference on Page Load
window.addEventListener("DOMContentLoaded", () => {
  const darkModePreference = localStorage.getItem("darkMode") === "true";
  if (darkModePreference) {
    document.body.classList.add("dark-mode");
    document.querySelector("header").classList.add("dark-mode");
    document.getElementById("hero-section").classList.add("dark-mode");
    darkModeToggle.innerHTML = "Light Mode";
  }

  loadTasks(); // Load tasks from localStorage
});

// Alert Button
const alertButton = document.getElementById("alertButton");
alertButton.addEventListener("click", () => {
  alert("Button was clicked!");
});

// Popup Message
const popupMessage = document.getElementById("popupMessage");
function showPopup(message, type = "success") {
  popupMessage.textContent = message;
  popupMessage.className = "";
  popupMessage.classList.add("show", type);
  setTimeout(() => {
    popupMessage.classList.remove("show");
  }, 3000);
}

// Form Validation
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    showPopup("Please fill in all fields.", "error");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    showPopup("Please enter a valid email address.", "error");
    return;
  }

  showPopup("Form submitted successfully!", "success");
  contactForm.reset();
});

// To-Do List with localStorage
const todoInput = document.getElementById("todoInput");
const addTodo = document.getElementById("addTodo");
const todoList = document.getElementById("todoList");

addTodo.addEventListener("click", () => {
  const task = todoInput.value.trim();
  if (task) {
    addTask(task);
    saveTaskToLocalStorage(task);
    todoInput.value = "";
  } else {
    showPopup("Please enter a task!", "error");
  }
});

// Add Task to DOM
function addTask(taskText) {
  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", () => {
    li.remove();
    removeTaskFromLocalStorage(taskText);
  });

  todoList.appendChild(li);
}

// Save Task
function saveTaskToLocalStorage(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load Tasks
function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => addTask(task));
}

// Remove Task
function removeTaskFromLocalStorage(taskToRemove) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter((task) => task !== taskToRemove);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
// menu close and open

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.querySelector(".nav-bar2");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
});
