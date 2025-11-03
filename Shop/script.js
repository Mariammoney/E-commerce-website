
var arrayOfProducts = [];
var productWrapper = document.querySelector(".products-wrapper")


fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    arrayOfProducts = data.products;

    
      
      renderProducts();

   
    
    console.log(arrayOfProducts);
  })
  .catch((err) => console.error("Error:", err));


  function renderProducts() {
      productWrapper.innerHTML = ""; // clear old content

      const visibleProducts = arrayOfProducts.slice(0, );

    // const visibleComments = arrayOfComments.slice(1, 3); 0, 1, 2 1, 2

      visibleProducts.forEach(product => {
          const card = document.createElement("div");
        //   card.classList.add("card");
        //   card.classList.add("product-card");

       
     

          card.innerHTML = `
        <div class="card product-card" style="width: 250px">
          <img class="card-img-top product-img" src=${product.images[0]} alt="Card image" />
          <div class="card-body">
            <h4 class="card-title">₦ ${product.price}</h4>
            <p class="card-text">${product.title}</p>

            <div class="d-flex lower-links">
                <div class="rating-wrapper d-flex">
                    <img src="https://img.icons8.com/?size=100&id=85842&format=png&color=FFFFFF" alt="rating icon" class="rating-img"/>
                    <span>${product.rating}</span>

                </div>

                <div class="d-flex">
                    <span>Sold:</span>
                    <span>${product.stock}</span>

                </div>

                <div>
                    <button class="goto-button">
                        <img src="https://img.icons8.com/?size=100&id=10242&format=png&color=FFFFFF" alt="gotoproduct page" class="goto-img"/>
                    </button>
                </div>

            </div>
           
          </div>
          </div>
        `;

        productWrapper.appendChild(card);
      });

      
    }

    


