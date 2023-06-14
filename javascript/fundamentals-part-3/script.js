let add7 = num => num + 7;
let multiply = (num1, num2) => num1 * num2;
let capitalize = string => {
    // One way – use built-in methods to capitalize the first letter of the string,
    // lowercase the rest, and return a new string
    let titleCase = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

    return titleCase;
}
let lastLetter = string => {
    // string.length - 1 returns the index of the last letter of the string
    // string.charAt returns the letter at that index
    return string.charAt(string.length - 1)
}

capitalize("monkey"); // returns Monkey
lastLetter("pineapple"); // returns e