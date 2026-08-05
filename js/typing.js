const roles = [
    "Software Engineer",
    "Cyber Security Enthusiast",
    "Web Developer",
    "Linux Enthusiast",
    "Networking Learner"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function startTyping(){

    const target = document.getElementById("typing");

    if(!target) return;

    function type(){

        const word = roles[roleIndex];

        if(!deleting){

            target.textContent = word.substring(0,charIndex++);

            if(charIndex > word.length){

                deleting = true;

                setTimeout(type,1200);

                return;

            }

        }else{

            target.textContent = word.substring(0,charIndex--);

            if(charIndex < 0){

                deleting = false;

                roleIndex++;

                if(roleIndex >= roles.length){

                    roleIndex = 0;

                }

            }

        }

        setTimeout(type,deleting ? 40 : 80);

    }

    type();

}