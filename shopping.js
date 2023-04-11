let input     =  document.getElementById('textinput');
let listContainer =  document.getElementById('list-container');

input.addEventListener('keydown', function(event) {
  if (event.key == 'Enter') {
    addItem();
  }
});

function addItem(){
  let newitem={
    itemName:input.value,
    ismarked:false
  }
   if (newitem.itemName.trim() != ''){
    let li = document.createElement("li");
    li.innerHTML = newitem.itemName;
    li.classList.add("liststyle");
    listContainer.appendChild(li);
    let span =document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    }
    input.value='';
}



listContainer.addEventListener("click",function(e){
  if(e.target.tagName === "LI"){
     e.target.classList.toggle("checked");
  }
 else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
  }
}, false); 






















