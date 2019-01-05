menu.onclick = function myFunction() {
    var x = document.getElementById('myHeadNav');
    if(x.className === "head_nav"){
        x.className += " openMenu";
    }
    else{
        x.className = "head_nav";
    }
}