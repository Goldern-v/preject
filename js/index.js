window.onload = function(){
    let nav_bt = document.getElementById("nav_bt");
    let head = document.getElementById("head");
    let nav_flag = true;
    nav_bt.addEventListener("click",function(){
        console.log(parseInt(head.style.top))
            if(nav_flag){
                head.style.top = -100 +"px";
                head.style.position = "absolute";
            nav_flag = false;
        }else if(parseInt(head.style.top) == -100){
            head.style.top = 0 +"px";
            head.style.position = "relative";
            nav_flag = true;
        }
    })

}