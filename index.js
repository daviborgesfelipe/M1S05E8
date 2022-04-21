


class Produto {
    nome;
    preco;
    emEstoque;
    quantidade;

    constructor(nome, preco, emEstoque, quantidade){
        this.nome = nome;
        this.preco = preco;
        this.emEstoque = emEstoque;
        this.quantidade = quantidade;
    }
}

class Pedidos {
    numeroPedido;
    dataPedido;
    estaPago;
    listaProdutos;
    nomeCliente;


    constructor(numeroPedido, nomeCliente){
        this.numeroPedido = numeroPedido;
        this.dataPedido = new Date().toLocaleDateString();
        this.estaPago = false;
        this.listaProdutos = [];
        this.nomeCliente = nomeCliente;
    }

    adicionarProduto(produto) {
        this.listaProdutos.push(produto)
    }
    
     
    calcularTotal() {
        let valorTotal = 0;
        this.listaProdutos.forEach(produto => {
            valorTotal = valorTotal + (produto.preco * produto.quantidade);
            console.log(`## Produto ${produto.nome} ## Cliente: ${this.nomeCliente} ## Numero Pedido: ${this.numeroPedido}##`)
            console.log(` Produto: ${produto.nome} | Valor de uma unidade: ${produto.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} | Quantidade: ${produto.quantidade}| Total: R$ ${produto.preco * produto.quantidade}`)
            console.log(`Preço total do pedido: R$ ${valorTotal}`)
        });
        return `Preço total do compra: R$ ${valorTotal}`;
    }
}

/*apartir new que é criado um objeto concreto apartir da class Produto - INSTÂNCIAS*/
const produto1 = new Produto ("Toalha", 25, true, 2);
const produto2 = new Produto ("Parafina", 15, true, 1);
const produto3 = new Produto ("Quilha", 75, true, 2);
const produto4 = new Produto ("Prancha", 3000, true, 1);
const produto5 = new Produto ("Roupa de Borracha", 2400, true, 1);

/*apartir new que é criado um objeto concreto apartir da class Pedidos - INSTÂNCIAS*/
const pedido1 = new Pedidos (202201, "Davi Borges");
const pedido2 = new Pedidos (202202, "Kelly Slater");

pedido1.adicionarProduto(produto1)
pedido1.adicionarProduto(produto5)
pedido1.adicionarProduto(produto2)

pedido2.adicionarProduto(produto3)
pedido2.adicionarProduto(produto4)



console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
console.log(pedido1.calcularTotal())
console.log(pedido2.calcularTotal())

/*Exibe a lista de produto e o valor total do pedido.*/ 
// console.log(`################################$RESULTADO$################################`)

// console.log(` Produto: ${produto1.nome} | Valor de uma unidade: ${produto1.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} | Total: R$ ${produto1.preco * produto1.quantidade} `)

// console.log(` Produto: ${produto2.nome} | Valor de uma unidade: ${produto2.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} | Total: R$ ${produto2.preco * produto2.quantidade} `)

// console.log(` Produto: ${produto3.nome} | Valor de uma unidade: ${produto3.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} | Total: R$ ${produto3.preco * produto3.quantidade} `)

// console.log(` Produto: ${produto4.nome} | Valor de uma unidade: ${produto4.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} | Total: R$ ${produto4.preco * produto4.quantidade} `)

// console.log(` Produto: ${produto5.nome} | Valor de uma unidade: ${produto5.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} | Total: R$ ${produto5.preco * produto5.quantidade} `)


// function veiculo() {
//     return {
//     nome,
//     preco,
//     emEstoque,
//     quantidade,

//     buzinar: () => {},
//     }
// }