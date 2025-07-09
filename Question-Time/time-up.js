
let Time = 15; // initiate the time
// get time container
const items = [
    { Id: 1, Question: "", Reponse: "" },
    { Id: 2, Question: "", Reponse: "" },
    { Id: 3, Question: "", Reponse: "" },
    { Id: 4, Question: "", Reponse: "" },
    { Id: 5, Question: "", Reponse: "" },
    { Id: 6, Question: "", Reponse: "" },
    { Id: 7, Question: "", Reponse: "" },
    { Id: 8, Question: "", Reponse: "" },
    { Id: 9, Question: "", Reponse: "" },
    { Id: 10, Question: "", Reponse: "" },
    { Id: 11, Question: "", Reponse: "" },
    { Id: 12, Question: "", Reponse: "" },
    { Id: 13, Question: "", Reponse: "" },
    { Id: 14, Question: "", Reponse: "" },
    { Id: 14, Question: "", Reponse: "" },
    { Id: 15, Question: "", Reponse: "" },
    { Id: 17, Question: "", Reponse: "" },
    { Id: 18, Question: "", Reponse: "" },
    { Id: 19, Question: "", Reponse: "" },
    { Id: 20, Question: "", Reponse: "" },
    { Id: 21, Question: "", Reponse: "" }
]
const TimeC = document.querySelector('.time');
setInterval(() => {
    Time--
    TimeC.textContent = `${String(Time).padStart(2, "0")}`;
    document.querySelector('#question').style.color = "black";
    if (Time <= 5 && Time >= 0) {
        document.querySelector('#question').style.color = "red";
    }

}, 1000);
console.log(Time)