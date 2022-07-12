
//for first dice
function play()
{
var randomNumber1=Math.floor(Math.random()*6)+1;//1-6
var randst="images\\dice" + randomNumber1+".png";// dice1.png--dice6.png
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randst);
//for second dice
var randomNumber2=Math.floor(Math.random()*6)+1;//1-6
var randst2="images\\dice" + randomNumber2+".png";// dice1.png--dice6.png
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randst2);
//for winner
if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML=" 🚩Player 1 Wins!🥳";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML=" 🚩Player 2 Wins! 🥳";
}
else
{
  document.querySelector("h1").innerHTML="Draw!😕";
}
}
