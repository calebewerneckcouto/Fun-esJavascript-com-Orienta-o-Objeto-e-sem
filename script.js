class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    // Método para calcular o total (usa 'this' para acessar propriedades do objeto)
    total() {
        return this.price * this.quantity;
    }

    // Método para atualizar o preço (usa 'this' para acessar propriedades do objeto)
    updatePrice(percentage) {
        this.price = this.price * (1 + percentage / 100);
    }

    // Método toString para representação em string
    toString() {
        return `${this.name}, $${this.price.toFixed(2)} (${this.quantity} units)`;
    }

    // Método opcional: para mostrar apenas o preço formatado
    getFormattedPrice() {
        return `$${this.price.toFixed(2)}`;
    }
}

const p1 = new Product("Laptop", 1000.0, 5);
const p2 = new Product("Headphones", 200.0, 2);

// Usando os métodos da classe
const total1 = p1.total();
console.log("Valor total é: $" + total1.toFixed(2));
const total2 = p2.total();
console.log("Valor total é: $" + total2.toFixed(2));

// Atualiza o preço usando o método da classe
p1.updatePrice(20);

// Agora mostra o preço atualizado
console.log("Novo preço do Laptop: " + p1.getFormattedPrice());

// Mostra o novo valor total (usando o método da classe)
console.log("Novo valor total do Laptop: $" + p1.total().toFixed(2));

// Usando o método toString
console.log(p1.toString());
console.log(p2.toString());

// Alternativa: também pode usar diretamente em strings (toString é chamado automaticamente)
console.log(`Produto 1: ${p1}`);
console.log(`Produto 2: ${p2}`);

// Demonstração adicional: atualizando o preço do segundo produto também
p2.updatePrice(10);
console.log(`\nApós aumento de 10%: ${p2}`);
console.log("Novo total dos headphones: $" + p2.total().toFixed(2));