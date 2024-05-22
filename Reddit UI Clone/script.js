function hidemiddle(){
    console.log('working');
    // const vall=document.getElementById('topics');
    const middle = document.getElementsByClassName('middlelevel')[0];
    const arrow = document.getElementById('arrow');
    const hidemiddle = document.querySelectorAll('.hidemiddle');
    if (middle.style.height==='500px'){
        middle.style.height='50px';
        arrow.style.transform='rotateZ(0deg)';
        hidemiddle.forEach((button)=>{
            button.style.opacity='0';
        })

    }
    else{
        middle.style.height='500px';
        arrow.style.transform='rotateZ(180deg)';
        hidemiddle.forEach((button)=>{
            button.style.opacity='1';
        })
    }
    
}

function hidebottom(){
    console.log('working');
    // const vall=document.getElementById('topics');
    const middle = document.getElementsByClassName('bottomlevel')[0];
    const arrow = document.getElementById('arrow2');
    const hidemiddle = document.querySelectorAll('.hidebottom');
    if (middle.style.height==='500px'){
        middle.style.height='50px';
        arrow.style.transform='rotateZ(0deg)';
        hidemiddle.forEach((button)=>{
            button.style.opacity='0';
        })

    }
    else{
        middle.style.height='500px';
        arrow.style.transform='rotateZ(180deg)';
        hidemiddle.forEach((button)=>{
            button.style.opacity='1';
        })
    }
    
}