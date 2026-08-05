function initSidebar(){

    const sections = document.querySelectorAll("section");

    const links = document.querySelectorAll(".sidebar nav a");

    window.addEventListener("scroll",()=>{

        let current = "";

        sections.forEach(section=>{

            const top = section.offsetTop - 120;

            if(scrollY >= top){

                current = section.getAttribute("id");

            }

        });

        links.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href") === "#" + current){

                link.classList.add("active");

            }

        });

    });

}
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.querySelector(".sidebar");
const content = document.querySelector(".content");

menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("hide");
    content.classList.toggle("full");
});
