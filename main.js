var data = [
  {
    id:1,
    product:'AIR FORCE 1',
    price:'150000',
    img:'./images/1.jpg',
    count: 1
  },
  {
    id:2,
    product:'SUPERSTAR',
    price:'350000',
    img:'./images/2.jpg',
    count: 1
  },
  {
    id:3,
    product:'JORDAN 1 LOW GREY',
    price:'250000',
    img:'./images/3.jpg',
    count: 1
  },
  {
    id:4,
    product:'YEEZY BOOST 350 V2',
    price:'50000',
    img:'./images/4.jpg',
    count: 1
  },
  {
    id:5,
    product:'AIR MAX 90 HOME',
    price:'80000',
    img:'./images/5.jpg',
    count: 1
  },
  {
    id:6,
    product:'JORDAN 1 LOW CAMO',
    price:'330000',
    img:'./images/6.jpg',
    count: 1
  },
  {
    id:7,
    product:'JORDAN 1 LOW CAMO',
    price:'330000',
    img:'./images/7.jpg',
    count: 1
  },
  {
    id:8,
    product:'JORDAN 1 LOW CAMO',
    price:'330000',
    img:'./images/8.jpg',
    count: 1
  },
];
var productName =  document.querySelectorAll('.product-name');
var price = document.querySelectorAll('.price');
var img = document.getElementsByTagName('img');
var totalCart = document.getElementById('totalCart');
var html = '';
var $productList = document.querySelector('.product-list');
var key = 'id';

for(var i = 0; i <= data.length - 1; i++){
html += '<li class="product-item"><a class="product-img" href="">\
<img src='+data[i].img+' alt="" /></a><h3 class="product-name">'+data[i].product+'</h3>\
<p class="price">'+data[i].price + ' VND'+'</p>\
<button onclick="addCart('+data[i].id+')" class="add-to-cart">Add to Cart</button></li>';
}
$productList.innerHTML = html;
function addCart(id){
  var locals = JSON.parse(localStorage.getItem(key)) || [];
  var newLocals = data.filter(function(e){
    return e.id === id;
  });
  var count = data.some(function(e){
    return e.id === id;
  });
  if(count){
   locals.map(function(amount){
     amount.count ++;
   });
  }
  locals.push(...newLocals);
  localStorage.setItem(key,JSON.stringify(locals));
  totalCart.innerHTML = locals.length;
}
addCart();

