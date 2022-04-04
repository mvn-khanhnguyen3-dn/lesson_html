let data = [
  {
    id: randomId(),
    product_name: 'Apple iPhone 12 Pro Max, 128GB, Pacific Blue - Unlocked (Renewed Premium)',
    price: '979.00',
    description: 'A like-new experience. Backed by a one-year satisfaction guarantee. This Renewed Premium product is shipped and sold by Amazon and has been certified by Amazon to work and look like new. With at least 90% battery life, it comes in deluxe, Amazon-branded packaging and is backed by a one-year warranty and technical support.',
    img: './images/iphone_12_promax.jpg'
  },
  {
    id: randomId(),
    product_name: 'TracFone LG Reflect LTE Prepaid Smartphone (Locked) - Black - 32GB - Sim Card Included - CDMA',
    price: '69.99',
    description: '6.5 HD plus FullVision Notch Display; 2.0GHz Octa-Core Processor; 4,000mAh Non Removable Battery; Triple Rear Cameras 13MP plus 5MP plus 2MP/13MP Front-Facing Camera; Internal memory 32GB Supports Micro SD memory card up to 2TB (not included); 3GB RAM',
    img: './images/tracfone.jpg'
  },
  {
    id: randomId(),
    product_name: 'Samsung Galaxy S21 FE 5G Cell Phone, Factory Unlocked Android Smartphone, 128GB, 120Hz Display, Pro Grade Camera, All Day Intelligent Battery, US Version, Olive',
    price: '549.99',
    description: 'PRO-GRADE CAMERA: The powerful pro grade camera delivers high quality photos and videos, with a Rear Camera that boasts 12MP Ultra Wide, Wide-angle cameras and an 8MP Telephoto Camera; It also features a Front Camera that includes a 32MP Selfie Camera',
    img: './images/samsung_s21.jpg'
  },
  {
    id: randomId(),
    product_name: 'Samsung Galaxy S22 Smartphone, Factory Unlocked Android Cell Phone, 128GB, 8K Camera & Video',
    price: '799.99',
    description: '8K SUPER STEADY VIDEO: Shoot videos that rival how epic your life is with stunning 8K recording, the highest recording resolution available on a smartphone; Video captured is effortlessly smooth, thanks to Auto Focus Video Stabilization on Galaxy S22',
    img: './images/samsung_s22.jpg'
  },
  {
    id: randomId(),
    product_name: 'Samsung Galaxy Tab S8 Android Tablet, 11” LCD Screen, 256GB Storage, DeX Productivity, Qualcomm Snapdragon, S Pen Included, All-Day Battery Ultra Wide Camera, Graphite',
    price: '779.99',
    description: 'ULTRA WIDE CAMERA: Record super clear video in 4K and great photos with an ultra-wide front camera with auto framing; With Galaxy S8, your photography game shines no matter your experience level behind the lens',
    img: './images/samsung_tab_s8.jpg'
  },
  {
    id: randomId(),
    product_name: 'Apple iPhone 11 Pro, 256GB, Midnight Green - Fully Unlocked (Renewed Premium)',
    price: '609.00',
    description: 'This phone is unlocked and compatible with any carrier of choice on GSM and CDMA networks (e.g. AT&T, T-Mobile, Sprint, Verizon, US Cellular, Cricket, Metro, Tracfone, Mint Mobile, etc.).',
    img: './images/iphone_11_pro.jpg'
  }
]

let htmlBody = `<li class="table-header">
  <p class="col-0">No</p>
  <p class="col-1">Image</p>
  <p class="col-2">Product Name</p>
  <p class="col-2">Description</p>
  <p class="col-1">Price</p>
  <p class="col-0">Action</p>
  </li>`;
let $table = document.querySelector('.table-list');
let key = 'product';
var search = document.getElementById('search');
var home = document.querySelector('.side-home');
var table_img = document.querySelector('.table-img');
var locals = JSON.parse(localStorage.getItem(key)) || [];

home.addEventListener('click', e => {
  e.preventDefault();
  localStorage.setItem(key, JSON.stringify(data));
  location.reload();
});
var editLocals = JSON.parse(localStorage.getItem('edit')) || [];
localStorage.setItem(key, JSON.stringify(locals));

for (let i = 0; i <= locals.length - 1; i++) {
  editLocals.id === locals[i].id ? locals[i] = editLocals : '';
  htmlBody += `<li class="table-row">
      <p class="col col-0">${i + 1}</p>
      <a class="col col-1"><img onclick = "productDetail(${locals[i].id})" class ="table-img" src="${locals[i].img}" alt=""></a>
      <h3 class="col col-2 name">${locals[i].product_name}</h3>
      <p class="col col-2">${locals[i].description}</p>
      <p class="col col-1">$${locals[i].price}</p>
      <a class="col col-0 action"><button class="btn_edit" onclick ="editProduct(${locals[i].id})"><i class="fa fa-pencil" aria-hidden="true"></i></button><button type="button" onclick="launch_toast();removeProduct(${locals[i].id});"><i class="fa fa-trash" aria-hidden="true"></i></button></a>
    </li>`;

  $table.innerHTML = htmlBody;
}
// toast

function launch_toast() {
  alert("Are You Sure ?");
  var x = document.getElementById("toast");
  console.log(x);
  x.className = "show";
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 2000);
}
function removeProduct(id) {
  let newProduct = locals;
  var newData = newProduct.filter(e => {
    return e.id !== id;
  });
  localStorage.setItem(key, JSON.stringify(newData));
  setTimeout(function () { location.reload() }, 2500);
}
function editProduct(id) {
  let dataEdit = locals.filter(e => {
    return e.id === id;
  });
  localStorage.setItem('edit', JSON.stringify(dataEdit));
  location.href = './edit.html';
}

function productDetail(id) {
  let dataDetail = locals.filter(e => {
    return e.id === id;
  });
  localStorage.setItem('detail', JSON.stringify(dataDetail));
  location.href = "./detail.html";
}

function randomId() {
  return Math.floor(Math.random() * 1000);
}

if (locals.length === 0) {
  alert('Empty Product');
}

search.addEventListener('input', e => {
  e.preventDefault();
  let newFilter = locals.filter(value => {
    return value.product_name.toLowerCase().includes(e.target.value.trim());
  });
  localStorage.setItem('search', JSON.stringify(newFilter));
  let element = document.querySelectorAll('.table-row');
  for (let x = 0; x < element.length; x++) {
    element[x].style.display = "none";
  }
  for (let j = 0; j < locals.length; j++) {
    for (let k = 0; k < newFilter.length; k++) {
      if (locals[j].id === newFilter[k].id) {
        element[j].style.display = "flex";
      }
    }
  }
});

