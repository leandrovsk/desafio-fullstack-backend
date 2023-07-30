
<h1 align="center">Desafio FullStack - API</h1>

<p align="center">Este é o backend da aplicação Desafio Fullstack - Um sistema para criação e gerenciamento de contatos.</p>


<p align="center">
  <a href="#endpoints">Endpoints</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>


## **Endpoints**


A API tem um total de 5 endpoints

<h2 align ='center'> Cadastrando Usúarios </h2>

`POST /register -  FORMATO DA REQUISIÇÃO`
```json
{
  "name": "José Maria da Silva",
  "email": "jose@mail.com",
  "password": "123456",
  "phone": "(00)00000-0000"
}
```

Caso a solicitação seja bem sucedida, deverá retornar os dados do usuário como abaixo:


`FORMATO DA RESPOSTA - STATUS 201`
```json
{
  "id" : "dae3c9d0-b317-40c6-9bfd-33c9ea936b9f",
  "name": "José Maria da Silva",
  "email": "jose@mail.com",
  "phone": "(00)00000-0000",
  "createdAt": "2023-07-30"
}
```

<h2 align ='center'> Possíveis erros </h2>

Caso você acabe errando e mandando algum campo errado, a resposta de erro como abaixo:

Email já existente no banco de dados:

`` FORMATO DA RESPOSTA - STATUS 409``
```json
  "message": "Email already exists"
```

Se caso falte algum campo na requisição:


`` FORMATO DA RESPOSTA - STATUS 400``
```json
{
  "message": {
      "name": [
          "Required"
      ],
      "email": [
          "Required"
      ],
      "password": [
          "Required"
      ],
      "phone": [
          "Required"
      ]
  }
}
```

<h2 align ='center'> Fazendo Login </h2>

`POST /login - FORMATO DA REQUISIÇÃO`
```json
{
	"email": "jose@mail.com",
	"password": "123456"
}
```

Caso dê tudo certo, a resposta será um accessToken como abaixo:

`POST /login -  FORMATO DA RESPOSTA - STATUS 200`
```json

{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxlYW5kcm9AbWFpbC5jb20iLCJpYXQiOjE2NzI5NDQzNTgsImV4cCI6MTY3Mjk0Nzk1OCwic3ViIjoiMSJ9.mpyzyIRuzotMOukNfYMtF70GPwUOPT-40eoURuMaKrQ"
}
```

<h2 align ='center'> Possíveis erros </h2>

Caso você acabe errando e mandando algum campo errado, a resposta de erro será assim:


`` FORMATO DA RESPOSTA - STATUS 403``
```json
  {
    "message": "Invalid credentials"
  }
```


## Rotas que necessitam de autorização

Rotas que necessitam de autorização deve ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

> Authorization: Bearer {accessToken}

Nos casos em que o acessToken informado for invalido, é esperada a seguinte resposta:

`` FORMATO DA RESPOSTA - STATUS 401``
```json
  {
    "message": "Invalid accessToken"
  }
```


<h2 align ='center'> Visualizar usuário</h2>

Para mostrar os dados dousuário logado: 

`GET /users -  FORMATO DA REQUISIÇÃO`

`FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "id" : "dae3c9d0-b317-40c6-9bfd-33c9ea936b9f",
  "name": "José Maria da Silva",
  "email": "jose@mail.com",
  "phone": "(00)00000-0000",
  "createdAt": "2023-07-30"
}
```

<h2 align ='center'> Editar usuário</h2>

<b>Para editar os dados do usuário:</b>

É possível enviar um ou mais campos para alteração:

`PATCH /users/{id do usuário} - FORMATO DA REQUISIÇÃO`
```json
{
  "email": "josemaria@mail.com"
}
```

`FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "id" : "dae3c9d0-b317-40c6-9bfd-33c9ea936b9f",
  "name": "José Maria da Silva",
  "email": "josemaria@mail.com",
  "phone": "(00)00000-0000",
  "createdAt": "2023-07-30"
}
```

<h2 align ='center'> Possíveis erros </h2>

Nos casos em que o campo email foi enviado e ele já exista no banco de dados:

`` FORMATO DA RESPOSTA - STATUS 409``
```json
  {
    "message": "Email already exists"
  }
```

<h2 align ='center'> Deletar usuário</h2>

<b>Para deletar os dados do usuário:</b>

`DELETE /users/{id do usuário} -  FORMATO DA REQUISIÇÃO`

`FORMATO DA RESPOSTA - STATUS 204 - NO CONTENT`


<h2 align ='center'> Erros comuns para rotas de GET, PATCH E DELETE</h2>

Caso recebido um UUID invalido:

`` FORMATO DA RESPOSTA - STATUS 400``
```json
  {
    "message": "Invalid UUID credentials"
  }
```

Caso o UUID recebido não exista no banco de dados:

`` FORMATO DA RESPOSTA - STATUS 404``
```json
  {
    "message": "User UUID not found"
  }
```

Caso tente alterar dados de um outro usuário:

`` FORMATO DA RESPOSTA - STATUS 400``
```json
  {
    "message": "Insufficient permissions"
  }
```

