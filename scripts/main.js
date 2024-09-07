var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");
function add(){
var one= parseFloat(numOne.value) || 0;
var two= parseFloat(numTwo.value) || 0;

addSum.innerHTML=one+two;
}

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);




const caption1= document.getElementById("caption1");
const caption2= document.getElementById("caption2");
const caption3= document.getElementById("caption3");


caption1.addEventListener("click", sterge);
caption2.addEventListener("click", sterge);
caption3.addEventListener("click", sterge);

function sterge() { 
    var allImages= document.querySelectorAll("img");

    for(var i = 0 ; i < allImages.length; i++){
        allImages[i].className= "hide";
    }

  var imgId = this.getAttribute("data-img");
  var imagine = document.getElementById(imgId);
  imagine.classList.toggle("hide");
}


/*var element = document.getElementById("box1");
var button = document.getElementById("button1");

element.addEventListener("click",edit);
button.addEventListener("click",editExit);
function edit(){
    this.className = "edit";
}

function editExit(element){
    element.className = "";
}

*/
var checklist = document.getElementById("checklist");
var items= checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");
var buttons = checklist.querySelectorAll("button");


for (var i = 0 ; i < items.length ; i++ ){
   var  curentItem= items[i];
   var curentButton= buttons[i]
    curentItem.addEventListener("click", editItem);
    curentButton.addEventListener("click", editExit);
    curentItem.addEventListener("keypress", itemKeyPress);  
}

function editItem(event){
    var v = event.target;
    v.parentNode.classList.add("edit");
    
}
function itemKeyPress(event){
    if(event.key == "Enter"){
    editExit(event);
   }
}
function editExit(event){
    event.stopPropagation();
    var button= event.target;

    var parentLi = button.parentNode;
    parentLi.classList.remove("edit");
    
    inputValue = parentLi.querySelector("input").value;
    var spanValue = parentLi.querySelector("span");
    spanValue.textContent = inputValue;
    
}
