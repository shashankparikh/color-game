//var colors = [
  //  "rgb(255, 0, 0)",
    //"rgb(255, 255, 0)",
    //"rgb(0, 255, 0)",
    //"rgb(0, 255, 255)",
    //"rgb(0, 0, 255)",
    //"rgb(255, 0, 255)"
//];
var numberOfSquare = 6;
var colors = generateRandomColor(numberOfSquare);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay =document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");


easybtn.addEventListener("click",function(){
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    var numberOfSquare = 3;
    colors = generateRandomColor(numberOfSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++)
        if(colors[i])
        {
            squares[i].style.background = colors[i];
        }
    else{
        squares[i].style.background = "none";
    }
})


hardbtn.addEventListener("click",function(){
     easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    var numberOfSquare = 6;
       colors = generateRandomColor(numberOfSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++)
        if(colors[i])
        {
            squares[i].style.background = colors[i];
        }
    
})



resetButton.addEventListener("click",function(){
    //generate all new color
    colors = generateRandomColor(numberOfSquare);
    //pick new random color from array
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    //change color of square
    for(var i=0;i<squares.length; i++)
        {
            squares[i].style.background = colors[i];
        }
    h1.style.background ="#232323";
    messageDisplay.textContent = "";
    resetButton.textContent = "new Colors";
})

colorDisplay.textContent = pickedColor;
for(var i=0; i<squares.length; i++)
    {  //add color display
        squares[i].style.backgroundColor = colors[i];   
        //add color listener
        squares[i].addEventListener("click",function(){
            //grab color of picked square    
         var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if(clickedColor === pickedColor){
                 messageDisplay.textContent = "Good Selection";
                resetButton.textContent = "Play again";
                changeColor(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }
            else
                {
                    this.style.backgroundColor = "#232323";
                    messageDisplay.textContent = "Try again";
                }
        });
    }
function changeColor(color){
    //loop all the same color
    for(var i=0; i<squares.length; i++)
        {
            squares[i].style.backgroundColor = color;
        }
}

function pickColor()
{
    var random = Math.floor(Math.random()*colors.length);
    
    return colors[random];
}

function generateRandomColor(num){
    //make an array
    var arr=[];
    //add num random colors to array
    for(var i=0;i<num;i++)
        {
    //get num random colors and push to array
            arr.push(randomColor())
        }
    //return that arrray
    return arr;
}

function randomColor(){
    //pick  a "red" from 0-255
    var r = Math.floor(Math.random()*256);
     //pick  a "green" from 0-255
    var g = Math.floor(Math.random()*256);
     //pick  a "blue" from 0-255
    var b = Math.floor(Math.random()*256);
    
    return "rgb(" + r + ", " + g + ", " + b + ")"; 
}