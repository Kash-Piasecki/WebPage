/* ======VARIABLES====== */
const firstName = document.getElementById("contact-name");
const surname = document.getElementById("contact-surname");
const email = document.getElementById("contact-email");
const phone = document.getElementById("contact-phone");
const submitButton = document.getElementById("contact-submit");
const message = document.getElementById("contact-message");

/* ======SEND MESSAGE====== */
function sendEmail(name, email, phone, message) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "mototestemailaddress@gmail.com",
        Password: "sbovyistkpzwxelv",
        To: "mototestemailaddress@gmail.com",
        From: "mototestemailaddress@gmail.com",
        Subject: name + "sent you a message",
        Body: "Name: " + name + "\n Email: "
            + email + "\n Phone: " + phone + "\n Message: " + message,
    }).then( () => {
        alert("Email succesfully sent.");
        clearFields();
    });
}

/* ======VALIDATE NAME====== */
function checkNameInputs(nameValue) {
    if (nameValue === '' || nameValue == null) {
        setErrorFor(firstName, "Name cannot be blank");
    } else if (!validateName()) {
        setErrorFor(firstName, "Name should contain only english letters")
    } else {
        setSuccessFor(firstName);
        return true;
    }
}

function validateName() {
    const firstName = document.getElementById("contact-name").value;
    let nameREG = /^[a-zA-Z]+$/;
    let nameResult = nameREG.test(firstName);
    return nameResult;
}

/* ======VALIDATE SURNAME====== */
function checkSurnameInputs(surnameValue) {
    if (surnameValue === '' || surnameValue == null) {
        setErrorFor(surname, "Surname cannot be blank");
    } else if (!validateSurname()) {
        setErrorFor(surname, "Surname should contain only english letters")
    } else {
        setSuccessFor(surname);
        return true;
    }
}

function validateSurname() {
    const surname = document.getElementById("contact-surname").value;
    let surnameREG = /^[a-zA-Z]+$/;
    let surnameResult = surnameREG.test(surname);
    return surnameResult;
}

/* ======VALIDATE PHONE====== */
function checkPhoneInputs(phoneValue) {
    if (phoneValue === '' || phoneValue == null) {
        setErrorFor(phone, "Phone number cannot be blank");
    } else if (!validatePhoneNumber()) {
        setErrorFor(phone, "Phone number should not contain any letters")
    } else {
        setSuccessFor(phone);
        return true;
    }
}

function validatePhoneNumber() {
    const phone = document.getElementById("contact-phone").value;
    let phoneRGEX = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    let phoneResult = phoneRGEX.test(phone);
    return phoneResult;
}

/* ======VALIDATE EMAIL====== */
function checkEmailInputs(emailValue) {
    if (emailValue === '' || emailValue == null) {
        setErrorFor(email, "Email cannot be blank");
    } else if (!validateEmail()) {
        setErrorFor(email, "Not a valid email address")
    } else {
        setSuccessFor(email);
        return true;
    }
}

function validateEmail() {
    const email = document.getElementById("contact-email").value;
    let emailREG = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
    let emailResult = emailREG.test(email);
    return emailResult;
}

/* ======CLEAR FIELDS====== */
function clearFields() {
    document.getElementById("contact-email").value = "";
    document.getElementById("contact-phone").value = "";
    document.getElementById("contact-name").value = "";
    document.getElementById("contact-surname").value = "";
    document.getElementById("contact-message").value = "";
}

/* ======DISABLE SEND====== */
function sendButtonAvailabilitySwitch() {
    let submitButton = document.getElementById('contact-submit');
    let messageBox = document.getElementById("contact-message");
    if (messageBox.value === "")
        submitButton.disabled = true;
    else
        submitButton.disabled = false;

}

message.addEventListener("input", sendButtonAvailabilitySwitch);

/* ======ERROR MESSAGE====== */
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const nameValue = firstName.value;
    const surnameValue = surname.value;
    const emailValue = email.value;
    const phoneValue = phone.value;
    const messageValue = message.value;

    const fullName = nameValue + " " + surnameValue;

    let isValidName = checkNameInputs(nameValue);
    let isValidSurname = checkSurnameInputs(surnameValue);
    let isValidEmail = checkEmailInputs(emailValue);
    let isValidPhone = checkPhoneInputs(phoneValue);

    if (isValidName && isValidSurname && isValidPhone && isValidEmail)
        sendEmail(fullName, emailValue, phoneValue, messageValue);
}


/* ======SET SUCCESS/ERROR====== */
function setErrorFor(input, message) {
    const contactControl = input.parentElement;
    const small = contactControl.querySelector("small");
    small.innerText = message;
    contactControl.className = "contact__control error";
}

function setSuccessFor(input) {
    const contactControl = input.parentElement;
    contactControl.className = "contact__control success";
}
