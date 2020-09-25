var pics = [
    "pics/Lulu1.jpeg",
    "pics/Lulu2.jpeg",
    "pics/Lulu3.jpeg",
    "pics/Lulu4.jpeg",
    "pics/Lulu5.jpeg",
    "pics/Lulu6.jpeg",
    "pics/Lulu7.jpeg",
    "pics/Lulu8.jpeg"
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var num = 1;

btn.addEventListener("click", myFunction);

function myFunction()
{

    img.src = pics[num];
    num = (num+1)%8;
}