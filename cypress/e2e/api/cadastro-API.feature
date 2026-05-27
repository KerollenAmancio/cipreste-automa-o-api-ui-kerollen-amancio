#language: pt

Funcionalidade: Cadastro de usuário via API

Cenário: Criar um usuário com dados válidos via API

Dado que envio uma requisição para criação de usuário na API
Quando a resposta retornar com status code "201"
Quando a mensagem de sucesso for "User created!"
Então devo validar a estrutura da resposta de criação do usuário