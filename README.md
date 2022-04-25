<h1 align="center">Node-kafka</h1>

<h3> Base de estudos em stream de eventos / mensageira, onde a proposta inicial foi realizar uma introdução a produção e consumo de mensagens utilizando Node e Kafka</h3>
</br>

<h3 align="center"> Tecnologias utilizadas </a></h2>
<div align="center">

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) 
![Apache Kafka](https://img.shields.io/badge/Apache%20Kafka-000?style=for-the-badge&logo=apachekafka) 
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
</div>


## Utilização

- Clone o repositório;
- Instale as dependências com `yarn` ou `npm install`;
- Construa o broker Apache Kafka e MongoDB com `docker-compose up`

</br>

## Mapeamento 
</br>

### Portas
- `localhost:9000` -  consumer api
- `localhost:3333` - producer api
- `localhost:9092` - container Broker Kafka
- `localhost:2181` - container Zookeeper
- `localhost:27017` - container MongoDB

</br>

### Rotas
</br>

## Consumer api:
</br>

#### Buscar todos os usuários cadastrados:

	GET http://localhost:9000/users

#### Exemplo de retorno da busca por usuários:

```
{
	"count": 29,
	"users": [
		{
			"_id": "6265c461b8a8aab3196ff9c1",
			"email": "erna_doyle@undefined.hu",
			"name": "Erna",
			"createdAt": "2022-04-24T21:42:57.889Z",
			"updatedAt": "2022-04-24T21:42:57.889Z",
			"__v": 0
		}
  ]
}
```
#### Delete todos os usuários:

	DELETE http://localhost:9000/users

## Producer api:
</br>

### Enviar usuários para a fila:

	POST http://localhost:3333/


#### Parâmetros de corpo da requisição:
</br>

| Nome    | Tipo      | Descrição                          |
|---------|-----------|--------------------------------------|
| timer			| Número			|  <p>Tempo de espera entre cada produção em milissegundos </p>							|
| data			| Matriz			|  <p>Matriz de usuários a serem cadastrados. Quando vazia, os usuários fakes são buscados do [JSON GENERATOR](https://json-generator.com/). </p>							|

#### Exemplo de corpo de requisição:

```
{
	"timer": 500,
	"data": []
}
```

## Links úteis
</br>

[KafkaJS documentação oficial](https://kafka.js.org/docs/getting-started)

[Apache Kafka documentação oficial](https://kafka.apache.org/documentation/)

[Entendendo o Apache Kafka II - Medium](https://medium.com/luizalabs/entendendo-o-apache-kafka-ii-b19d79e175f5)

[Uma breve introdução ao Kafka](https://kafka.js.org/docs/introduction)

