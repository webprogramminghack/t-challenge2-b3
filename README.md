# Challenge 2 (Phase 1) - Batch 3

---

# Challenge 1

## Event Reminder with JSON Input

### Description:

1. Create a JavaScript function that accepts a **JSON string** as input.
2. Inside the function, convert the JSON string into a JavaScript object.
3. The object will have the following properties:
   - `name` (event name),
   - `date` (event date in `YYYY-MM-DD` format),
   - `reminderTime` (reminder time in milliseconds).
4. The function should log a reminder message to the console after the specified `reminderTime` has passed from the event date.
5. If the event date has not yet arrived, use `setTimeout` to delay the reminder message.
6. If the event date has already passed, log a message indicating that the event date has passed.

### Example Input:

```javascript
const eventJSON = `{
    "name": "Tech Conference",
    "date": "2023-12-15",
    "reminderTime": 5000 // 5 seconds
}`;
```

### Expected Output:

```
"Reminder: Tech Conference is on 2023-12-15"
```

(This message appears in the console 5 seconds after the current time if the event date is today or in the future. If the event date has passed, the message "The event date has already passed." is logged.)

---

# Challenge 2

## Decorator Function with JSON Input

### Description:

1. Create a decorator function named `withGreeting` that accepts a function as an argument.
2. The decorator should return a new function that:
   - Accepts a JSON string containing user information (`name` and `age`).
   - Converts the JSON string into a JavaScript object.
   - Calls the original function with `this` bound to the user object.
   - Adds a welcome message before calling the original function.
3. The original function should log the user's information (`name` and `age`).
4. Use arrow functions for the logic inside the decorator.

### Example Input:

```javascript
const userJSON = `{
    "name": "Alice",
    "age": 25
}`;

function printUserInfo() {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
}
```

### Expected Output:

```
"Welcome, Alice!"
"Name: Alice, Age: 25"
```

---

# How to Run the Test

### 1. Install Dependencies

Run the following command to install dependencies:

```
npm install
```

### 2. Run Tests

Run the tests using the following command:

```
npm run test
```

---

# Evaluation System

The evaluation for this challenge is based on the following four criteria:

### 1. Requirement Fulfillment & Correctness

### 2. Javascript Usage

### 3. Problem Solving Approach

### 4. Code Clarity

---

# How to Upload your Challange

Check this module: [click this](https://orchid-clematis-3e4.notion.site/Panduan-Penggunaan-Git-Untuk-Upload-Assignment-e2d80a19b3684f5d8f1a4209dcf85445?pvs=73)

---

## 🎉 Embrace the challenge and turn your tasks into a fun adventure—each step brings you closer to your goals! You've got this! 🚀 Remember, every small victory is a reason to celebrate! 🎈
