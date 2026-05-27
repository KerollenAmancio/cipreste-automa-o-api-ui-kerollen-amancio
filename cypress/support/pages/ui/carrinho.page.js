import {Carrinho as cart}  from '../../elements/carrinho.js'

// Variáveis globais
const dados = {
  nome: '',
  valor: '',
}

class CarrinhoPage {

  capturarDadosProduto() {

    cy.get(cart.NOME_ITEM,{ timeout: 10000 })
      .invoke('text')
      .then((texto) => {

        dados.nome = texto.trim()

        cy.log(`Nome capturado: ${dados.nome}`)
      })

    cy.get(cart.VALOR_ITEM, { timeout: 10000 })
      .invoke('text')
      .then((texto) => {

        dados.valor = texto.trim()

        cy.log(`Valor capturado: ${dados.valor}`)
      })
  }

  clicarBotaoAddCarrinho() {
    cy.get(cart.BOTAO_ADD_CARRINHO).click()
  }

  validarProdutoAdicionadoAoCarrinho() {

    cy.get(cart.NOME_ITEM_TABLE)
      .invoke('text')
      .then((nomeCarrinho) => {

        expect(nomeCarrinho.trim()).to.equal(dados.nome)
      })

    cy.get(cart.VALOR_ITEM_TABLE)
      .invoke('text')
      .then((valorCarrinho) => {

        expect(valorCarrinho.trim()).to.equal(dados.valor)
      })

    cy.log('Produto adicionado ao carrinho com sucesso')
  }
}

export default new CarrinhoPage()