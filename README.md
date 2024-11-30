
# PrettierDate

**PrettierDate** is a simple and useful utility for formatting JavaScript date objects into more readable formats. It simplifies date formatting, especially when working with day/month/year formats.

## Installation

```bash
npm install prettierdate
```

## Usage

You can include this library in your project and use various date formatting functions.

### Examples

```javascript
const PrettierDate = require('prettierdate');

// Default date: Current date and time
console.log(PrettierDate.pretty()); // Example: "30/11/2024 14:32"

// Date and time with dot separator
console.log(PrettierDate.prettyWithDots()); // Example: "30.11.2024 14:32"

// Current date and time
console.log(PrettierDate.prettyNow()); // Example: "30/11/2024 14:32"

// Only time
console.log(PrettierDate.prettyHour()); // Example: "14:32"

// Date format
console.log(PrettierDate.prettyDate()); // Example: "30/11/2024"

// Only date with dot separator
console.log(PrettierDate.prettyDateWithDots()); // Example: "30.11.2024"

// Formatting a specific date
const someDate = new Date('2024-11-01T10:45:00');
console.log(PrettierDate.pretty(someDate)); // Example: "01/11/2024 10:45"
console.log(PrettierDate.prettyWithDots(someDate)); // Example: "01.11.2024 10:45"
console.log(PrettierDate.prettyHour(someDate)); // Example: "10:45"
console.log(PrettierDate.prettyDate(someDate)); // Example: "01/11/2024"
console.log(PrettierDate.prettyDateWithDots(someDate)); // Example: "01.11.2024"
```

## Functions

### `pretty(date?)`
Formats the given date as `dd/mm/yyyy hh:mm`. If no date is provided, the current date is used.

---

### `prettyWithDots(date?)`
Formats the given date as `dd.mm.yyyy hh:mm`. If no date is provided, the current date is used.

---

### `prettyNow()`
Returns the current date and time in the format `dd/mm/yyyy hh:mm`.

---

### `prettyHour(date?)`
Formats the given date as time only, `hh:mm`. If no date is provided, the current date is used.

---

### `prettyDate(date?)`
Formats the given date as `dd/mm/yyyy`. If no date is provided, the current date is used.

---

### `prettyDateWithDots(date?)`
Formats the given date as `dd.mm.yyyy`. If no date is provided, the current date is used.

## Contribution

If you would like to contribute:

1. Fork this repository.
2. Create a new branch: `git checkout -b feature/new-feature`.
3. Commit your changes: `git commit -m 'Added a new feature'`.
4. Push to the branch: `git push origin feature/new-feature`.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
