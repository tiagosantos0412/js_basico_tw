var myParagraph = document.querySelector('#paragraph'),
    myInput = document.querySelector('#nome');

// myInput.addEventListener('keyup',
//     (event)=>{
//         myParagraph.textContent = event.target.value;
//     });

var myTimeOut;

myInput.addEventListener('keyup', (event)=>{
    clearTimeout(myTimeOut);
    myTimeOut = setTimeout(()=>{
        myParagraph.textContent = event.target.value;
    }, 1000);
})