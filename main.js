

var plus = document.getElementsByClassName("plus");
var moins = document.getElementsByClassName("moins");
var quantity = document.getElementsByClassName("quantity");




  


// fonction incrementation
var count = 0;
document.getElementsByClassName("plus").addEventListener("click", function() {
  count++;
  document.getElementsByClassName("quantity").innerHTML = count;
  if(count<0){
    quantity.innerHTML = 0 ;
    console.log(count)
  }
});

// fonction decrementation
var count = 0;
document.getElementsByClassName("moins").addEventListener("click", function() {
  count--;
  document.getElementsByClassName("quantity").innerHTML = count;
  if(count<0){
    quantity.innerHTML = 0 ;
  }

});



 





  // fonction coeur(click=red)   up up up up up up up up up up up up up 
  const buttons = document.querySelectorAll('.button2');

  for (let button of buttons) {
    button.addEventListener('click', function() {
      if (this.style.color === 'red') {
        this.style.color = '';
      } else {
        this.style.color = 'red';
      }
    });
  }










