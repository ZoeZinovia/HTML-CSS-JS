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

$("#para1 span").css("text-decoration", "underline");
// $("*").css("color", "red");

// btn.addEventListener("click", myFunction);
// $(document).ready(function(){
//     alert("ready!");
// })
$("button").on("click", myFunction);
// $(document).on("mousemove", myFunction4);
// $("input").focus(function(){
//     $(this).css('background', "gray");
// });
// $("input").blur(function(){
//     $(this).css('background', "white");
// });
// $("#form").submit(function(e){
//     var name = $("input").val();
//     alert(name);
// });
// $("button").on("mousedown", myFunction2);
// $("button").on("mouseup", myFunction2);

function myFunction()
{
    img.src = pics[num];
    num = (num+1)%8;
}

function myFunction2()
{
    $("#para1").toggle();
}

function myFunction3(e)
{
    alert(e.currentTarget.innerHTML);
}

function myFunction4(e)
{
    $("#coords").html("coords: Y: " + e.clientY + ", X: " + e.clientX);
}

// $("#para1 span").html("<button>Hello</button>");
// $("#para1 span").append("<h6>Hello</h6>");

function myFunction5()
{
    $("#submit").fadeOut();
}