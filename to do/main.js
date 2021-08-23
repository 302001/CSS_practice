var list=document.getElementById('todo-list');
var btn=document.getElementById('add-item');
var inputvalue=document.getElementById('input');
var update=document.getElementById('update');
var remove=document.getElementById('remove');
var currentvalue='';

inputvalue.addEventListener('input',function(e)
{
    currentvalue=e.target.value
})
inputvalue.addEventListener('keydown',function(e){
    if(e.keyCode===13)
    {
        addlistitems();
    }
})
function create()
{
    var newitem=document.createElement('li');
    var textnode=document.createTextNode(currentvalue);
    newitem.append(textnode);
    newitem.id="item"+(list.childElementCount+1);
    
    return newitem;
    
}
function addlistitems()
{
    if(currentvalue!==''&&currentvalue!==undefined&&currentvalue!==null)
    {
       var newitem =create();
    list.appendChild(newitem);
    

    inputvalue.value='';
    currentvalue='';
    }
    else{
    
    alert("enter any text to add")}
}
btn.addEventListener('click',addlistitems);

update.addEventListener('click',function()
{
var first=list.firstElementChild;
var newitem=create();
list.replaceChild(newitem,first)
inputvalue.value='';
    currentvalue='';
})
remove.addEventListener('click',function()
{
    var first=list.firstElementChild;
    list.removeChild(first);
    inputvalue.value='';
    currentvalue='';
})


var i;
for (i = 0; i < list.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
list[i].appendChild(span);
}
