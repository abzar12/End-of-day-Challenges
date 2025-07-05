// all of Items
const items = [
    {name: "Bag 1", url: "./img/bag1.jpg", price : "42 $" },
    {name: "Computer 2", url: "./img/computer2.jpg", price : "984 $" },
    {name: "Watch 2", url: "./img/watch2.jpg", price : "69 $" },
    {name: "Dress 1", url: "./img/dress1.jpg", price : "90 $" },
    {name: "Glasses 3", url: "./img/bag3.jpg", price : "20 $" },
    {name: "Bag 2", url: "./img/bag2.jpg", price : "32 $" },
    {name: "Computer 1", url: "./img/computer1.jpg", price : "884 $" },
    {name: "Watch 1", url: "./img/watch1.jpg", price : "90 $" },
    {name: "Dress 2", url: "./img/dress2.jpg", price : "70 $" },
    {name: "Glasses 1", url: "./img/bag1.jpg", price : "50 $" }
]
// display on the page
const root =document.querySelector('.root');
items.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('group', 'w-[150px]', 'py-3');
    div.innerHTML = `<div class="acimg h-[150px] overflow-hidden">
                                    <img src="${item.url}" alt="" class="w-full h-full rounded-2xl">
                                </div>
                                <div class="ac-text pl-3 pt-3">
                                    <h3>bag red</h3>
                                    <p>34 $</p>
                                </div>
                                <div class="ac-button pl-3 text-center hidden group-hover:block">
                                    <button type="button"
                                        class="border text-white text-[20px] font-[Open-Sans] w-20 rounded-full bg-blue-900 transition duration-400 hover:scale-[1.1]">
                                        Add </button>
                                </div> `
        root.appendChild(div);
    
})
// const div = document.createElement('div');
// div.innerHTML = (`<div class="grid grid-cols-4">
//                             <div class=" group w-[150px] py-3">
//                                 <div class="acimg h-[150px] overflow-hidden">
//                                     <img src="./img/bag1.jpg" alt="" class="w-full h-full rounded-2xl">
//                                 </div>
//                                 <div class="ac-text pl-3 pt-3">
//                                     <h3>bag red</h3>
//                                     <p>34 $</p>
//                                 </div>
//                                 <div class="ac-button pl-3 text-center hidden group-hover:block">
//                                     <button type="button"
//                                         class="border text-white text-[20px] font-[Open-Sans] w-20 rounded-full bg-blue-900 transition duration-400 hover:scale-[1.1]">
//                                         Add </button>
//                                 </div>
//                             </div>
//                         </div> `);
//                         root.appendChild(div);
//                         console.log(root);