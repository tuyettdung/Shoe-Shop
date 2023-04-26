(async function renderProduct(){
    try{
        let result = await axios({
            url:'https://shop.cyberlearn.vn/api/Product',
            method:'GET'
        });
        let arrProduct = result.data.content;
        let htmlOut = '';
        for(let i = 0; i < arrProduct.length; i++){
            let prod = arrProduct[i];
            htmlOut += 
            `
              <div class="col-lg-3 col-md-6 col-sm-12 prod-item">
                <div class="card mt-4">
                  <div class="card-header">
                     <img src=${prod.image} class="w-100" />
                  </div>
                  <div class="card-body">
                     <p>
                       <i class="fa fa-star"></i>
                       <span>(4.5)</span>
                     </p>
                     <h6>${prod.name}</h6>
                  </div>
                  <div class="card-footer d-flex justify-content-around align-items-center">
                    <span>$${prod.price}</span>
                    <span class="btnBuy">Add to cart</span>
                  </div>
                </div>
              </div>
            `
        }
        document.querySelector("#product-list").innerHTML = htmlOut;

    }catch(err) {
        console.log('Error',err);
    }
})();