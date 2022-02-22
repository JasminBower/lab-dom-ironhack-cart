// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const  quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span')
  const priceValue = Number(price.innerText);
  const valueQuantity = Number(quantity.value);

  let totalPriceOfProduct = priceValue * valueQuantity;
  subtotal.innerText = totalPriceOfProduct;
  
  return totalPriceOfProduct;

 
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  let totalSum = 0;

  // ITERATION 2
  const getProducts = document.querySelectorAll('.product');

  getProducts.forEach(product => {
         subtotal = updateSubtotal(product)
         totalSum += subtotal;
  });
  

  // ITERATION 3
  const totalPrice  = document.querySelector('#total-value span');
 
  totalPrice.innerText = totalSum;
}

// ITERATION 4
///// IM SORRY THIS IS WHERE MY BRAIN TURNED INTO NOODLES AND I HAD TO STOP 🥲 
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
