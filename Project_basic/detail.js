var $content = document.querySelector('.section-content_detail');
var detailLocals = JSON.parse(localStorage.getItem('detail')) || [];
var htmlDetail = ` 
<img class="content-img" src="${detailLocals[0].img}" alt="">
<div class="content-middle">
  <h2 class="product-name">${detailLocals[0].product_name}</h2>
  <p class="description">${detailLocals[0].description}</p>
  <p class="price">Price : ${detailLocals[0].price}</p>
</div>`;

$content.innerHTML = htmlDetail;