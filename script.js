
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

    newTheme = (dataTheme === 'dark') ? 'light' : 'dark'

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

//change width of dropdown button on homepage

/*function changeWidthMed() {
    content1.style.width = (parseInt(btn1.style.width, 10) + 16) + 'px';
}

var content1 = document.getElementById("identity1");
var btn1 = document.getElementById("medstudent");

document.getElementById("medstudent").addEventListener('click', changeWidthMed);*/

$('select').change(function(){
    var $opt = $(this).find("option:selected");
    var $span = $('<span>').addClass('tester').text($opt.text());

    $span.css({
        'font-family' : $opt.css('font-family'),
        'font-style' : $opt.css('font-style'),
        'font-weight' : $opt.css('font-weight'),
        'font-size' : $opt.css('font-size')
    });

    $('body').append($span);
    // The 30px is for select open icon - it may vary a little per-browser
    $(this).width($span.width()+30);
    $span.remove();
});

$('select').change();
