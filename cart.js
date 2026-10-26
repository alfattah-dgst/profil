let cart = [];

function tambahkeranjang(idproduk, namaproduk, hargaproduk) {
    let itemada = cart.find(item => item.id === idproduk)

    if (itemada) {
        itemada.quantity += 1;
    } else {
        cart.push({
            id: idproduk,
            name: namaproduk,
            price: hargaproduk,
            quantity: 1
        })
    }
    updatecartdisplay();
}

function updatecartdisplay() {
    let totalItem = 0;
    let totalPrice = 0;
    let container = document.getElementById('cart-items-container');

    container.innerHTML = ""; // Bersihkan tampilan list sebelumnya

    if (cart.length === 0) {
        container.innerHTML = "<p>Keranjang masih kosong.</p>";
    } else {
        cart.forEach(item => {
            totalItem += item.quantity;
            totalPrice += item.price * item.quantity;

            // Buat elemen tampilan untuk setiap item di keranjang
            container.innerHTML += `
                        <div class="cart-item">
                            <span>${item.name} (${item.quantity}x)</span>
                            <span>Rp ${item.price * item.quantity}</span>
                        </div>
                    `;
        });
    }

    // Perbarui badge angka di navbar dan total harga
    document.getElementById('cart-count').innerText = totalItem;
    document.getElementById('cart-total').innerText = totalPrice.toLocaleString('id-ID');
}

function toggleCart() {
    let modal = document.getElementById('cart-modal');
    if (modal.style.display === "block") {
        modal.style.display = "none";
    } else {
        modal.style.display = "block";
    }
}