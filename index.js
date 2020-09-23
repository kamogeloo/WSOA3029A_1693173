function Responsivemenu(){
    let menubar = document.getElementById("menulist");
    if(menubar.className === "navi"){
        menubar.className += "responsive";
    }
    else{
        menubar.className = "navi";
    }
    }