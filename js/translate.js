const lang=document.getElementById("language");

const text={

id:{

about:"About Me",

project:"Featured Projects",

skill:"Skills",

certificate:"Certificates",

contact:"Contact",

status:"Open to Internship",

hero:"Mahasiswa D3 Teknik Komputer yang memiliki ketertarikan pada Software Engineering, Cyber Security, Networking, dan Web Development."

},

en:{

about:"About Me",

project:"Featured Projects",

skill:"Skills",

certificate:"Certificates",

contact:"Contact",

status:"Open for Internship",

hero:"Computer Engineering student passionate about Software Engineering, Cyber Security, Networking and Web Development."

}

}

lang.addEventListener("change",()=>{

const t=text[lang.value];

document.querySelector("#about h2").innerHTML=t.about;

document.querySelector("#projects h2").innerHTML=t.project;

document.querySelector("#skills h2").innerHTML=t.skill;

document.querySelector("#certificate h2").innerHTML=t.certificate;

document.querySelector("#contact h2").innerHTML=t.contact;

document.querySelector(".hero-left p:last-of-type").innerHTML=t.hero;

document.querySelector(".info-box:last-child p").innerHTML=t.status;

});