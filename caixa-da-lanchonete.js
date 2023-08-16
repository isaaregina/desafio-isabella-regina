class CaixaDaLanchonete {
  constructor() {
    this.cardapio = {
      cafe: { valor: 3.0, extraDe: null },
      chantily: { valor: 1.5, extraDe: 'cafe' },
      suco: { valor: 6.2, extraDe: null },
      sanduiche: { valor: 6.5, extraDe: null },
      queijo: { valor: 2.0, extraDe: 'sanduiche' },
      salgado: { valor: 7.25, extraDe: null },
      combo1: { valor: 9.5, extraDe: null },
      combo2: { valor: 7.5, extraDe: null },
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
    const itensPrincipais = {}; // Para rastrear os itens principais pedidos
    let itemExtraSemPrincipal = false;

    for (const itemInfo of itens) {
      const [codigo, quantidadeStr] = itemInfo.split(',');

      const item = this.cardapio[codigo];

      if (!item) {
        return 'Item inválido!';
      }

      if (item.extraDe && !itensPrincipais[item.extraDe]) {
        itemExtraSemPrincipal = true;
        break; // Não precisamos continuar verificando os demais itens se já encontramos um item extra sem principal
      }

      const precoItem = item.valor;
      const quantidade = parseInt(quantidadeStr);

      if (!isNaN(quantidade)) {
        total += precoItem * quantidade;
      } else {
        return 'Quantidade inválida!';
      }

      if (
        !item.extraDe ||
        (!item.extraDe.startsWith('extra') && !itensPrincipais[item.extraDe])
      ) {
        itensPrincipais[codigo] = true; // Marca o item principal como pedido
      }
    }

    if (itemExtraSemPrincipal) {
      return 'Item extra não pode ser pedido sem o principal';
    }

    const formaDePagamentoInfo = this.formasDePagamento[formaDePagamento];
    total *= formaDePagamentoInfo;

    return `R$ ${total.toFixed(2).replace('.', ',')}`;
  }
}

module.exports = CaixaDaLanchonete;
