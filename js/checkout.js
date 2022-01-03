document.querySelector("form").addEventListener("submit", getDetails)

var addDetails = JSON.parse(localStorage.getItem("Address Details")) || [];

function getDetails(){
    var name = document.querySelector("#name").value;
    var mail = document.querySelector("#mail").value;
    var mob = document.querySelector("#mob").value;
    var add = document.querySelector("#add").value;
    var state = document.querySelector("#state").value;
    
    var obj = {
        Name : name,
        MailID : mail,
        Mobile : mob,
        Address : add,
        State : state,
    };

    addDetails.push(obj);
    localStorage.setItem("Address Details", JSON.stringify(addDetails));
}