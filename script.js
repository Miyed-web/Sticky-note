let createBox = document.getElementsByClassName("createBox")[0];
let notes = document.getElementsByClassName("notes")[0];
let userInput = document.getElementById("userInput");
let create = document.getElementById("create");
let i = 0;
 
 
 create.addEventListener("click",
 ()=>{
   createBox.style.display = "block"
 })
 
 
 createBox.addEventListener("keypress",(e )=>{
   if (e.key === "Enter") {
     divStyle(userInput.value);
     userInput.value = "";
     createBox.style.display = "none"
   }
 })
 
 function divStyle(text){
   let div = document.createElement("div")
   div.className = "note";
   notes.appendChild(div);
   div.innerHTML = `<div class = "details"> ` +'<span>' + text +'</span>'+`</div>`;
   // div.setAttribute("style" , "background : " + randomColor()+ "")
   div.style.backgroundColor = randomColor()
   div.addEventListener("dblclick",
   ()=>{
    div.remove() 
 })
 }
 
 
 function randomColor(){
   let randomClr= [ "#798e46","#0245fc","#d90023", "#e6a901","#02d4a3","#a40085"]
if (i > randomClr.length) {
  i = 0;
} return randomClr[i++]

 }
 
 
 
 let docTitle = document.title;
 window.addEventListener("blur",
 ()=>{
  document.title = "come 😟" 
 })
 window.addEventListener("focus",
 ()=>{
  document.title = docTitle
 })