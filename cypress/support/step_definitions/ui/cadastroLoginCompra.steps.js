import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CarrinhoPage from '../../pages/ui/Carrinho.page';
import Home from '../../pages/ui/home.page';
import DadosContato from '../../pages/ui/dadosContato.page';
import Login from '../../pages/ui/login.page'

Given('que o usuário acessa o site Automation Exercise', () => {
  cy.visit('/');
  cy.log()

});

When('clicar na opção Signup Login', () => {
  Home.acessarLoginCadastro()

});

When('preencher os dados para cadastro', () => {

  Login.preencherCamposPrecadastro()
});

When('realizar o cadastro de um novo usuário', () => {
  DadosContato.preencherDadosNovoUser()
});

When('visualizar a mensagem de usuário criado com sucesso', () => {
  DadosContato.validarUsuarioCriado()

});

When('retornar para a tela inicial e armazena o nome e o valor do produto', () => {
  CarrinhoPage.capturarDadosProduto()

});

When('adicionar o produto Men Tshirt ao carrinho', () => {
  CarrinhoPage.clicarBotaoAddCarrinho()
  Home.validarModalProdutoAdicionadoAcessarCarrinho()

});

Then('deve validar o nome e o valor do produto no carrinho', () => {
  CarrinhoPage.validarProdutoAdicionadoAoCarrinho()
});