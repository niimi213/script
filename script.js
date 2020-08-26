let time = 0
const button = document.querySelector('button');
const number = document.querySelector('div');
button.onclick = ()=>{
    time +=1;
    number.textContent = time;
}