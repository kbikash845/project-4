 function changedbg(color){
    document.body.style.backgroundColor=color
    let txt=document.getElementsByClassName("text");
    if(color=="black"){
        for(let elm of txt){
            elm.style.color="white"
        }
    }
 }


 