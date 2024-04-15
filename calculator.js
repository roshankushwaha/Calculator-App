const userInput=document.getElementById("userinput");
var expres="";
function press(n)
{
    expres+=n;
    userInput.value=expres;
}
function equal()
{
    userInput.value=eval(expres);
    expres="";
}
function erase()
{
    expres="";
    userInput.value=expres;
}