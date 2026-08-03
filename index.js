let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addProduct() {

    let button = event.target;
    let card = button.closest(".cloth-card");

let product = {
    image: card.querySelector("img").src,
    ProductName: card.querySelector("h5").innerText,
    description: card.querySelector("span").innerText,
    price: card.querySelector("h4").innerText.replace("₹", "")
};
    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

}

let menuItems = document.querySelectorAll("li.menu-item");
let box = document.querySelector(".content");
let currentMenu = "";

menuItems.forEach((element) => {
    element.addEventListener("click", () => {
        let clickedMenu = element.innerText;

        if (currentMenu === clickedMenu) {
            box.classList.remove("show");
            currentMenu = "";
        } else if (!box.classList.contains("show")) {
            displayData(clickedMenu);
            box.classList.add("show");
            currentMenu = clickedMenu;
        } else {
            displayData(clickedMenu);
            currentMenu = clickedMenu;
        }
    });
});

function displayData(product) {
    box.innerHTML = "";

    const data = {
        "Shop": ["Men's Wear", "Women's Wear", "Kids"],
        "Categories": ["T-Shirts", "Jeans", "Shoes", "Accessories"]
    };

    let items = data[product] || [];
    items.forEach(item => {
        let p = document.createElement("p");
        p.innerText = "→ " + item;
        box.append(p);
    });
}