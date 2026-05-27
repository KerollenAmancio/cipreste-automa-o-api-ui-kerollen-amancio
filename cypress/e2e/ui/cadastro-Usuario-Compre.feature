#language: pt

Funcionalidade: Cadastro de usuário e validação de produto no carrinho

Cenario: Cadastrar usuário e adicionar produto ao carrinho

Dado que o usuário acessa o site Automation Exercise
Quando clicar na opção Signup Login
Quando preencher os dados para cadastro
Quando realizar o cadastro de um novo usuário
Quando visualizar a mensagem de usuário criado com sucesso
Quando retornar para a tela inicial e armazena o nome e o valor do produto
Quando adicionar o produto Men Tshirt ao carrinho
Então deve validar o nome e o valor do produto no carrinho