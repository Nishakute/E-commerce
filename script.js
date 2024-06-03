products = [
    
      {
        id: 1,
        productName: "face scrub",
        discription: "hybrid cleansing face scrub with cucumber",
        price: 200.0,
        images:"images/skin1.jpg"
      },
      {
        id: 2,
        productName: "sunscreen",
        discription: "soonthing gel sunscrren for dry skin",
        price: 150.0,
        images: "images/skin2.jpg",
      },
      {
        id: 3,
        productName: "cleanser",
        discription: "balancing daily cleanser",
        price: 200.0,
        images: "images/skin3.jpg",
      },
      {
        id: 4,
        productName: "Moisturizer",
        discription: " Hydreating gel oil",
        price: 255.0,
        images: "images/skin4.jpg",
      },
      {
        id: 5,
        productName: "Makeup remover",
        discription: "cleasing oil",
        price: 350.0,
        images: "images/skin5.jpg",
      },
      {
        id: 6,
        productName: "face wash",
        discription: "gel based face wash for dry skin",
        price: 220.0,
        images: "images/skin6.jpg",
      },



    ];
    
    showCarts = document.getElementById("showCarts");
    
    products.forEach((element) => {
      rowDiv = document.createElement("div");
      rowDiv.className = "col-3";
      rowDiv.innerHTML = `
                        <div class="card" style="width: 18rem; margin:50px">
                            <img src=${element.images} class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${element.productName}</h5>
                                <p class="card-text">${element.discription}</p>
                                <h4 class="card-text">&#x20b9; ${element.price}</h4>
                                <button class="btn btn-primary" onclick="addToCart(${element.id})">Add to cart</button>
                            </div>
                        </div>
        `;
        showCarts.appendChild(rowDiv);
    });

    cart=[];
    

    function addToCart(ID){
        console.log(ID);
        indexNumber= products.findIndex(element=> element.id === ID)
        if(indexNumber != -1){
          cart.push(products[indexNumber]);
          console.log(cart);
          console.log(cart.length);
        }
         else{
           alert("product out of stock");
        }
        document.getElemetById('menuCountInCart').innerHTML= cart.length;
    }

    document.getElementById('showCartOnModal').addEventListener('click',()=>{

    cart.forEach((element)=>{
      cartList=document.createElement('div')
      cartList.innerHTML=`<div>
      <span style="font-size:bold">${element.productName}</span>
      <span>&#x20b9,${element.price}</span>
    </div>`;
      document.getElementById('prdouctsInCart').appendChild(cartList);
    })
  });



