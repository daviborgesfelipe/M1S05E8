Estas classes criadas durante os exercícios estão prontas para serem utilizadas em uma aplicação real. Por exemplo: podemos criar um sistema de pedidos, e, através da propriedade listaProdutos, podemos realizar uma iteração nos produtos de determinado pedido e imprimir cada um deles em tela.


Podemos chamar o método calcularTotal para exibir em tela o valor total de um determinado pedido.


A princípio, vamos apenas exibir essas informações no console. Usando o método de array forEach, faça um console.log em cada um dos produtos de cada um dos pedidos. O texto de saída pode ser qualquer um, à seu critério. Por exemplo:


Produto: ${produto.nome} | Valor un: ${produto.preco} | Total: ${produto.preco * produto.quantidade}


Faça também um console.log para exibir o valor total de cada pedido. Exemplo:


Preço total do pedido: R$ ${pedido.calcularTotal( )}


Dica: você pode utilizar o toLocaleString em um número para formata-lo como moeda. Dê uma olhadinha neste link...