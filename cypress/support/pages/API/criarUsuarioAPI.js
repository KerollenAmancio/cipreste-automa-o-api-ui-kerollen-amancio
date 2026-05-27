import Data from '../../Util/data.js'

class CriarUsuarioAPI {

    criarUsuario() {
        return cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/createAccount',
            form: true,
            body: {
                name: Data.nameUser(),
                email: Data.emailUser(),
                password: Data.passwordUser(),
                title: Data.titleUser(),
                birth_date: Data.birhdayUser(),
                birth_month: Data.birthmonthUser(),
                birth_year: Data.birthyearUser(),
                firstname: Data.nameUser(),
                lastname: Data.lastNameUser(),
                address1: Data.addressUser(),
                address2: Data.address2User(),
                country: Data.countryUser(),
                zipcode: Data.zipCodUser(),
                state: Data.stateUser(),
                city: Data.cityUser(),
                mobile_number: Data.mobileUser()
            },
            failOnStatusCode: false
        }).as('responseCriacaoUsuario')
    }

    validarStatusCode() {
        cy.get('@responseCriacaoUsuario').then((response) => {
            const body = JSON.parse(response.body)
            expect(body.responseCode).to.eq(201)
        })
    }

    validarMensagemUsuarioCriado(mensagemEsperada) {
        cy.get('@responseCriacaoUsuario').then((response) => {
            const body = JSON.parse(response.body)
            expect(body.message).to.eq(mensagemEsperada)
        })
    }

    validarEstruturaResponse(response) {
        cy.get('@responseCriacaoUsuario').then((response) => {
            const body = JSON.parse(response.body)
            expect(body).to.have.property('responseCode')
            expect(body).to.have.property('message')
        })
    }
}
export default new CriarUsuarioAPI()