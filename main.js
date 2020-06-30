//javascript document
var Delbtn = document.getElementsByClassName("close");
let button = document.querySelector("button");
let listitems = document.getElementsByClassName("listitems");
var ul = document.querySelectorAll("div")[2].firstElementChild;
var ul2 = document.querySelectorAll("div")[2].lastElementChild;
//  ding sound object created and used when item is checked (bonus)
var ding = new Audio();
ding.src = "sound.mp3";
// add function to add the text to the li's and respective checkbox and delete buttons to the li's
function AddText(e) {
    if (document.getElementById("input").value === "") {
        window.alert("enter somethning");
    } else {
        let input = document.getElementById("input").value;
        var ul = document.querySelectorAll("div")[2].firstElementChild; // targeting the ul of thirdt div element 
        var li = document.createElement("li");
        ul.appendChild(li);
        let text = document.createTextNode(input);
        addcheckbox(li);
        if (confirm("Are you sure you want to Add your text")) { // dialog box to confirm before adding
            li.appendChild(text);
        } else {
            return true;
        }
        addeletebtn(li);
        li.setAttribute("class", "listitems");
        clear();
    }
}

// to clear the textbox after every entry
function clear() {
    document.getElementById("input").value = "";
}

// adding checkbox to each created li item
function addcheckbox(li) {
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "checked");
    li.appendChild(checkbox);
    checkbox.onchange = checked;    //calling the function when checked
}

// adding dlete button and event  for deleting
function addeletebtn(li) {
    var deletebtn = document.createElement("button");
    var text = document.createTextNode("\u00D7");
    deletebtn.setAttribute("class", "close");
    deletebtn.appendChild(text);
    deletebtn.style.color = "red";
    li.appendChild(deletebtn);

    deletebtn.onclick = deletet;        /* registering event*/ 
}
// function that checks weather checkbox is checked or not
function checked(e) {
    if (e.target.checked) {
        ul2.appendChild(this.parentNode);
        this.parentNode.style.color = "darkgreen";
        this.parentNode.style.fontWeight = "900";
        this.parentNode.style.textTransform = "capitalize";
        this.parentNode.style.backgroundColor="lightgreen";
        this.parentNode.style.textDecoration = "line-through";
        this.parentNode.style.borderColor = "black";
        this.parentNode.style.border = "thick solid #0000FF";
        ding.play(); // sound play on checked list items


    } else {        // undo the stylings if  there is any
        this.parentNode.style.textDecoration = "none";
        this.parentNode.style.fontWeight = "120";
        this.parentNode.style.color = "black";
        this.parentNode.style.textTransform = "none";
        this.parentNode.style.backgroundColor="white";
        this.parentNode.style.border = "thick solid #000000";
        ul.appendChild(this.parentNode);              // changing li's position if unchecked 
    }


}

//deleting the parent element
function deletet(e) {
    if (confirm("Are you sure you want to delete")) {  // confirmation before deleting
        var section = this.parentElement;
        section.style.display = "none";
    } else {
        return true;
    }
}



// adding the text from the input
button.addEventListener("click", AddText);