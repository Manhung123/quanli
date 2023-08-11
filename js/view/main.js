let store = new Store()
// function main(){
//     let product = new Product(1, 'bánh mì', 3, 100)
//     store.add(product)
//     let productsInStore = store.findAll()
//     for (let i = 0; i < productsInStore.length; i++) {
//         console.log(productsInStore[i])
//     }
// }
// main()
function showAll(){
    let productsInStore = store.findAll()
    let str = ``;
    for (let i = 0; i < productsInStore.length; i++) {
        str += `
         <tr>
            <td>${productsInStore[i].id}</td>
            <td>${productsInStore[i].name}</td>
            <td>${productsInStore[i].quantity}</td>
            <td>${productsInStore[i].price}</td>
            <td><button style="background-color: #ff8400" onclick="remove(${i})">remove</button></td>
            <td><button style="background-color: blue" onclick="showFromEdit(${i})">edit</button></td>
        </tr>
        `
    }
    document.getElementById('product').innerHTML = str;
}
function add(){
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let quantity = document.getElementById('quantity').value;
    let price = document.getElementById('price').value;
    let newProduct = new Product(id, name, quantity, price);
   store.add(newProduct);
    console.log(store);
    alert('Add Success');
    showAll()
    document.getElementById('from-add').innerHTML = ``
}
function showFromAdd(){
    document.getElementById('from-add').innerHTML = `
    <center>
        <h1>Add Product</h1>

        <table style="border: 1px solid black; margin-top: 50px">
            <tr>
                <td>id</td>
                <td><input type="number" id="id"></td>
            </tr>
            <tr>
                <td>name</td>
                <td><input type="text" id="name"></td>
            </tr>
            <tr>
                <td>quantity</td>
                <td><input type="number" id="quantity"></td>
            </tr>
            <tr>
                <td>price</td>
                <td><input type="number" id="price"></td>
            </tr>
            <tr>
                <th colspan="2"><button onclick="add()">Add</button></th>
            </tr>
        </table>

    </center>
    `
}
function remove(index){
    let isConFirm = confirm('bạn có muốn xóa không ?')
    if (isConFirm){
        store.remove(index)
        showAll()
    }
}
function showFromEdit(index){
    let productEdit = Product[index];
    let html = `
     <input type="text" value="${productEdit}" id="productEdit">
    <button onclick="edit(${index})">thêm product</button>
    `
    document.getElementById('edit').innerHTML = html;
}
function edit(index){
    let newProducts = document.getElementById('productEdit').value;
    Product[index] = newProducts;
    showAll()
}





// showAll();