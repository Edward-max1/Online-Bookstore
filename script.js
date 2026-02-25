
const buttons = document.querySelectorAll(".add-to-cart");
const cartSidebar = document.getElementById("cart-sidebar");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");
const section = document.querySelector(".section");

const template = document.querySelector(".section div");

const books = [
    {
        id: 1,
        title: "Clean Code",
        author: "Robert C. Martin",
        price: 4500
    },
    {
        id: 2,
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt & David Thomas",
        price: 5200
    },
    {
        id: 3,
        title: "Introduction to Algorithms",
        author: "Thomas H. Cormen",
        price: 7800
    },
    {
        id: 4,
        title: "Design Patterns",
        author: "Erich Gamma",
        price: 6500
    },
    {
        id: 5,
        title: "Software Engineering",
        author: "Ian Sommerville",
        price: 6000
    },
    {
        id: 6,
        title: "AI: A Modern Approach",
        author: "Stuart Russell & Peter Norvig",
        price: 8200
    },
    {
        id: 7,
        title: "Computer Networks",
        author: "Andrew S. Tanenbaum",
        price: 5800
    },
    {
        id: 8,
        title: "Operating System Concepts",
        author: "Abraham Silberschatz et al.",
        price: 7000
    },
    {
        id: 9,
        title: "You Don’t Know JS",
        author: "Kyle Simpson",
        price: 3900
    },
    {
        id: 10,
        title: "Code Complete",
        author: "Steve McConnell",
        price: 4800
    }
];

let cart = [];

section.innerHTML = "";
books.forEach(book => {
    const bookDiv = template.cloneNode(true);
    bookDiv.querySelector(".book-title").textContent = book.title;
    bookDiv.querySelector(".book-author").textContent = book.author;
    bookDiv.querySelector(".book-price").textContent = book.price;
    bookDiv.querySelector(".add-to-cart").addEventListener("click", function(){
        cart.push({title: book.title, price: book.price});
        updateCart();
        cartSidebar.classList.add("show");
        section.classList.add("split");
    });
    section.appendChild(bookDiv);
});








function updateCart(){
    cartItems.innerHTML = "";
    let total = 0;
    let i = 0;

    cart.forEach(item => {
        const li  = document.createElement("li");
        i++;
        li.textContent = `${i}. ${item.title} - ksh ${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = total;
}




checkoutBtn.addEventListener("click", () => {
    // window.location.href = "checkout.php";
    alert("Thank you for your purchase!");
    cart = [];
    updateCart();
    cartSidebar.classList.remove("show");
});