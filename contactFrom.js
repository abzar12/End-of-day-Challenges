
// getting the button 
const Prevbutton = document.querySelectorAll('#Prevbutton');
const Nextbutton = document.querySelectorAll('#Nextbutton');
const ac_step = document.querySelectorAll('.ac-step');
const Firstdiv = document.querySelector('.ac_step')
const ac_head = document.querySelectorAll('.septhead');


current_step = 0;
function showanimation(current_animation){
    ac_head.forEach((title, index) =>{
        if(index === current_animation){
            title.classList.add('active');
        }else{
            title.classList.remove('active');
        }
    })
}
function showStep(currentStep){
    ac_step.forEach((step, index) => {
        if (index === currentStep){
            step.classList.add('active');
        }else{
            step.classList.remove('active');
        }
    } )
}
showStep(current_step);

Nextbutton.forEach(Next =>{
    Next.addEventListener('click', () =>{
        if(current_step <= ac_step.length -1){
            current_step++;
            showStep(current_step);
            showanimation(current_step);
            if(current_step == 1){
                document.documentElement.style.setProperty('--width', '340px');
            }
            if(current_step == 2){
                document.documentElement.style.setProperty('--width', '480px');
            }
        }
    })
})
Prevbutton.forEach(BackButton =>{
    BackButton.addEventListener('click', () => {
        if(current_step > 0){
            current_step--;
            showStep(current_step);
            showanimation(current_step);
            if(current_step == 0){
                document.documentElement.style.setProperty('--width', '160px');
            }
            if(current_step == 1){
                document.documentElement.style.setProperty('--width', '340px');
            }
        }
    })
})

// Nextbutton.forEach(button => {
//     button.addEventListener('click',  (e) =>{
//         ac_step.forEach((div, index) =>{
//             console.log(button.textContent);
//             console.log(div);
//             console.log(ac_step.length)
//             if(index <= ac_step.length - 1 && div.classList == "ac_step ac-form-step1 active"){
//                 div.classList.remove("active");
//                 // div.classList.
//             }
//         })
//     })
    
// });

