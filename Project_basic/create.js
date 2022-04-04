let $form = document.querySelector('form');
let key = 'product';
let newData = [];
var localData = JSON.parse(localStorage.getItem(key)) || [];

// toast
function launch_toast() {
  var x = document.getElementById("toast");
  console.log(x);
  x.className = "show";
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 2000);
}
// create_product
let toast_shown = false;
$form.addEventListener('submit', e => {
  if(toast_shown) return;
  toast_shown = true;
  e.preventDefault();
  launch_toast();
  let dataForm = new FormData($form);
  newData.push({
    id: randomId(),
    product_name: dataForm.get('product_name'),
    price: dataForm.get('price'),
    description: dataForm.get('description'),
    img: './images/' + dataForm.get('image').name,
  })
  localData.push(...newData);
  localStorage.setItem(key, JSON.stringify(localData));
  // alert("Done");
  $form.reset();
  setTimeout(this.submit, 3000);
});

function randomId() {
  return Math.floor(Math.random() * 1000);
}