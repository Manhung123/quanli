// 2. Tạo một lớp Product có id, name, quantity, price.
// - Tạo một lớp Store có listProducts (mảng) để quản lý sản phẩm.
//     Store có các phương thức add (thêm sản phẩm), delete (xóa sản phẩm)
// , findAll(lấy tất cả sản phẩm), edit (sửa một sản phẩm)
// => Vẽ UML và Tạo một function main() hoàn thành các yêu cầu sau:
//     - Tạo 5 đối tượng Product
// - Tạo một đối tượng Store để quản lý các sản phẩm trên.
// - Thực hiện gọi hàm add để thêm tất sản phẩm vào store của bạn
// - Hiển thị các sản phẩm ra màn hình console (nâng cao hơn: hiển thị ra bảng trên HTML)
// - Thực hiện gọi hàm delete để xóa sản phẩm ở vị trí 3 => Sau đó hiển thị lại.
// - Thực hiện gọi hàm edit để sửa sản phẩm ở vị trí 4 => Sau đó hiển thị lại.
// - Trong lớp Store tạo phương thức lấy về mảng sản phẩm có giá lớn hơn 2000.
// Trong main() gọi phương thức trên để lấy vể mảng đó và hiển thị ra màn hình.
class Product{
    id;
    name;
    quantity;
    price;
    constructor(idInput, nameInput, quantityInput, priceInput) {
        this.id = idInput;
        this.name = nameInput;
        this.quantity = quantityInput;
        this.price = priceInput;
    }
    getId(){
        return this.id
    }
    getName(){
        return this.name
    }
    getQuantity(){
        return this.quantity
    }
    getPrice(){
        return this.price
    }
    setId(idInput){
        this.id = idIinput
    }
    setName(nameInput){
        this.name = nameInput
    }
    setQuantity(quantityInput){
        this.quantity = quantityInput
    }
    setPrice(priceInput){
        this.price = priceInput
    }
}

