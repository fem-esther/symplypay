const numberCategory = document.getElementById("number-category");
const numberBtn = document.getElementById("number-btn");
const nameCategory = document.getElementById("name-category");
const nameBtn = document.getElementById("name-btn");
const locationCategory = document.getElementById("location-category");
const locationBtn = document.getElementById("location-btn");
const selectCategory = document.getElementById("select-category");
const categoryBtn = document.getElementById("category-btn");


numberBtn.addEventListener("click", () => {
    nameCategory.classList.remove("d-none");
    numberCategory.classList.add("d-none");
})

nameBtn.addEventListener("click", () => {
    nameCategory.classList.add("d-none");
    locationCategory.classList.remove("d-none");
})

locationBtn.addEventListener("click", () => {
    locationCategory.classList.add("d-none");
    selectCategory.classList.remove("d-none");
})





let adminBtn = document.getElementById("admin-btn");
let staffBtn = document.getElementById("staff-btn")
// var a = document.createElement('a');

// // Create the text node for anchor element.
// var link = document.createTextNode("--");

// // Append the text node to anchor element.
// a.appendChild(link);

// // Set the title.
// a.title = "Admin";

// // Set the href property.
// a.href = "./test.html";

// Append the anchor element to the body.

let adminOptions = document.getElementById("admin-staff")
adminBtn.addEventListener("click", () => {
    if (adminOptions.value === "admin") {
        alert(adminOptions.value)
        adminBtn.classList.add("d-none")
        staffBtn.classList.add("d-none")
    } else if (adminOptions.value === "staff") {
        alert("working");
        adminBtn.classList.add("d-none")
        staffBtn.classList.remove("d-none")
    }
})