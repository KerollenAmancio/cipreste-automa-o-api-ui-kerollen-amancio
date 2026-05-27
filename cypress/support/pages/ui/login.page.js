import {Login as el } from '../../elements/login.js';
import  Data  from '../../Util/data';

class Login {

    preencherCamposPrecadastro() {
        this.incerirNome(Data.nameUser())
        this.incerirEmail(Data.emailUser())
        this.clicarBotaoSingup()
    }

    incerirNome(nome) {
        cy.get(el.NOME).type(nome)
    }

    incerirEmail(email) {
        
    cy.get(el.ENDERECO_EMAIL).type(email)
        
    }

    clicarBotaoSingup() {
        cy.get(el.BOTAO_CADASTRO).click()
    }

}
export default new Login()