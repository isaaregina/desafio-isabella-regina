const CaixaDaLanchonete = require('./caixa-da-lanchonete');

describe('CaixaDaLanchonete', () => {
  let caixa;

  beforeEach(() => {
    caixa = new CaixaDaLanchonete();
  });

  it('deve calcular o valor correto da compra', () => {
    const valor = caixa.calcularValorDaCompra('credito', [
      'cafe,2',
      'sanduiche,1',
    ]);
    expect(valor).toBe('R$ 15,93');
  });

  it('deve retornar mensagem de erro para forma de pagamento inválida', () => {
    const mensagem = caixa.calcularValorDaCompra('paypal', ['cafe,1']);
    expect(mensagem).toBe('Forma de pagamento inválida!');
  });

  it('deve retornar mensagem de erro para itens inválidos', () => {
    const mensagem = caixa.calcularValorDaCompra('debito', ['agua,1']);
    expect(mensagem).toBe('Item inválido!');
  });

  it('deve retornar mensagem de erro para compra sem itens', () => {
    const mensagem = caixa.calcularValorDaCompra('dinheiro', []);
    expect(mensagem).toBe('Não há itens no carrinho de compra!');
  });
});
