// ITERATION 1

function updateSubtotal(product) {
  
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');

  const quantity = product.querySelector('.quantity input');

  const subtotale = product.querySelector ('.subtotal span');

  const produit= price.textContent * quantity.value;
  
  subtotale.textContent = produit;

  return;
}

function calculateAll() {
  
  console.log('Calculating total, yey!');

  const allProduct = document.querySelectorAll('.product');

  const allsubtotal = document.querySelectorAll('.subtotal span');

  allProduct.forEach( element=> {

    updateSubtotal(element);

    });
  
 
  const totalos = document.querySelector("#total-value span");

  let y = 0;

    for (let i=0; i<allsubtotal.length; i++) {

    const subtotal = allsubtotal[i];

    y = y + parseFloat (subtotal.innerText);                         

     }
     
  totalos.textContent = y; 
     

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  let productChilds = document.querySelectorall('.product td');
  productChilds.forEach((child) => {
    productChilds.removeChild(child);
  });
  

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
 
  const removeproductBtn = document.querySelectorAll('.btn btn-remove');
  
  removeproductBtn.forEach(element => {
    
    element.addEventListener('click', removeProduct);
  
});

});
