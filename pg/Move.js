
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let HSM = document.querySelector('.HSM');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 3 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value  + 'px';
    boat.style.top = value  + 'px';
    boat.style.left = value *3 + 'px';
    HSM.style.fontSize = value + 'px';

    if(scrollY >= 157){
        HSM.style.fontSize = 157 + 'px';
        HSM.style.position = 'fixed';
        if(scrollY >= 344){
            HSM.style.display = 'none';
        }else{
            HSM.style.display = 'block';
        }
        if(scrollY >= 228){
            document.querySelector('.Move').style.background = 'linear-gradient(#7a1bff, #6f6381)'
        }else{
            document.querySelector('.Move').style.background = 'linear-gradient(#1c122b, #dddddd)'
        }
    }


}
