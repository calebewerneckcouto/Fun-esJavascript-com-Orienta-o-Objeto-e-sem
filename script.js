class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    toString() {
        return `${this.name}, $${this.price.toFixed(2)} (${this.quantity} units)`;
    }
}

function total(product) {
    return product.price * product.quantity;
}

function updatePrice(product, percentage) {
    // Modifica o preço do produto (não precisa retornar nada)
    product.price = product.price * (1 + percentage / 100);
}

const p1 = new Product("Laptop", 1000.0, 5);
const p2 = new Product("Headphones", 200.0, 2);

const total1 = total(p1);
console.log("Valor total é: " + total1);
const total2 = total(p2);
console.log("Valor total é: " + total2);

// Atualiza o preço
updatePrice(p1, 20);
// Agora mostra o preço atualizado ou o novo valor total
console.log("Novo preço do Laptop: $" + p1.price.toFixed(2));
console.log("Novo valor total do Laptop: " + total(p1));

console.log(p1.toString());  // Com parênteses para chamar o método
console.log(p2.toString());

// Alternativa: também pode usar diretamente em strings
console.log(`Produto 1: ${p1}`);
console.log(`Produto 2: ${p2}`);