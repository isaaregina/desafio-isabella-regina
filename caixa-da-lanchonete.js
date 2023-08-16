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
}
