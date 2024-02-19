const product = [
    {
        id: 0,
        Image: 'images/N1-1.png',
        title: 'perfume1',
        price: 1200,
    },
    {
        id: 1,
        Image: 'images/N2-1.png',
        title: 'perfume2',
        price: 1250,
    },
    {
        id: 2,
        Image: 'images/N3.png',
        title: 'perfume3',
        price: 1330,
    },
    {
        id: 3,
        Image: 'images/N4-1.png',
        title: 'perfume4',
        price: 1500,
    },
];

const categories = [...product];

let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { Image, title, price } = item;
    return `
        <div class='box'>
            <div class='img-box'>
                <img class='images' src=${Image}></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>${price}.00</h2>
                <button onclick='addtocart(${i++})'>add to cart</button>
            </div>
        </div>`;
}).join('');


var cart=[];

function addtocart(a){
  cart.push({...categories[a]});
  displaycart();
}

function delelement(a){
    cart.splice(a,1);
    displaycart();
}

function displaycart(a){
    let j=0,total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0)
    {
        document.getElementById('cartitem').innerHTML="your cart is empty";
        document.getElementById("total").innerHTML="$" +0+".00";
    }
    else{
        document.getElementById("cartitem").innerHTML=cart.map((item)=>
        {
            var{Image,title,price}=item;
            total=total+price;
            document.getElementById('total').innerHTML="$"+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                <img class='rowimg' src=${Image}>
                </div>
                <p style= 'font-size:12px;'>${title}</p>
                <h2 style='font-size:15px;'>$ ${price}.00</p>`+
                "<i class='bx bxs-trash-alt' onclick='delelement("+ (j++) +")'></i></div>"
            );

            
        }).join('');
    }
}