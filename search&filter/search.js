// all of Items
const items = [
    {name: "Bag", url: "./img/bag1.jpg", price : "42 $" },
    {name: "Computer 2", url: "./img/computer2.jpg", price : "984 $" },
    {name: "Watch 2", url: "./img/watch2.jpg", price : "69 $" },
    {name: "Dress 1", url: "./img/dress1.jpg", price : "90 $" },
    {name: "Glasses 3", url: "./img/Glasses3.jpg", price : "20 $" },
    {name: "Bag 2", url: "./img/bag2.jpg", price : "32 $" },
    {name: "Computer 1", url: "./img/computer1.jpg", price : "884 $" },
    {name: "Watch 1", url: "./img/watch1.jpg", price : "90 $" },
    {name: "Dress 2", url: "./img/dress2.jpg", price : "70 $" },
    {name: "Glasses 1", url: "./img/glasses1.jpg", price : "50 $" },
    {name: "Bag 3", url: "./img/bag3.jpg", price : "32 $" },
    {name: "Computer 1", url: "./img/computer1.jpg", price : "884 $" },
    {name: "Watch 5", url: "./img/watch5.jpg", price : "90 $" },
    {name: "Dress 3", url: "./img/dress3.jpg", price : "70 $" },
    {name: "Glasses 4", url: "./img/glasses4.jpg", price : "50 $" }
]
// display the items on the page
const root =document.querySelector('.root');
function ItemesDisplay(showitems){
    root.innerHTML = ""; // always reset the container it was a mistake;
    showitems.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('group', 'w-[150px]', 'py-3', 'h-[280px]');
    div.innerHTML = `<div class="acimg h-[150px] overflow-hidden ">
                                    <img src="${item.url}" alt="" class="w-full h-full rounded-2xl">
                                </div>
                                <div class="ac-text pl-3 pt-3">
                                    <h3>${item.name}</h3>
                                    <p>${item.price}</p>
                                </div>
                                <div class="ac-button pl-3 text-center hidden group-hover:block">
                                    <button type="button"
                                        class="border text-white text-[20px] font-[Open-Sans] w-20 rounded-full bg-blue-900 transition duration-400 hover:scale-[1.1]">
                                        Add </button>
                                </div> `
        root.appendChild(div);
    
})
}
ItemesDisplay(items)
// use query selector to select all the input and add eventlistener to know if the input is active or not

const inputs = document.querySelectorAll('input');
const searchInput = document.getElementById("search")

inputs.forEach(input => {
    input.addEventListener('input', ()=>{
        const search = searchInput.value.trim().toLowerCase()
        const filter = [...inputs]
        .filter(Element => Element.checked)
        .map(ele => ele.value.toLowerCase())

        if(search){
            filter.push(search);
        }
        if(filter.length === 0){
            ItemesDisplay(items)
        }else{
            const ItemsFound = items.filter(ele =>
                filter.some(input =>
                    ele.name.toLowerCase().includes(input)
                )
            );
            ItemesDisplay(ItemsFound)
        }
    });
});
