


document.addEventListener(("DOMContentLoaded"), () => {
    const form = document.getElementById("form");
    form.addEventListener(("submit"), (e) => {
        // stop form submission 
        e.preventDefault();
        // getting access the input
        const firstName = form.elements['firstName'];
        const lastName = form.elements['lastName'];
        const number = form.elements['number'];  // getting access number
        const email = form.elements['email'];  // get email
        const password = form.elements['password'];

        // all my pattern to check the input
        let TextPattern = /^[a-zA-Z0-9.+_-]{2,}$/; //for text
        let NumberPattern = /^\d{8,}$/; // for number
        let EmailPattern = /^[a-zA-Z0-9.+_-%]+@[a-zA-Z0-9_+-]{2,}\.[a-zA-Z]{2,}$/; // for Email
        let PasswordPattern = /^(?=.*[a-z])(?=.+[A-Z])(?=.*[\d])(?=.+[*%-+_@])[a-zA-Z0-9_+.-%@]{8,}$/ //for password

        firstName.style.border = "";
        lastName.style.border = "";
        number.style.border = "";
        email.style.border = "";
        password.style.border = "";
        //check  firsName's input
        let checkError = false;

        if (!TextPattern.test(firstName.value.trim())) {
            firstName.style.border = "3px solid red"
            checkError = true;
        }
        //check  lastName's input
        if (!TextPattern.test(lastName.value.trim())) {
            lastName.style.border = "3px solid red";
            checkError = true;
        }
        // check the number input 
        if (!NumberPattern.test(number.value.trim())) {
            number.style.border = "3px solid red";
            checkError = true;
        }
        // check email's value
        if (!EmailPattern.test(email.value.trim())) {
            email.style.border = "3px solid red";
            checkError = true;
        }
         // check password's value
        if (!PasswordPattern.test(password.value.trim())) {
            password.style.border = "3px solid red";
            checkError = true;
        }
        if(!checkError){
            form.submit();
            alert("Form is valided");
        }


    })
})