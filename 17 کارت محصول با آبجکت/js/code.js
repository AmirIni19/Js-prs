
// 1 ** show product in our products' class
var products = [
    { id: 1, name: 'کفش جوما', price: 1, image: './img/1(1).jpg' },
    { id: 2, name: 'کفش آدیداس', price: 2, image: './img/2(2).jpg' },
    { id: 3, name: 'کفش نایک', price: 3, image: './img/3(3).jpg' },
];
console.log(products);

var renderProducts = () => {
    var producDiv = document.querySelector('.products');
    producDiv.innerHTML = '';
    products.forEach((item, index) => {
        producDiv.innerHTML += `
        <div class="product card">
            <div class="producr_img">
                <img src=${item.image}>
            </div>
            <h2 class="product_title">${item.name}</h2>
            <h3 class="product_price">${item.price} تومن</h3>
            <button class="btn btn-success" onclick="addToCart(${index})">اکنون سفارش دهید</button>
        </div>
        `
    })
}
renderProducts();
