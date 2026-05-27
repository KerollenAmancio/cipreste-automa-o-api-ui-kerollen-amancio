import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CriarUsuarioAPI from "../../pages/API/criarUsuarioAPI.js";


let responseCriacaoUsuario;

Given('que envio uma requisição para criação de usuário na API', () => {
    CriarUsuarioAPI.criarUsuario()
})

When('a resposta retornar com status code {string}' , (statusCodeEsperado) => {
    CriarUsuarioAPI.validarStatusCode()})

When('a mensagem de sucesso for {string}', (mensagemEsperada) => {
    CriarUsuarioAPI.validarMensagemUsuarioCriado(mensagemEsperada)
})

Then('devo validar a estrutura da resposta de criação do usuário', () => {
    CriarUsuarioAPI.validarEstruturaResponse()
})