if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}
else{
    ready();
}

function ready(){

    var openPOscreen = document.getElementsByClassName('menu__btn');
    
    for(var i=0; i<openPOscreen.length;i++){
        var result = openPOscreen[i];
        result.addEventListener('click',POscreen);
    }

    var closePopout = document.getElementsByClassName('POscreen--close');
    
    for(var i=0; i<closePopout.length;i++){
        var result = closePopout[i];
        result.addEventListener('click',closePopOut);
    }

    var doneBtn = document.getElementsByClassName('POscreen__button');
    
    for(var i=0; i<doneBtn.length;i++){
        var result = doneBtn[i];
        result.addEventListener('click',closePopOut);
    }
}

// Trigger PO Screen
function POscreen(event){
    var buttonclicked = event.target.parentElement.parentElement;
    var POscreen = buttonclicked.getElementsByClassName('POscreen')[0];
    var top  = window.pageYOffset || document.documentElement.scrollTop;
    POscreen.style.top = top+"px";
 
    window.addEventListener('scroll',()=>{
        let scrolled = window.scrollY;
        POscreen.style.top = scrolled+"px";
    });

    POscreen.style.top = top+"px";
    POscreen.style.display = "flex";
}

// Close PO Screen
function closePopOut(event){
    var buttonclicked = event.target.parentElement.parentElement;
    buttonclicked.style.display = "none";
}
