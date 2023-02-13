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
//fonction delete
const dels =document.getElementsByClassName("delete")[0];
// const boxes =document.getElementsByClassName("box")[0];

for (let i =0;i<dels.length;i++) {
  dels[i].addEventListener("click", function() {boxes[i].remove()

})}

const shoppingCart = document.getElementById("container");
const items = shoppingCart.getElementsByClassName("box");
const totalPrice = document.getElementById("total-cost");

let total = 0;

for(let i=0; i<items.length; i++){
  const item = items[i];
  const moins = item.getElementsByClassName("moins")[0];
  const plus = item.getElementsByClassName("plus")[0];
  const quantity = item.getElementsByTagName("input")[0];
  const deleteBtn = item.getElementsByClassName("delete")[0];

  const price = parseInt(
    item.getElementsByClassName("price")[0].innerText.substring(1)
  );



moins.addEventListener("click", ()=>{
  if(quantity.value>1){
    quantity.value--;
    total -= price;
    totalPrice.innerText = `Total Price: $${total}`;

  }
});

plus.addEventListener("click", ()=>{
  quantity.value++;
  total += price;
  totalPrice.innerText = `Total Price: $${total}`;


});

deleteBtn.addEventListener("click" , () =>{
  item.remove();
  total -= price * quantity.value;
  totalPrice.innerText = `Total Price: $${total}`;

})


total += price * quantity.value;
totalPrice.innerText = `Total Price: $${total}`;

}


 





  // fonction coeur(click=red)   up up up up up up up up up up up up up 
 









