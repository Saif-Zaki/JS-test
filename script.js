function checkIfAllowed(){
    let age = Number(document.getElementById("test").value)
    let color = document.getElementById("colorInput").value
    if(age >= 16){
        document.getElementById("result").innerHTML = "allowed";
    }
    else {
        document.getElementById("result").innerHTML = "not allowed";
    }
}