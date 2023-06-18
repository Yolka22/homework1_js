function palindrom(userNumber) {
    return userNumber.toString().split("").reverse().join("");
}

alert(palindrom(prompt("enter number",'')));