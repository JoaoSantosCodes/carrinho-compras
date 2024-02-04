// Declaration of a global variable to track the total cost
let totalGeral;

// Initialization function to clear the cart and set the total to zero
limpar();

// Function to add a product to the cart
function adicionar() {
    // Retrieve input values: product name, unit price, and quantity
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = parseFloat(produto.split('R$')[1]); // Assuming unit price is a floating-point number
    let quantidade = parseInt(document.getElementById('quantidade').value);

    // Calculate the subtotal for the current product
    let preco = quantidade * valorUnitario;

    // Get the cart element and add a new section for the current product
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
    </section>`;

    // Update the total cost
    totalGeral = (totalGeral || 0) + preco; // Initialize totalGeral to 0 if undefined
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;

    // Reset the quantity input field to 0
    document.getElementById('quantidade').value = 0;
}

// Function to clear the cart and reset the total to zero
function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}
