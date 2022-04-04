let $form = document.querySelector('form');
let dataEdit = JSON.parse(localStorage.getItem('edit')) || [];
var htmlEdit = `
<div class="form-field">
<label for="id">Id</label>
<input id = "id" type="text" value=${dataEdit[0].id} disabled name="id">
</div>
<div class="form-top">
<div class="form-field">
  <label for="product_name">Product Name</label>
  <input type="text" value="${dataEdit[0].product_name}"name="product_name">
</div>
<div class="form-field">
  <label for="price">Price</label>
  <input type="text" value="${dataEdit[0].price}" name="price">
</div>
<div class="form-field">
  <label for="image">Image</label>
  <input type="file" value="${dataEdit[0].img}" name="image">
</div>
</div>
<div class="form-bottom">
<div class="form-field">
<label for="description">Description</label>
<textarea id="description_area" name="description" cols="30" rows="10">
${dataEdit[0].description}
</textarea>
</div>
<button type="submit" class="edit_product">Update</button>
</div>
`
$form.innerHTML = htmlEdit;
var newId;
let locals = JSON.parse(localStorage.getItem('product')) || [];

// toast
function launch_toast() {
  var x = document.getElementById("toast");
  console.log(x);
  x.className = "show";
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 2000);
}
let toast_shown = false;
$form.addEventListener('submit', e => {
  if(toast_shown) return;
  toast_shown = true;
  e.preventDefault();
  launch_toast();
  let dataForm = new FormData($form);
  let newData = {
    id: dataEdit[0].id,
    product_name: dataForm.get('product_name'),
    price: dataForm.get('price'),
    description: dataForm.get('description'),
    img: './images/' + dataForm.get('image').name,
  };
  localStorage.setItem('edit', JSON.stringify(newData));
  $form.reset();
  setTimeout(this.submit, 3000);
});


