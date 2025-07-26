// checking ours input before allowing the user to move 

let textPattern = /^[a-zA-Z0-9]{2,}$/; // getting the pattern
let emailPattern = /^[a-zA-Z0-9_+.-]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/; // getting the pattern
let numberPattern = /^[+]\d{8,}$/; // getting the pattern
const orgNamePattern = /^[a-zA-Z0-9&.,'’\-() ]{3,}$/;
// select the input of html 
const userFullName = document.getElementById("fullname");
const userEmail = document.getElementById("email");
const Businessname = document.getElementById("business");
const Phone = document.getElementById('phone');
const ContactWay = document.querySelectorAll('#contact');
//  second step
const BusinessPurp = document.querySelectorAll("#WebsiteGoal");
const DomainName = document.querySelectorAll("#domainName");
const HostingName = document.querySelectorAll("#hosting");
const DescBusiness = document.getElementById('describe');

// function to check the input of fisrt step 
function CheckField1() {
    let isValid = true;
    if (!textPattern.test(userFullName.value.trim())) {
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
    if (!numberPattern.test(Phone.value.trim())) {
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
    document.getElementById('error').innerHTML ="";
    let confirmbusP = false;
    let confirmDomName = false;
    let confirmHostin = false;
    let isValid = true;
    BusinessPurp.forEach(busP => {
        if (busP.checked) {
            confirmbusP = true
        }
    })
     if(!confirmbusP){
            isValid = false;
        }
    DomainName.forEach(DomName => {
        if (DomName.checked) {
            confirmDomName = true
        }
    })
    if (!confirmDomName) {
            isValid = false;
        }
        if(!orgNamePattern.test(DescBusiness.value.trim())){
             DescBusiness.style.border = "3px solid red";
            isValid = false
        }else{
            DescBusiness.style.border = "";
        }
    HostingName.forEach(hosting => {
        if (hosting.checked) {
             confirmHostin = true
        }
        
    })
    if (!confirmHostin) {
            isValid = false;
        }
        if(!confirmDomName || !confirmHostin || !confirmbusP){
            document.getElementById('error').innerHTML ="Please complete all required fields.";
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
const Myform= document.getElementById('ac_form');
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
    }else if (index === 1) {
            Nextbtn.addEventListener('click', ()=>{
                if(CheckField2()){
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


const UserWebsiteLink = document.getElementById('websiteLink');
const WorkInterval = document.querySelectorAll('#time');
const ExpentPrice = document.querySelectorAll('#budget');


Myform.addEventListener('submit', (e)=>{
                e.preventDefault();
                isValid = true;
                confirmTime = false;
                confirmPrice = false;
                UserWebsiteLink.style.border ="";
                if(!orgNamePattern.test(UserWebsiteLink.value.trim())){
                    UserWebsiteLink.style.border ="3px solid red"
                    isValid =false;
                }
                WorkInterval.forEach(time =>{
                    if(time.checked){
                        confirmTime = true;
                    }
                })
                if(!confirmTime){
                    isValid = false
                }
                ExpentPrice.forEach(price =>{
                    if(price.checked){
                        confirmPrice= true;
                    }
                })
                if(!confirmPrice){
                    isValid = false;
                }
                if(isValid && CheckField1() && CheckField2()){
                    Myform.onsubmit;
                     alert("✅ Thank you, your information has been received.");
                }else{
                    console.error();
                }

            })

            // _________________this is a animation of header_________________
current_step = 0; // current step of form mean the first part
// function to show the form using paramettre 
const ac_head = document.querySelectorAll('.septhead');
function showanimation(current_animation) {
    ac_head.forEach((title, index) => {
        if (index === current_animation) {
            title.classList.add('active');
        } else {
            title.classList.remove('active');
        }
    })
}
showanimation(currentPage);
// // this this the code of animation of step at the top of the page

// Prevbutton.forEach(BackButton => {
//     BackButton.addEventListener('click', () => {
//         if (current_step > 0) {
//             current_step--;
//             showStep(current_step);
//             showanimation(current_step);
//             if (current_step == 0) {
//                 document.documentElement.style.setProperty('--width', '160px');
//             }
//             if (current_step == 1) {
//                 document.documentElement.style.setProperty('--width', '340px');
//             }
//         }
//     })
// })

// for each button we have to listen the click 
// Nextbutton.forEach((btn ,index) => {
//     btn.disabled = true;
// // select the button 
// Nextbutton.forEach(Next => {
//     Next.addEventListener('click', () => {
//         if (current_step <= ac_step.length - 1 && CheckField1() ) {
//             if(index == 0){
//                 btn.disabled = false; 
//             }
//             current_step++; // increass the current_step if the condition is true
//             showStep(current_step);
//             showanimation(current_step);
//             if (current_step == 1) {
//                 document.documentElement.style.setProperty('--width', '340px');
//             }
//             if (current_step == 2) {
//                 document.documentElement.style.setProperty('--width', '480px');
//             }
//         }
//     })
// })
// });








// --------------------------------------------------------
// getting the button 
/* 
const ac_step = document.querySelectorAll('.ac-step');
const Firstdiv = document.querySelector('.ac_step')


current_step = 0; // current step of form mean the first part
// function to show the form using paramettre 
function showanimation(current_animation) {
    ac_head.forEach((title, index) => {
        if (index === current_animation) {
            title.classList.add('active');
        } else {
            title.classList.remove('active');
        }
    })
}
// function on click to the next button to remove active for all step and add class active only to previous 
function showStep(currentStep) {
    ac_step.forEach((step, index) => {
        if (index === currentStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    })
}
showStep(current_step);


*/




