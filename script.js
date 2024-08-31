
var cardBody = document.createElement('div');
cardBody.className = 'card-body';

var title = document.createElement('h1');
title.id = 'title';
title.textContent = '0';


var cardBtn = document.createElement('div');
cardBtn.className = 'card-btn';


var decrementButton = document.createElement('button');
decrementButton.id = 'decrement';
decrementButton.textContent = 'Decrement';


var resetButton = document.createElement('button');
resetButton.id = 'reset';
resetButton.textContent = 'Reset';


var incrementButton = document.createElement('button');
incrementButton.id = 'increment';
incrementButton.textContent = 'Increment';


cardBtn.appendChild(decrementButton);
cardBtn.appendChild(resetButton);
cardBtn.appendChild(incrementButton);


cardBody.appendChild(title);
cardBody.appendChild(cardBtn);


document.body.appendChild(cardBody);

const maintitle = document.querySelector('#title');
 let currentValue = 0;
 const dec = document.querySelector('#decrement');
 const res = document.querySelector('#reset');
 const inc = document.querySelector('#increment');


 inc.addEventListener("click",()=>
 {
  currentValue++;
     maintitle.textContent = currentValue;
 } )
    
 dec.addEventListener("click",()=>
     {
       currentValue--;
         maintitle.textContent = currentValue;
   } )
        
     res.addEventListener("click",()=>
        {
          currentValue=0;
            maintitle.textContent = currentValue;
         } )
            
      

