
// get time container
const items = [
    { Id: 1, Question: "Why can’t you hear a pterodactyl going to the bathroom ?", Reponse: "Because the “P” is silent" },
    { Id: 2, Question: "What do you call a well-balanced horse?", Reponse: "Stable" },
    { Id: 3, Question: "What do elves learn in school ?", Reponse: "The elf-abet" },
    { Id: 4, Question: "What do you call a fish without an eye?", Reponse: "Fsh" },
    { Id: 5, Question: "Who wrote Romeo and Juliet ?", Reponse: "William Shakespeare" },
    { Id: 6, Question: "Which planet is known as the Red Planet ?", Reponse: "Mars" },
    { Id: 7, Question: "What does HTML stand for ?", Reponse: "HypperText Markup Language " },
    { Id: 8, Question: "What is the keyword to declare a constant variable in JavaScript ?", Reponse: "Const" },
    { Id: 9, Question: "What does API stand for ?", Reponse: "Application Programming Interface" },
    { Id: 10, Question: "Which metal is liquid at room temperature ?", Reponse: "Mercury" },
    { Id: 11, Question: "What is the output of typeof null?", Reponse: "Object" },
    { Id: 12, Question: "Which method converts a JSON string into a JavaScript object ?", Reponse: "JSON.parse()" },
    { Id: 13, Question: "Which method removes the last element from an array ?", Reponse: "pop()" },
    { Id: 14, Question: "Which method add the element from an array ?", Reponse: "" },
    { Id: 14, Question: "What does DOM stand for ?", Reponse: "Javascript Object Model" },
    { Id: 15, Question: "How do you make text bold in HTML?", Reponse: "<strong> or <b>" },
    { Id: 17, Question: "What is the name of the programming concept where a function calls itself ?", Reponse: "Recursion" },
    { Id: 18, Question: "What is the name of the language used to style web pages ?", Reponse: "CSS (Cascading Style Sheets)" },
    { Id: 19, Question: "What operator is used for strict equality comparison in JavaScript?", Reponse: "===" },
    { Id: 20, Question: "What is JavaScript used for?", Reponse: "To make web pages interactive." },
    { Id: 21, Question: "Which tag is used to insert an image in HTML?", Reponse: "<img>" }
]
id = 0;
TimeC = 15;
SetInterval = null;
if (setInterval !== null) {
    const setInter =  setInterval(() => {
        let ItemsFound = items.find( item => item.Id === id);
        id++
        if (ItemsFound){
            let ele = document.getElementById('question').innerHTML = ItemsFound.Question;
            console.log(ele);
        };
        setTimeout(()=>{
             document.getElementById('answer').innerHTML = ItemsFound.Reponse;
        }, 3000)
        document.getElementById('answer').innerHTML = "";
    }, 5000)
}
//     setInterval(() =>{
//         TimeC--;
//         if(TimeC <= "5"){
//              document.querySelector(".time").innerHTML =`${String(TimeC).padStart(2, "0")}`;
//              if (TimeC === 0){
//         TimeC = 15;
//         }
//     }
//     }, 1000)
    
// }


// --------------------- Function------------------------
// const TimeC = document.querySelector('.time');
// const ShowText = document.querySelector('#question');
// let Time = 10  // initiate the time
//  document.getElementById('question').innerHTML = items.Question;
// let id = 0;
// setInterval(() => {
//     Time--
//     if(Time <= 10){
//     document.querySelector('.time').innerHTML = `${String(Time).padStart(2, "0")}` ;
//     if(Time === 0){
//         Time = 15;
//     };
// }
// }, 1000)
// setInterval(() => {
//     id++
//     const ItemsFound = items.find(item => item.Id === id)
//     if (ItemsFound) {
//         document.getElementById('question').innerHTML = ItemsFound.Question;
//         document.getElementById('answer').innerHTML = ""
//         setTimeout(() => {
//             document.getElementById('answer').innerHTML = ItemsFound.Reponse;
//         }, 10000)
//         if(id === 21){
//             id= 1;
//         }

//     }
// }, 15000);