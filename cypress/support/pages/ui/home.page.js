import {MenuHome as el}  from '../../elements/home.js'

class Home {
    acessarLoginCadastro() {
        cy.get(el.CADASTRO_LOGIN).click()
    }

    validarModalProdutoAdicionadoAcessarCarrinho() {
        cy.get(el.MODAL_TITLE).should('contain', 'Added!')
        cy.get(el.BOTAO_ADD_CART_MODAL).click()
    }
}
export default new Home()