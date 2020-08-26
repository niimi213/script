const elements = document.querySelectorAll('td');
let i = 0;
for(let i = 0; i<elements.length; i++){
    if ((i+1)%9==0){
        elements[i].textContent = (Math.floor(i/ 9)+1)*9;
    }
    else{
        elements[i].textContent = (Math.floor(i/ 9)+1)*((i+1)%9);
    }
    elements[i].style.textAlign='center';

}