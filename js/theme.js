const toggle = document.getElementById("theme-toggle");

if(localStorage.getItem("theme")=="light"){

    document.body.classList.add("light");

    toggle.innerHTML='<i class="fa-solid fa-sun"></i>';

}

toggle.onclick=()=>{

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        localStorage.setItem("theme","light");

        toggle.innerHTML='<i class="fa-solid fa-sun"></i>';

    }else{

        localStorage.setItem("theme","dark");

        toggle.innerHTML='<i class="fa-solid fa-moon"></i>';

    }

}