// defining two id elements

const addinputTask=document.getElementById("taskInput");
const addTaskButton=document.getElementById("tasks");

// define func Addtask
function Addtask(){
    if(addinputTask.value===''){
        alert("please enter task");
    }else{
        let li=document.createElement("li"); //create list
        li.innerHTML=addinputTask.value; //addingvalue
        addTaskButton.appendChild(li);  //displayinglist

        const span=document.createElement("span"); //createadeleteelement
        span.innerHTML="\u00d7"; //thevalue
        li.appendChild(span); //display

    }
    addinputTask.value="";
    saveData();
}
container.addEventListener("click", function(a){
    if(a.target.tagName==="LI"){       //if target is list it will check
        a.target.classList.toggle("box"); 
        saveData();
    }
        else if(a.target.tagName==="SPAN"){
                a.target.parentNode.remove();
                saveData(); //on clicking span it will remove
        }
},false);

function saveData(){
    localStorage.setItem("data", document.getElementById('tasks').innerHTML)
}
function showTasks() {
    document.getElementById('tasks').innerHTML = localStorage.getItem("data");
    if (!localStorage.getItem("data")) {
        document.getElementById('tasks').innerHTML = "";
    }
}





document.querySelector('button').addEventListener('click', Addtask);

// Optionally, add event listener to allow pressing Enter key to add tasks
document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        Addtask();
    }
});
document.addEventListener('DOMContentLoaded', showTasks);
