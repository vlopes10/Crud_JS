/**
 * Arquivo: Server.js
 * Descrição:                        
 * Author:
 * Data de Criação: 18/12/2018
 *
 */

//configurando setup do app e realizando CHAMADAS DOS PACOTES

var express = require("express"); // para utilizar o middleware do express, criando variáveis de importações 
var app = express();
var bodyParser = require("body-parser");

// configurar variável app para usar o body parser, para ajudar a retornar dados à partir de um post 

app.use(bodyParser.urlencoded({
    extended: true
}));
app.unsubscribe(bodyParser.json()); // vamos retornar dados à partir de um JSON através de um POST 

// definir porta onde será executada a API 

var port = process.env.port || 8000;

// criar variável de router - onde rotas serão definidas - ao invés de criar pasta chamas routes

var router = express.Router(); // irá pegar todas as instâncias rotas do express 


//criando rota de teste
// req = request , res = response
router.get('/', function (req, res) {
    res.json({
        message: "Ok, tudo certo, bem-vindo à loja"
    })

});

app.use('/api', router); // todas as rotas serão prefixadas com API's , isso é um padrão de quando criamos um API inteligente

app.listen(port) // retorna chamando um HTTP
console.log("Iniciando APP na porta " + port);