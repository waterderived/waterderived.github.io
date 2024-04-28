
/* var dropdown = document.getElementsByClassName("sidebar-button-dropdown");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        }
        else {
            dropdownContent.style.display = "block";
        }
    });
}*/

//sidebar collapse
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
/*function openNav() {
    document.getElementById("mySidebar").style.width = "110px";
    document.getElementById("main").style.marginLeft = "0";
}

//hide sidebar button
const div = document.querySelector('.sidebar-open-button')

div.addEventListener('click', () => {
    div.classList.add('hidden');
})*/


/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
/*function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    div.classList.remove('hidden'); //reappear sidebar button
}*/

function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
    if (localStorageTheme !== null) {
        return localStorageTheme;
    }

    if (systemSettingDark.matches) {
        return "dark";
    }

    return "light";
}
// update theme setting on html tag
function updateThemeOnHtmlEl({ theme }) {
    document.querySelector("html").setAttribute("data-theme", theme);
}

const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
let dataTheme = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

// update html tag
updateThemeOnHtmlEl({ theme: dataTheme });

//theme switcher
const switchTheme = () => {
    const rootElem = document.documentElement
    let dataTheme = rootElem.getAttribute('data-theme'),
        newTheme

    newTheme = (dataTheme === 'light') ? 'dark' : 'light'

    rootElem.setAttribute('data-theme', newTheme);

    // update storage
    localStorage.setItem("theme", newTheme);

    //update dataTheme in memory
    dataTheme = newTheme
}

// orig switcher
document.querySelector('#theme-switcher').addEventListener('click', switchTheme)

//simple typing effect
var i = 0;
var txt = 'i there, I\'m Nicole.';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typeSimple").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}


// collapsible callout
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var collcontent = this.nextElementSibling;
        if (collcontent.style.maxHeight) {
            collcontent.style.maxHeight = null;
        } else {
            collcontent.style.maxHeight = collcontent.scrollHeight + "px";
        }
    });
}

