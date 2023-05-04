//render products
function getProductApi() {
  //Kết nối với api(đường dẫn backend cung cấp)
  var promise = axios({
      url: 'https://shop.cyberlearn.vn/api/Product',
      method: 'GET'
  })
  //xỬ lý thành công:
  promise.then(function (result) {
      console.log('result', result.data);
      var arrProduct = result.data.content;
      renderProduct(arrProduct);
      renderCarousel(arrProduct);
  })
  //Xử lý thất bại:
  promise.catch(function (err) {
      console.log('result', err.respose.data);
  })
};





function renderProduct(arrProduct) {
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
            `;
        }
  document.querySelector('#product-list').innerHTML = htmlOut;
}

function renderCarousel(arrProduct) {
  let carouselOut = '';
  let itemActive = arrProduct[11];
  carouselOut += `
              <div class="carousel-item active">
              <div class="carousel_wrap">
                      <img src=${itemActive.image} alt="...">
                      <div class="content_inner">
                          <h3>${itemActive.name}</h3>
                           <p>${itemActive.description.length > 90 ? itemActive.description.slice(0, 90) + '...' : itemActive.description}</p>
                          <button class="btnBuyGrad"> Buy now</button>
                      </div>
                      </div>
              </div>
          `;
  for (let i = 9; i < 11; i++) {
      let item = arrProduct[i];
      carouselOut += `
              <div class="carousel-item">
              <div class="carousel_wrap">
                      <img src=${item.image} alt="...">
                      <div class="content_inner">
                          <h3>${item.name}</h3>
                          <p>${item.description.length > 90 ? item.description.slice(0, 90) + '...' : item.description}</p>
                          <button class="btnBuyGrad">Buy now</button>
                      </div>
                      </div>
              </div>
              `
  }
  document.querySelector('.carousel-inner').innerHTML = carouselOut;
}

window.onload = function(){
  getProductApi();
}


