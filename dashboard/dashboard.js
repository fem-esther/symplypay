const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler")

menuBtn.addEventListener("click", () => {
    sideMenu.style.display = 'block'
})
closeBtn.addEventListener("click", () => {
    sideMenu.style.display = 'none'
})

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
})

const staffs = document.getElementById("staffs");
const staffList = document.querySelector("#staffList");
const messages = document.getElementById("messages");
const messagesList = document.querySelector("#messagesList");
const salary = document.getElementById("salary");
const salaryList = document.querySelector("#salaryList");

staffs.addEventListener("click", () => {
    staffList.classList.toggle("current");
    staffs.classList.toggle("active")
})

messages.addEventListener("click", () => {
    messagesList.classList.toggle("current");
    messages.classList.toggle("active")
})

salary.addEventListener("click", () => {
    salaryList.classList.toggle("current");
    salary.classList.toggle("active")
})

