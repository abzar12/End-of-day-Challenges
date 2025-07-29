// checking ours input before allowing the user to move 

let textPattern = /^[a-zA-Z0-9\s]{2,}$/; // getting the pattern
let emailPattern = /^[a-zA-Z0-9_+.-]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/; // getting the pattern
let numberPattern = /^\+[\d\s-]{8,}$/; // getting the pattern
const orgNamePattern = /^.{3,}$/;
// select the input of html 
const userFullName = document.getElementById("fullname");
const userEmail = document.getElementById("email");
const Businessname = document.getElementById("business");
const Phone = document.getElementById('phone');
const ContactWay = document.querySelectorAll('#contact');
//  second step
const BusinessPurp = document.querySelectorAll('[name="typeOfBusiness[]"]');
const DomainName = document.querySelectorAll('[ name="domain"]');
const HostingName = document.querySelectorAll('[name ="hosting"]');
const DescBusiness = document.getElementById('describe');
const NumberOfPages = document.querySelectorAll('[name="page"]');

// function to check the input of fisrt step 
function CheckField1() {
    let isValid = true;
    if (!textPattern.test(userFullName.value)) {
        userFullName.style.border = "3px solid red";
        isValid = false;
    } else {
        userFullName.style.border = ""
    }
    if (!emailPattern.test(userEmail.value.trim())) {
        userEmail.style.border = "3px solid red";
        isValid = false;
    } else {
        userEmail.style.border = ""
    }
    if (!numberPattern.test(Phone.value)) {
        Phone.style.border = "3px solid red";
        isValid = false;
    } else {
        Phone.style.border = ""
    }
    if (!orgNamePattern.test(Businessname.value.trim())) {
        Businessname.style.border = "3px solid red";
        isValid = false
    } else {
        Businessname.style.border = "";
    }
    let oneInputChecked = false;
    ContactWay.forEach(contactInput => {
        if (contactInput.checked) {
            oneInputChecked = true;
        }
    });
    if (!oneInputChecked) {
        isValid = false;
    }
    return isValid;
}
// function to check the input of second step 
function CheckField2() {
    document.getElementById('error').innerHTML = "";
    let isValid = true;

    // Check Business Purpose
    const confirmbusP = Array.from(BusinessPurp).some(input => input.checked);
    if (!confirmbusP) isValid = false;

    // Check Domain Name
    const confirmDomName = Array.from(DomainName).some(input => input.checked);
    if (!confirmDomName) isValid = false;

    // Check Hosting
    const confirmHostin = Array.from(HostingName).some(input => input.checked);
    if (!confirmHostin) isValid = false;

    // Check Description
    if (!orgNamePattern.test(DescBusiness.value) || DescBusiness.value.length > 200) {
        DescBusiness.style.border = "3px solid red";
        isValid = false;
    } else {
        DescBusiness.style.border = "";
    }
    const confirmPageNumber = Array.from(NumberOfPages).some(input => input.checked);
    if (!confirmPageNumber) {
        isValid = false;
    }

    // Display error message if any required input is missing
    if (!confirmbusP || !confirmDomName || !confirmHostin || !confirmPageNumber) {
        document.getElementById('error').innerHTML = "Please complete all required fields.";
        console.error();
    }
    return isValid;
}
// getting all the step and 
let currentPage = 0; // current page 
const ac_step = document.querySelectorAll('.ac-step');
const Firstdiv = document.querySelector('.ac_step')
function showStep(currentStep) {
    ac_step.forEach((step, index) => {
        if (index == currentStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    })
}
showStep(currentPage)

//_____________________ setting the next button 
const Nextbutton = document.querySelectorAll('#Nextbutton');

Nextbutton.forEach((Nextbtn, index) => {
    if (index === 0) {
        Nextbtn.addEventListener('click', () => {

            if (CheckField1()) {
                currentPage++;
            }
            showStep(currentPage);
            showanimation(currentPage);
            if (currentPage == 1) {
                document.documentElement.style.setProperty('--width', '340px');
            }
        })
    } else if (index === 1) {
        Nextbtn.addEventListener('click', () => {
            if (CheckField2()) {
                currentPage++;
            }
            showStep(currentPage);
            showanimation(currentPage);
            if (currentPage == 2) {
                document.documentElement.style.setProperty('--width', '480px');
            }
        })
    }
})
//_____________________ setting the back button 
const Prevbutton = document.querySelectorAll('#Prevbutton');

Prevbutton.forEach((backBtn) => {
    backBtn.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
        }
        showStep(currentPage);
        showanimation(currentPage);
        if (currentPage == 0) {
            document.documentElement.style.setProperty('--width', '160px');
        }
        if (currentPage == 1) {
            document.documentElement.style.setProperty('--width', '340px');
        }
    })
})
// _________________this is a animation of header_________________
current_step = 0; // current step of form mean the first part
// function to show the form using paramettre 
const ac_head = document.querySelectorAll('.septhead');
function showanimation(current_animation) {
    ac_head.forEach((title, index) => {
        if (index == current_animation) {
            title.classList.add('active');
        } else {
            title.classList.remove('active');
        }
    })
}
showanimation(currentPage);


const UserWebsiteLink = document.getElementById('websiteLink');
const WorkInterval = document.querySelectorAll("[name='WorkTime']");
const ExpentPrice = document.querySelectorAll("[name='websitePrice']");

const Myform = document.getElementById('ac_form');
const nativeSubmit = HTMLFormElement.prototype.submit;
Myform.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    document.getElementById('error1').innerHTML = "";
    UserWebsiteLink.style.border = "";
    const confirmWorkInterval = Array.from(WorkInterval).some(input => input.checked);
    if (!confirmWorkInterval) {
        isValid = false;
        document.getElementById('error1').innerHTML = "❌ Work interval not selected.";
    }
    if (!orgNamePattern.test(UserWebsiteLink.value.trim())) {
        UserWebsiteLink.style.border = "3px solid red";
        isValid = false;
    }
    const confirmPice = Array.from(ExpentPrice).some(input => input.checked);
    if (!confirmPice) {
        isValid = false;
        document.getElementById('error1').innerHTML = "❌ Work interval not selected."
    }
    if (isValid && CheckField1() && CheckField2()) {
        nativeSubmit.call(Myform);
        alert("✅ Thank you, your information has been received.");
    } else {
        alert("❌ Echec to subscirbe please check the information");
        console.error();
    }

})