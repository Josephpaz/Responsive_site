function menu_bar(){
    var x = document.getElementById("nav_bar");
    var y = document.getElementById("menu_burguer");
    
    if(x.style.display === "block"){
        x.style.display = "none";
    }else{
        x.style.display = "block";
        y.style.display = "none";
    }
}

