let htmlHead = '';
let htmlBody =`<li class="table-header">
<a class="col-1">Id</a>
<a class="col-4">Avatar</a>
<a class="col-2">Email</a>
<a class="col-3">First Name</a>
<a class="col-4">Last Name</a>
<a class="col-1">Action</a>
</li>`;
let htmlFooter = '';
let $table = document.querySelector('.responsive-table');

var xhr = new XMLHttpRequest();
xhr.open("GET", 'https://reqres.in/api/users?page=1', true);
xhr.onload = function(){
    let data = JSON.parse(xhr.responseText).data;
    for(let i = 0; i <= data.length - 1; i++){
    htmlBody += `<li class="table-row">
    <a class="col col-1">${data[i].id}</a>
    <a class="col col-4"><img class ="table-img" src="${data[i].avatar} " alt=""></a>
    <a class="col col-2">${data[i].email}</a>
    <a class="col col-3">${data[i].first_name}</a>
    <a class="col col-4">${data[i].last_name}</a>
    <a class="col col-1 action"><i class="fa fa-pencil" aria-hidden="true"></i> <i class="fa fa-trash" aria-hidden="true"> </i></a>
  </li>`
    }
    $table.innerHTML = htmlBody;
};
xhr.send();


fetch('https://reqres.in/api/users?page=2')
  .then(response => response.json())
  .then((result)=>{
    let dataApi = result.data;
    for(let i = 0;i <= dataApi.length - 1; i++){
      htmlBody +=  `<li class="table-row">
      <a class="col col-1">${dataApi[i].id}</a>
      <a class="col col-4"><img class ="table-img" src="${dataApi[i].avatar} " alt=""></a>
      <a class="col col-2">${dataApi[i].email}</a>
      <a class="col col-3">${dataApi[i].first_name}</a>
      <a class="col col-4">${dataApi[i].last_name}</a>
      <a class="col col-1 action"><i class="fa fa-pencil" aria-hidden="true"></i> <i class="fa fa-trash" aria-hidden="true"> </i></a>
    </li>`
  }
  $table.innerHTML = htmlBody;
  })
  .catch(error => console.log('Error:', error));
  