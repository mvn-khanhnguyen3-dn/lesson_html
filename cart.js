var htmlHead = '';
var htmlCart = '';
var htmlFooter = '';
var $table = document.getElementsByTagName('table');
var td = document.getElementsByTagName('td');
var sum = 0;
var key = 'id';
var localsData = JSON.parse(localStorage.getItem(key)) || [];

for(var i = 0;i <= localsData.length -1; i++){
  htmlHead = ' <tr><th>No</th><th>Product</th>\
  <th>Amount</th><th>Price</th><th>Action</th></tr>'
  htmlCart += '<tr><td>'+i+'</td>\
  <td><img class="cart-img" src='+localsData[i].img+' alt="" />'+localsData[i].product+'</td><td><button id="prev">-</button>'+localsData[i].count+'<button id="next">+</button></td><td>'+localsData[i].price+' VND</td><td>\
  <button onclick="remove('+localsData[i].id+')"><i class="fa fa-trash" aria-hidden="true"></i></button></td></tr>';
  sum +=parseInt(localsData[i].price * localsData[i].count);
  htmlFooter = '<div class="total">TOTAL : '+sum+' VND</div>';
}
$table[0].innerHTML = htmlHead + htmlCart +htmlFooter;
function remove(id){
  var newData = localsData.filter(function(e){
    return e.id !== id;
  });
  localStorage.setItem('id',JSON.stringify(newData));
  alert("Xóa sản phẩm này khỏi giỏ hàng ?");
  location.reload();
}
if(td.length == 0){
  alert("Giỏ hàng của bạn đang trống vui lòng mua tíêp");
  location.href="./product.html";
}

