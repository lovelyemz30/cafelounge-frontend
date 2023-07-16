const menulist = document.querySelector(".menulist");

async function loadMenuList() {
    const response = await fetch("/mock/menu.json");
    /** @type {Menu[]} */
    const data = await response.json();

    data.forEach(val => {
        menulist.innerHTML += /*html*/`
        <div class="menu-card">
            <div class="flex justify-between">
                <div class="w-6"></div>
                <div class="uppercase">${val.category}</div>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path class="fill-white hover:fill-orange-500"
                        d="M12 9.005a4 4 0 1 1 0 8 4 4 0 0 1 0-8ZM12 5.5c4.613 0 8.596 3.15 9.701 7.564a.75.75 0 1 1-1.455.365 8.503 8.503 0 0 0-16.493.004.75.75 0 0 1-1.455-.363A10.003 10.003 0 0 1 12 5.5Z"
                        fill="#212121" />
                </svg>
            </div>

            <img src="${val.image}" >
            <div class="flex flex-col items-center">
                <span>${val.name}</span>
                <span>Php ${val.price}</span>
                <span>Status: ${val.status}</span>
            </div>
            <div class="w-full flex justify-between px-5">
            <a href="#" class="group">
                <svg  width="24" height="24" fill="none" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path class="fill-white group-hover:fill-orange-500"
                        d="M13.94 5 19 10.06 9.062 20a2.25 2.25 0 0 1-.999.58l-5.116 1.395a.75.75 0 0 1-.92-.921l1.395-5.116a2.25 2.25 0 0 1 .58-.999L13.938 5Zm7.09-2.03a3.578 3.578 0 0 1 0 5.06l-.97.97L15 3.94l.97-.97a3.578 3.578 0 0 1 5.06 0Z"
                        fill="#212121" />
                </svg>
            </a>
            <a href="#" class="group">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path class="fill-white group-hover:fill-orange-500"
                        d="M21.5 6a1 1 0 0 1-.883.993L20.5 7h-.845l-1.231 12.52A2.75 2.75 0 0 1 15.687 22H8.313a2.75 2.75 0 0 1-2.737-2.48L4.345 7H3.5a1 1 0 0 1 0-2h5a3.5 3.5 0 1 1 7 0h5a1 1 0 0 1 1 1Zm-7.25 3.25a.75.75 0 0 0-.743.648L13.5 10v7l.007.102a.75.75 0 0 0 1.486 0L15 17v-7l-.007-.102a.75.75 0 0 0-.743-.648Zm-4.5 0a.75.75 0 0 0-.743.648L9 10v7l.007.102a.75.75 0 0 0 1.486 0L10.5 17v-7l-.007-.102a.75.75 0 0 0-.743-.648ZM12 3.5A1.5 1.5 0 0 0 10.5 5h3A1.5 1.5 0 0 0 12 3.5Z"
                        fill="#212121" />
                </svg>
            </a>
            </div>
        </div>
        `;
    });
}

loadMenuList();

const formOverlay = document.querySelector(".form-overlay");
const addmenuForm = document.querySelector(".addmenu-form");
const addmenuToggler = document.querySelector(".addmenu-toggler");

function showAddMenuForm() {
    formOverlay.classList.remove("hidden");
    addmenuForm.classList.replace("hidden", "flex");
}

function hideAddMenuForm() {
    formOverlay.classList.add("hidden");
    addmenuForm.classList.replace("flex", "hidden");
}

addmenuToggler.addEventListener("click", _ => showAddMenuForm());
formOverlay.addEventListener("click", _ => hideAddMenuForm());

document.addEventListener("click", evt => {
    const target = evt.target;

    if (target.matches("[data-toggle]")) {
        const toggleId = target.getAttribute("data-toggle");
        const targetToggle = document.getElementById(toggleId);
        
        if (targetToggle.classList.contains("hidden"))
            targetToggle.classList.replace("hidden", "flex");
        else
            targetToggle.classList.replace("flex", "hidden");
    }
})