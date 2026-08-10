# 🚀 Programming Hero — Module 8 | JavaScript Day 2

<div align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Programming Hero](https://img.shields.io/badge/Programming%20Hero-Module%208-blue?style=for-the-badge)
![Practice](https://img.shields.io/badge/Practice-JavaScript-success?style=for-the-badge)
![Conditionals](https://img.shields.io/badge/Focus-Conditionals-orange?style=for-the-badge)
![Tasks](https://img.shields.io/badge/Tasks-22-blueviolet?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=for-the-badge)

**JavaScript Conditionals • Operators • Decision Making • Problem Solving**

</div>

---

## 📌 About This Repository

This repository contains my **Programming Hero — Module 8: JavaScript Day 2** practice tasks.

The main focus of this module was to understand how JavaScript makes decisions using comparison operators, equality operators, logical operators, conditional statements, nested conditions, and the ternary operator.

Through these practical exercises, I practiced solving real-world decision-making problems such as login validation, voting eligibility, grading systems, discounts, stock availability, weather conditions, speed checking, and role-based access.

---

## 🎯 Learning Objectives

Through this module, I focused on:

- Understanding comparison operators
- Understanding equality operators
- Using `==` and `===`
- Using logical operators
- Using `if` statements
- Using `if...else`
- Using `else if`
- Working with nested conditions
- Using the ternary operator
- Understanding Boolean logic
- Building decision-making systems
- Solving real-world conditional problems
- Improving JavaScript problem-solving skills

---

# 📚 Topics Covered

## 🔹 Comparison Operators

Practiced comparing values using:

```javascript
>
<
>=
<=
==
===
!=
!==
```

Example:

```javascript
const age = 20;

console.log(age >= 18);
```

---

## 🔹 Equality Operators

Practiced understanding the difference between:

```javascript
==
===
```

### Loose Equality

```javascript
5 == "5";
```

### Strict Equality

```javascript
5 === "5";
```

Strict equality checks both **value and data type**.

---

## 🔹 Logical Operators

Practiced:

```javascript
&&
||
!
```

### AND

```javascript
age >= 18 && hasId === true
```

### OR

```javascript
isStudent === true || isEmployee === true
```

### NOT

```javascript
!isLoggedIn
```

---

## 🔹 if Statement

Used `if` to execute code when a condition is true.

```javascript
if (age >= 18) {
    console.log("Adult");
}
```

---

## 🔹 if...else

Used `if...else` to handle two possible outcomes.

```javascript
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

---

## 🔹 else if

Practiced handling multiple conditions.

```javascript
if (marks >= 80) {
    console.log("A+");
} else if (marks >= 70) {
    console.log("A");
} else {
    console.log("Below A");
}
```

---

## 🔹 Nested Conditions

Practiced placing one conditional statement inside another.

```javascript
if (isLoggedIn) {

    if (isAdmin) {
        console.log("Admin Dashboard");
    }
}
```

---

## 🔹 Ternary Operator

Practiced writing short conditional expressions.

```javascript
const result = age >= 18 ? "Adult" : "Minor";
```

---

# 📋 Practice Programs

| # | File | Description |
|---|------|-------------|
| 01 | `adult-minor.js` | Check whether a person is an adult or minor |
| 02 | `bmi.js` | BMI calculator using conditional statements |
| 03 | `comparison-operator.js` | Practice comparison operators |
| 04 | `discount-system.js` | Calculate discount based on conditions |
| 05 | `entry.js` | Event entry eligibility checker |
| 06 | `equality-practice.js` | Practice `==` and `===` operators |
| 07 | `even-odd.js` | Determine even or odd numbers |
| 08 | `grading-check.js` | Student grading system |
| 09 | `holiday.js` | Holiday availability checker |
| 10 | `is-raining.js` | Weather condition checker |
| 11 | `leap-year.js` | Leap year verification |
| 12 | `loggedIn-Admin.js` | Admin login verification |
| 13 | `login-role-system.js` | Login system with role-based dashboard |
| 14 | `login.js` | Username and password validation |
| 15 | `online-check.js` | User online/offline status |
| 16 | `permission-check.js` | Permission checking system |
| 17 | `positive-negative.js` | Positive, negative, or zero checker |
| 18 | `price-check.js` | Product price validation |
| 19 | `season.js` | Season checker |
| 20 | `speed.js` | Speed limit checker |
| 21 | `stock.js` | Product stock availability |
| 22 | `vote.js` | Voting eligibility checker |

---

# 🧩 Practice Details

## 01 — Adult or Minor

Practiced checking whether a person is an adult or minor based on age.

**Concepts:**

- `if...else`
- Comparison operators
- Boolean conditions

---

## 02 — BMI Calculator

Practiced calculating BMI and determining the result using conditional statements.

**Concepts:**

- Mathematical operations
- Conditional logic
- Comparison operators

---

## 03 — Comparison Operators

Practiced different comparison operators and learned how JavaScript compares values.

**Concepts:**

- `>`
- `<`
- `>=`
- `<=`
- `==`
- `===`
- `!=`
- `!==`

---

## 04 — Discount System

Practiced applying discounts based on different conditions.

**Concepts:**

- `if...else`
- Comparison operators
- Logical thinking
- Mathematical calculations

---

## 05 — Entry Eligibility

Practiced checking whether someone is eligible to enter an event.

**Concepts:**

- Conditional statements
- Boolean logic
- Logical operators

---

## 06 — Equality Practice

Practiced the difference between loose equality and strict equality.

```javascript
5 == "5";   // true
5 === "5";  // false
```

---

## 07 — Even or Odd

Practiced determining whether a number is even or odd.

```javascript
if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}
```

---

## 08 — Grading Check

Practiced creating a student grading system using multiple conditions.

**Concepts:**

- `if`
- `else if`
- `else`
- Comparison operators

---

## 09 — Holiday Checker

Practiced checking holiday-related conditions using decision-making logic.

---

## 10 — Is Raining

Practiced checking weather conditions using Boolean values and conditional statements.

---

## 11 — Leap Year

Practiced checking whether a year is a leap year.

**Concepts:**

- Modulus operator
- Logical operators
- Conditional statements

---

## 12 — Logged In Admin

Practiced checking whether a logged-in user has administrator privileges.

**Concepts:**

- Boolean logic
- Nested conditions
- Role checking

---

## 13 — Login Role System

Practiced building a basic role-based login system.

Possible roles include:

- Admin
- User
- Guest

---

## 14 — Login Validation

Practiced validating username and password conditions.

**Concepts:**

- String comparison
- `&&`
- Conditional statements

---

## 15 — Online Check

Practiced checking whether a user is online or offline.

---

## 16 — Permission Check

Practiced checking whether a user has permission to perform a specific action.

**Concepts:**

- Boolean logic
- Logical operators
- Conditional statements

---

## 17 — Positive / Negative

Practiced determining whether a number is:

- Positive
- Negative
- Zero

---

## 18 — Price Check

Practiced validating product prices using conditional logic.

---

## 19 — Season Checker

Practiced determining the season based on given conditions.

---

## 20 — Speed Checker

Practiced checking speed limits and determining whether a speed is acceptable.

---

## 21 — Stock Availability

Practiced checking whether a product is available in stock.

---

## 22 — Voting Eligibility

Practiced checking whether a person is eligible to vote based on age and conditions.

---

# 🧠 Problem-Solving Workflow

For each problem, I followed a structured approach:

```text
Understand the Problem
        ↓
Identify the Input
        ↓
Determine the Expected Output
        ↓
Identify the Conditions
        ↓
Choose the Appropriate Operator
        ↓
Write the Conditional Logic
        ↓
Test Different Inputs
        ↓
Handle Edge Cases
        ↓
Improve the Solution
```

---

# 🔥 Decision-Making Flow

```text
Input
  ↓
Condition
  ↓
Is Condition True?
  ├── Yes → Execute True Block
  │
  └── No
       ↓
   Check Next Condition
       ↓
   Execute Alternative Block
```

---

# 🛠️ Technologies Used

- **JavaScript**
- **ES6+**
- **Node.js**
- **Visual Studio Code**
- **Git**
- **GitHub**

---

# 📁 Repository Structure

```text
programming-hero-module-8/
│
├── adult-minor.js
├── bmi.js
├── comparison-operator.js
├── discount-system.js
├── entry.js
├── equality-practice.js
├── even-odd.js
├── grading-check.js
├── holiday.js
├── is-raining.js
├── leap-year.js
├── loggedIn-Admin.js
├── login-role-system.js
├── login.js
├── online-check.js
├── permission-check.js
├── positive-negative.js
├── price-check.js
├── season.js
├── speed.js
├── stock.js
├── vote.js
│
└── README.md
```

---

# ▶️ How to Run

## 1. Clone the Repository

```bash
git clone https://github.com/aminulislam424842/programming-hero-module-8.git
```

## 2. Navigate to the Project

```bash
cd programming-hero-module-8
```

## 3. Run Any JavaScript File

Example:

```bash
node adult-minor.js
```

Another example:

```bash
node login-role-system.js
```

You can run any `.js` file using Node.js.

---

# 🧪 Testing Approach

I tested the programs with different types of inputs:

```text
Normal Input
     ↓
Expected Input
     ↓
Alternative Input
     ↓
Boundary Case
     ↓
Edge Case
     ↓
Invalid Input
     ↓
Final Solution
```

This helped me identify logical errors and make the programs more reliable.

---

# 📈 Learning Progress

```text
Programming Hero — Module 8
│
├── Comparison Operators        ✅
├── Equality Operators          ✅
├── Logical Operators           ✅
├── if Statement                ✅
├── if...else                   ✅
├── else if                     ✅
├── Nested Conditions           ✅
├── Ternary Operator            ✅
├── Boolean Logic               ✅
├── Decision Making             ✅
├── Login Validation            ✅
├── Role-Based Logic            ✅
├── Real-World Conditions       ✅
└── Problem Solving             ✅
```

---

# 💡 Key Learnings

This module helped me build a strong foundation in JavaScript decision-making and conditional logic.

### I learned how to:

- Compare values correctly
- Understand `==` vs `===`
- Use logical operators
- Write `if` statements
- Use `if...else`
- Build `else if` ladders
- Work with nested conditions
- Use the ternary operator
- Build login validation logic
- Create role-based access logic
- Check eligibility conditions
- Build grading systems
- Create discount systems
- Validate product and user data
- Solve real-world decision-making problems

---

# 🚀 What's Next?

After completing this module, I will continue strengthening my JavaScript fundamentals and move toward loops, arrays, functions, objects, ES6 features, and advanced problem solving.

### Next Learning Goals

- JavaScript Loops
- Arrays
- Array Methods
- Strings
- Objects
- Functions
- ES6+
- Problem Solving
- DOM Manipulation
- Debugging
- Modern Web Development

---

# 📌 Repository Goal

The goal of this repository is to build a strong foundation in JavaScript conditional logic and decision-making.

By completing these practical exercises, I am developing the logical thinking and programming skills required to solve real-world problems and become a professional full-stack developer.

---

# 📖 Course

**Programming Hero**

### AI Driven Full Stack Web Engineering

**Module 08 — Fundamental Concepts of Conditionals**

---

## 👨‍💻 Author

### Md. Aminul Islam Mahi

**Future Full Stack Developer 🚀**

---

<div align="center">

### ⭐ Thanks for visiting this repository!

**Built with ❤️ while learning with Programming Hero**

</div>