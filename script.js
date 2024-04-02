var dropdown = document.getElementsByClassName("sidebar-button-dropdown");
var i;
        
for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } 
            else {
                dropdownContent.style.display = "block";
            }
        });
    }

//sidebar collapse
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
            function openNav() {
                document.getElementById("mySidebar").style.width = "110px";
                document.getElementById("main").style.marginLeft = "110px";
            }

            //hide sidebar button
            const div = document.querySelector('.sidebar-open-button')

            div.addEventListener('click', () => {
                div.classList.add('hidden')
            })

            /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
            function closeNav() {
              document.getElementById("mySidebar").style.width = "0";
              document.getElementById("main").style.marginLeft = "0";
              div.classList.remove('hidden'); //reappear sidebar button
            }

            //theme switcher
            const switchTheme = () => {
                const rootElem = document.documentElement
                let dataTheme = rootElem.getAttribute('data-theme'),
                    newTheme

                newTheme = (dataTheme === 'light') ? 'dark' : 'light'

                rootElem.setAttribute('data-theme', newTheme)
            }

            document.querySelector('#theme-switcher').addEventListener('click', switchTheme)