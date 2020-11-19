// Modal Add



var email;
var descep;
var author;

var List = [];
const table = document.querySelector('.tableBody');
var List = JSON.parse(localStorage.getItem("table")) ?? [];


//Edit Mode
var editMode = false;
var ItemIdTmp;
//Show Item

//Trạng thái EditModel
function enableEditMode() {
    editMode = true;
    // alert(editMode);
}
// Trạng thái EditModel
function disableEditMode() {
    editMode = false;
    // alert(editMode);
}
// SHOW DATAA
function showData(data) {
    console.log(data, 'xx')
    var listtxt = '';
    var Listlengt = List.length;
    for (let j = 0; j < Listlengt; j++) {
        listtxt += '<tr>' + '<td>' + (j + 1) + '</td>' + '<td>' + List[j].email + '</td>' + '<td>' + List[j].descep + '</td>' + '<td>' + List[j].author + '</td>' + '<td ><i class="xx fa fa-pencil" aria-hidden="true" onclick="editItem(' + j + ')"></i>' + '</td>' + '<td><i class="fa fa-trash" aria-hidden="true" onclick="deleteItem(' + j + ')"  ></i>' + '</td>' + '</tr>'
    }
    table.innerHTML = listtxt;
    // setHTML('.tableBody',listtxt)

};
//  Edit Handle
function editItemHandle() {
    email = document.querySelector('#mail').value;
    descep = document.querySelector('#des').value;
    author = document.querySelector('#author').value;

    console.log(email, descep, author);

    // alert(ItemIdTmp);
    //Edit Item
    List[ItemIdTmp] = {
        email,
        descep,
        author
    }
    localStorage.setItem("table", JSON.stringify(List));

    document.querySelector('.loading').classList.add('active');
    setTimeout(function () {
        document.querySelector('#mail').value = "";
        document.querySelector('#des').value = "";
        document.querySelector('#author').value = "";
        document.querySelector('.form-add').classList.remove('showzindex');
        document.querySelector('.form').classList.remove('showform');
        document.querySelector('.overlay').classList.remove('showover');
        document.querySelector('.loading').classList.remove('active');
    }, 1000)

    showData(List);

    console.log(List);
}
//Add Item
function AddItem() {
    if (editMode) {
        editItemHandle();
    } else {
        email = document.querySelector('#mail').value;
        descep = document.querySelector('#des').value;
        author = document.querySelector('#author').value;
        var result = {
            email: email,
            descep: descep,
            author: author
        };
        List.push(result);

        localStorage.setItem("table", JSON.stringify(List));

        document.querySelector('.loading').classList.add('active');
        setTimeout(function () {
            document.querySelector('#mail').value = "";
            document.querySelector('#des').value = "";
            document.querySelector('#author').value = "";
            document.querySelector('.form-add').classList.remove('showzindex');
            document.querySelector('.form').classList.remove('showform');
            document.querySelector('.overlay').classList.remove('showover');
            document.querySelector('.loading').classList.remove('active');
        }, 1000)
        showData(List);
    }
    
}

//DeleteItem
function deleteItem(index) {
    pr("Bạn có muốn xóa "+ index +" ");
    List.splice(index, 1);
   
    localStorage.setItem("table", JSON.stringify(List));
    showData(List)
}
//Edit
function editItem(index) {

    ItemIdTmp = index;

    var listindex = getItem(index);

    //Fill value to input
    setInputvalue('#mail', listindex.email);
    setInputvalue('#des', listindex.descep);
    setInputvalue('#author', listindex.author);

    // editMode
    localStorage.setItem("table", JSON.stringify(List));
    enableEditMode();
    setHTML('.complete1', 'Update');

    const btnedit = document.querySelectorAll('.xx');
    const formxx = document.querySelector('.form');
    const overlay = document.querySelector('.overlay');
    const forxxad = document.querySelector('.form-add');


    btnedit.forEach(function (item, index) {
        console.log(item,index);
        item.addEventListener('click', () => {
            console.log(btnedit);
            formxx.classList.toggle('showform');
            overlay.classList.toggle('showover');
            forxxad.classList.toggle('showzindex');
        });
    });
}
// Get Item
function getItem(index) {
    return List[index];
}
// Set HTML
function setHTML(selector, html) {
    var element = document.querySelector(selector);
    element.innerHTML = html;
}
// get value input by select 
function getInputvalue(selector) {
    var element = document.querySelector(selector);
    return element.value;
}
//set value input by selector
function setInputvalue(selector, value) {
    var element = document.querySelector(selector);
    element.value = value;
}
showData(List);