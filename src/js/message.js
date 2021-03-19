let alertMessage = [];

/* ======SEND MESSAGE====== */
function sendEmail() {
    if (validate()) {
        alert("Email succesfully sent.")
        clearFields();
    }
    else {
        alert(alertMessage.join(""));
        alertMessage = [];
    }
}

/* ======VALIDATE CALLBACKS ====== */
function validate() {
    alertMessage.push("Please enter valid:\n");
    let isValidName = validateName();
    if (!isValidName)
        alertMessage.push("* Name\n");
    let isValidSurname = validateSurname();
    if (!isValidSurname)
        alertMessage.push("* Surname\n");
    let isValidPhone = validatePhoneNumber();
    if (!isValidPhone)
        alertMessage.push("* Phone Number\n");
    let isValidEmail = validateEmail();
    if (!isValidEmail)
        alertMessage.push("* Email Address\n");
    alertMessage.push("Thank you.\n");
    return isValidName && isValidSurname && isValidEmail && isValidPhone;
}

/* ======VALIDATE NAME====== */
function validateName() {
    const firstName = document.getElementById("contact-name").value;
    let nameREG = /^[a-zA-Z]+$/;
    let nameResult = nameREG.test(firstName);
    return nameResult;
}

/* ======VALIDATE SURNAME====== */
function validateSurname() {
    const surname = document.getElementById("contact-surname").value;
    let surnameREG = /^[a-zA-Z]+$/;
    let surnameResult = surnameREG.test(surname);
    return surnameResult;
}

/* ======VALIDATE PHONE====== */
function validatePhoneNumber() {
    const phone = document.getElementById("contact-phone").value;
    let phoneRGEX = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    let phoneResult = phoneRGEX.test(phone);
    return phoneResult;
}

/* ======VALIDATE EMAIL====== */
function validateEmail() {
    const email = document.getElementById("contact-email").value;
    let emailREG = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
    let emailResult = emailREG.test(email);
    return emailResult;
}

/* ======CLEAR FIELDS====== */
function clearFields(){
    document.getElementById("contact-email").value = "";
    document.getElementById("contact-phone").value = "";
    document.getElementById("contact-name").value = "";
    document.getElementById("contact-surname").value = "";
    document.getElementById("contact-message").value = "";
}

const submitButton = document.getElementById("contact-submit");
submitButton.addEventListener("click", sendEmail);

/* ======DISABLE SEND====== */
function sendButtonAvailabilitySwitch() {
    let submitButton = document.getElementById('contact-submit');
    let messageBox = document.getElementById("contact-message");
    if (messageBox.value === "")
        submitButton.disabled = true;
    else
        submitButton.disabled = false;

}


const message = document.getElementById("contact-message");
console.log(message);
message.addEventListener("input", sendButtonAvailabilitySwitch);
