class CaixaDaLanchonete {
  constructor() {
    this.cardapio = {
      cafe: 3.0,
      chantily: 1.5,
      suco: 6.2,
      sanduiche: 6.5,
      queijo: 2.0,
      salgado: 7.25,
      combo1: 9.5,
      combo2: 7.5,
    };

    this.formasDePagamento = {
      dinheiro: 0.95, // 5% de desconto
      debito: 1.0,
      credito: 1.03, // 3% de acréscimo
    };
  }

  calcularValorDaCompra(formaDePagamento, itens) {
    if (!this.formasDePagamento[formaDePagamento]) {
      return 'Forma de pagamento inválida!';
    }

    if (itens.length === 0) {
      return 'Não há itens no carrinho de compra!';
    }

    let total = 0;

    for (const itemInfo of itens) {
      const [codigo, quantidade] = itemInfo.split(',');

      if (!this.cardapio[codigo]) {
        return 'Item inválido!';
      }

      const precoItem = this.cardapio[codigo];
      total += precoItem * quantidade;
    }

    const formaDePagamentoInfo = this.formasDePagamento[formaDePagamento];
    total *= formaDePagamentoInfo;

    return `R$ ${total.toFixed(2).replace('.', ',')}`;
  }
}
