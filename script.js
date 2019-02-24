menu.onclick = function myFunction() {
    var burger = document.getElementById('myHeadNav');
    if(burger.className === "head_nav"){
        burger.className += " openMenu";
    }
    else{
        burger.className = "head_nav";
    }
}