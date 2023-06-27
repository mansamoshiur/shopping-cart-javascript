let products = [
    {
        id: 1,
        name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 15,
        instock:5,
        description:'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        category:"men's clothing",

    },{
        id: 2,
        name: 'ens Casual Premium Slim Fit T-Shirts ',
        price: 22,
        instock:5,
        description:'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
        image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        category:"en's clothing",

    },{
        id: 3,
        name: 'ens Cotton Jacket',
        price: 55,
        instock:5,
        description:'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
        image:"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        category:"men's clothing",

    },{
        id: 4,
        name: 'Mens Casual Slim Fit',
        price: 15.99,
        instock:5,
        description:'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
        image:"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        category:"men's clothing",

    },{
        id: 5,
        name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 695,
        instock:5,
        description:"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        image:"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        category:"jewelery",

    },{
        id: 6,
        name: 'Solid Gold Petite Micropave',
        price: 168,
        instock:5,
        description:'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
        image:"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        category:"jewelery",

    },{
        id: 7,
        name: 'Solid Gold Petite Micropave',
        price: 168,
        instock:5,
        description:'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
        image:"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",

        category:"jewelery",

    },{
        id: 8,
        name: 'Solid Gold Petite Micropave',
        price: 168,
        instock:5,
        description:'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
        image:"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        category:"jewelery",

    },
]

const productsEl = document.getElementById('productItems');
const cartItemsEl = document.getElementById('cartItems');
const subtotalEl = document.getElementById('subtotal');
const totalItemsInCartEl = document.getElementById('total_items_in_cart');
const removeAllItemsEl = document.getElementById('removeAllItems');

// render products
function renderProducts(){
    products.map((product)=>{
        productsEl.innerHTML +=`
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-contain object-center w-full h-full block" src=${product.image}>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">${product.category}</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">${product.name.substring(1,20)}</h2>
          <p class="mt-1">$ ${product.price}.00</p>
          <p>${product.description.substring(1,85)}</p>
        </div>
        <button class="w-full bg-yellow-500 text-white my-4 py-2 rounded-md font-bold" onclick="addToCart(${product.id})">Add To Cart</button>
      </div>
        `
    })   
}
renderProducts()

let cart = JSON.parse(localStorage.getItem('CART')) || [];
updateCart()
//  add cart to cart
function addToCart(id){
    if(cart.some((item)=>item.id === id)){
        alert('Cart already exists');
    }else{
        const item = products.find((product)=> product.id === id);
        cart.push({
            ...item,
            numberOfUnits:1,
        });
    }
    updateCart();
}


// render cart items
function renderCartItems(){
  cartItemsEl.innerHTML ='';
  cart.map((cartItem)=>{
      cartItemsEl.innerHTML +=`
      <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <img src=${cartItem.image} alt="product-image" class="w-full rounded-lg sm:w-40" />
      <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div class="mt-5 sm:mt-0">
          <h2 class="text-lg font-bold text-gray-900">${cartItem.name}</h2>
          <p class="mt-1 text-xs text-gray-700">${cartItem.price}</p>
        </div>
        <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div class="flex items-center border-gray-100">
            <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onclick="changeNumberOfUnits('minus', ${cartItem.id})"> - </span>
            <div class="h-8 w-8 border bg-white text-center text-xs outline-none">${cartItem.numberOfUnits}</div>
            <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onclick="changeNumberOfUnits('plus', ${cartItem.id})"> + </span>
          </div>
          <div class="flex items-center space-x-4">
            <span'>
                <svg onclick='removeItem(${cartItem.id})' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
      `
  })
}

function changeNumberOfUnits(action,id){
  cart = cart.map((item)=>{
    let numberOfUnits = item.numberOfUnits
    if(item.id === id){
      if(action === 'plus' && numberOfUnits < item.instock){
        numberOfUnits ++;
      }else if(action === 'minus' && numberOfUnits > 1){
        numberOfUnits --;
      }
    }
    return {
      ...item,
      numberOfUnits
    }
  })
  updateCart()
}

// update cart
function updateCart(){
    renderCartItems()
    renderSubtotal()

    localStorage.setItem('CART', JSON.stringify(cart));
}

function renderSubtotal(){
  let totalPrice = 0, totalQuantity = 0;

  cart.map((item)=>{
    totalPrice += item.price * item.numberOfUnits;
    totalQuantity += item.numberOfUnits
  })
  subtotalEl.innerHTML = `subtotal (${totalQuantity} items) : ${totalPrice.toFixed(2)}`
  totalItemsInCartEl.innerHTML = totalQuantity
}

// remove items from cart
function removeItem(id){
  cart = cart.filter((item)=> item.id !== id)

  updateCart()
}
removeAllItemsEl.innerHTML =`
<button onclick='clearCart()' class="my-8 bg-yellow-500 ml-20 py-2 px-6 text-white font-semibold rounded-md text-lg">Cleare All</button>
`
const clearCart = () =>{
  cart = []
}

clearCart()
