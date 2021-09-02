var points  = document.querySelector("#games");
var P1      = document.querySelector("#playerone");
var P2      = document.querySelector("#playertwo");
var reset   = document.querySelector("#reset");
var P1Score = document.querySelector("#P1");
var P2Score = document.querySelector("#P2");


P1.addEventListener('click' , () => {
    P1Score.innerText = parseInt(P1Score.innerText) + 1;
    if(parseInt(P1Score.innerText) === parseInt(points.value)){
        P1.disabled = true;
        P1.style.backgroundColor = "#C77D7D";
        P2.disabled = true;
        P2.style.backgroundColor = "#5C618C";
        P2Score.style.color = "#E20000";
        P1Score.style.color = "#4CB90C"
    }
})

P2.addEventListener('click' , () => {
    P2Score.innerText = parseInt(P2Score.innerText) + 1;
    if(parseInt(P2Score.innerText) === parseInt(points.value)){
        P1.disabled = true;
        P1.style.backgroundColor = "#C77D7D";
        P2.disabled = true;
        P2.style.backgroundColor = "#5C618C";

        P1Score.style.color = "#E20000";
        P2Score.style.color = "#4CB90C"

    }
})




reset.addEventListener('click' , ()=> {
    P1.disabled = false;
    P1.style.backgroundColor = '#E54659';

    P2.disabled = false;
    P2.style.backgroundColor = '#6671DD';

    P1Score.innerText = 0;
    P2Score.innerText =0;

    P1Score.style.color = '#000';
    P2Score.style.color = '#000';


})
