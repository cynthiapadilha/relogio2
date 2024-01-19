const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

function time() {
    
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

   if(hr < 10) hr =  '0' + hr;
    if(min < 10) min =  '0' + min;
    if(seg < 10) seg =  '0' + seg;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;

    if (hr >=0 && hr < 12){
        document.body.style.background = 'linear-gradient(120deg, #F2A74B, #89C2D9,#D95204)';
    }else if (hr >= 12 && hr < 18){
        document.body.style.background = 'linear-gradient(120deg, #F2C36B,#D99559,#F2CF1D)';
    }else{
        document.body.style.background = 'linear-gradient(120deg,#0A2C59, #011126,#022859)';
    }
   
}
const relogio = setInterval(time, 1000);

