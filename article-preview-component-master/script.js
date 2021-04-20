document.getElementById("button").addEventListener('click',function(){
    document.querySelector(".share").style.display = 'flex';
    document.getElementById("button_close").style.display = 'inline-block';
    document.getElementById("button").style.display = 'none';

});


function init(){
    document.querySelector(".share").style.display = 'none';
    document.getElementById("button").style.display = 'inline-block';
    document.getElementById("button_close").style.display = 'none';
};

document.getElementById("button_close").addEventListener("click",init);
document.getElementById("button_close_one").addEventListener("click",init);
