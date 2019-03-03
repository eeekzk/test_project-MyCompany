menu.onclick = function myFunction() {
    var burger = document.getElementById('myHeadNav');
    if(burger.className === "head-nav"){
        burger.className += " open-menu";
    }
    else{
        burger.className = "head-nav";
    }
}