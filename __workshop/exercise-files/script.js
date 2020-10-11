// add js here
let submitBtn = document.querySelector("#submit");
let checkbox = document.querySelector("#terms");

let errorMessage = document.querySelector(".errorMessage")
let passOne = document.querySelector("#pass");
let passTwo = document.querySelector("#confirmPass")

submitBtn.addEventListener("click", validateForm);

function validateForm () {
    if (checkbox.checked === true && passOne.value.length < 10) {
        errorMessage.style.display = "block";
        errorMessage.innerText = "Your password is too short! Please provide a password that is at least 10 characters long.";
        return false;
    }
    if (checkbox.checked === true && passOne.value !== passTwo.value) {
        errorMessage.style.display = "block";
        errorMessage.innerText = "Your passwords didn't match! Please provide the same one in both fields.";
        return false;
    }
    if (checkbox.checked === false) {
        alert("You must agree to the terms of service before submitting.");
        return false;
    }
    if (checkbox.checked === true && passOne.value.length >= 10 && passOne.value === passTwo.value) {
        alert("Success!");
        return true;
    }
    }