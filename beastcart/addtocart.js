let iconcart = document.querySelector('.iconcart');

let cart= document.querySelector('.cart');

let container = document.querySelector('.container');
let Close = document.querySelector('.close');

iconcart.addEventListener('click', ()=>{
    if(cart.style.right == '-100%'){
        cart.style.right='0';
        container.style.transform = 'translateX(-400px)'; 
    }
    else{
        cart.style.right='-100%';
        container.style.transform = 'translateX(0)';
    }
})

Close.addEventListener('click',()=>{
    cart.style.right='-100%';
    container.style.transform = 'translateX(0)';
})

let products = null;
//get data form file json

fetch('product.json')
.then(response => response.json())
.then(data =>{
    products = data;
    addDatatohtml();
})

//show datas in list html

function addDatatohtml(){
    //remove datas default in html
    let listproducthtml= document.querySelector('.listproduct')
    listproducthtml.innerHTML='';

    //add new datas
    if(products!=null){
        products.forEach(product => {
            let newproduct = document.createElement('div');
            newproduct.classList.add('item');
            newproduct.innerHTML=
            ` <img src="new-product/N1-1.png" alt="">
            <h2>Perfume1</h2>
            <div class="price">$50</div>
            <button>Add To Cart</button>`;
            listproducthtml.appendChild(newproduct);
        });
    }
}