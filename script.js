const items = document.querySelectorAll(".accordion-item");

items.forEach(item => {

const header = item.querySelector(".accordion-header");

header.addEventListener("click", () => {

const isOpen = item.classList.contains("active");

items.forEach(i => i.classList.remove("active"));

if(!isOpen){
item.classList.add("active");
}

});

});
