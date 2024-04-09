
document.querySelectorAll('span').forEach(item => item.innerHTML = `<img src="assets/images/icon-plus.svg" alt="icon-plus" />`);

document.querySelectorAll('details').forEach((detail) => detail.addEventListener('toggle', (event) => {
    event.preventDefault();
    if(detail.open){
        detail.querySelector('span').innerHTML = `<img src="assets/images/icon-minus.svg" alt="icon-minus" />`
    }else{
        detail.querySelector('span').innerHTML = `<img src="assets/images/icon-plus.svg" alt="icon-plus" />`
    }
} ))
        